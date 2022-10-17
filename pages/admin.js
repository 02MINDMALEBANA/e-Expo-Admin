
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable,ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import {db} from '../config/firebase'
import { FlatGrid } from 'react-native-super-grid';
import {Ionicons,MaterialCommunityIcons,FontAwesome5} from '@expo/vector-icons';

import React from 'react';

export default function Admin ({navigation}){
    const [exhibition, setExhibition] = useState([])
    const expoRef = collection(db, 'tertiary')

    const getExpo = async () =>{
          const data =  await getDocs(expoRef)
         
         
          console.log( data.docs.map((results)=>(results.data())))
          setExhibition( data.docs.map((results)=>({...results.data(), id:results.id})))
    }

    useEffect(()=>{
      

      getExpo()
           
    },[])
    ////delete function
    function deletedetail(id) {
        // alert('delete clicked ', { id })

        const getDoc = doc(db, 'tertiary', id)
        deleteDoc(getDoc).then(() => {
            alert('deledted successfully')
        }).catch(err => {
            console.log(err)
        })

    }
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:'white',height:80,width:300,borderRadius:15}}> 
                <Text style={{color:'blue',fontSize:26,fontWeight:500,marginTop:25,marginLeft:40}}>e-Expo Admin</Text>
            </View>
           
            <TouchableOpacity>
                <View style={styles.sign}>
                    <Text style={{ color: 'white', marginLeft: 20, marginTop: 10, fontSize: 14, fontWeight: 500 }} onPress={()=>navigation.navigate('add')}>Add Details</Text>
                </View>
            </TouchableOpacity>
              
   
            <View>
                <ScrollView>
                <FlatGrid
                 data={exhibition}
                 style={styles.gridView}
                //    spacing={width * 0.05}
                   renderItem={({item})=>
                       <Pressable>
                           <Text style={styles.output} >Name:{item.InstitutionName}</Text>
                           <Text style={styles.output}>Course:{item.CourseName}</Text>
                           <Text style={styles.output}>Course Details:{item.CourseInfo}</Text>
                           <Text style={styles.output}>Faculty:{item.Faculty}</Text>
                           <Text style={styles.output}>Address:{item.InstitutionAddress}</Text>
                           <Text style={styles.output}>Link:{item.InstitutionLink}</Text>
                           <TouchableOpacity>
                               <View style={styles.sign}>
                                   <Text style={{ color: 'white', marginLeft: 20, marginTop: 10, fontSize: 14, fontWeight: 500 }} onPress={deletedetail}>Delete</Text>
                               </View>
                           </TouchableOpacity>
                           <TouchableOpacity>
                               <View style={styles.sign}>
                                   <Text style={{ color: 'white', marginLeft: 20, marginTop: 10, fontSize: 14, fontWeight: 500 }} onPress={() => navigation.navigate('edit')}>Edit</Text>
                               </View>
                           </TouchableOpacity>
                       </Pressable>
                   
                }
                keyExtractor={(item) => item.id}
                />
                {/* {
                    exhibition.map((res,index)=>(
                        <View key={index}>
                         <Text style={styles.output} >Name:{res.InstitutionName}</Text>
                        <Text>Course:{res.CourseName}</Text>
                        </View>
                    ))
                } */}
               </ScrollView>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#184FDA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sign: {
        width: 110,
        height: 44,
        borderRadius: 30,
        backgroundColor: '#56CCF2',
        marginLeft: 10,
        marginTop: 30,
        // borderWidth:3
    },
    output:{
        color:'white',
    }
})