
import { db } from '../config/firebase'
import { storage } from '../config/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
// import * as ImagePicker from 'expo-image-picker';
import React from 'react';

export default function AddInstitutions(){
    const [_name, setName] = useState("")
    const [_link, setLink] = useState("")
    const [_faculty, setFaculty] = useState("")
    const [_course, setCourse] = useState("")
    const [_courseInfo, setCourseInfo] = useState("")
    const [_address, setAddress] = useState("")
    const [_telephone, setTelephone] = useState("")
    const [prospectus, setProspectus] = useState("")
    const [resumeGuidelines, setResumeGuidelines] = useState("")
    const [resumetemplate, setResumetemplate] = useState("")
    
    const addDetails = (() => {

        const collectionReF = collection(db, "tertiary");
        const tertiary = {
            InstitutionName: _name,
            InstitutionLiink: _link,
            Faculty: _faculty,
            CourseName:_course,
            CourseInfo:_courseInfo,
            InstitutionAddress:_address,
            prospectus:prospectus,
            ResumeGuidelines:resumeGuidelines,
            Resumetemplate:resumetemplate,
        };
        addDoc(collectionReF, tertiary).then(()=>{
            alert("added successfully")
        }).catch((err)=>{
            console.log(err);
        })
        console.log(_name);
       
    })
        // alert('successfully added')
    
    return(
        <View style={styles.container}>
            <View style={styles.main}>
       
        <TextInput style={styles.inputs}
            placeholder='Institution Name'
            onChangeText={(text) => setName(text)}
        />
        <TextInput style={styles.inputs}
            placeholder='Link'
            onChangeText={(text) => setLink(text)}
        />
        <TextInput
            style={styles.inputs}
            placeholder='Course Name' onChangeText={(text) => setCourse(text)}
        />
          <TextInput
            style={styles.inputs}
            placeholder='Course details' onChangeText={(text) => setCourseInfo(text)}
        />
          <TextInput
            style={styles.inputs}
            placeholder='Institution Address' onChangeText={(text) => setAddress(text)}
        />
          <TextInput
            style={styles.inputs}
            placeholder='Institution Telephone' onChangeText={(text) => setTelephone(text)}
        />
            <TextInput
            style={styles.inputs}
            placeholder='Prospectus link' onChangeText={(text) => setProspectus(text)}
        />
        
        <TextInput
            style={styles.inputs}
            placeholder='Enter Faculty/College' onChangeText={(text) => setFaculty(text)}
        />
          <TextInput
            style={styles.inputs}
            placeholder='Enter resume guidelines' onChangeText={(text) => setResumeGuidelines(text)}
        />
          <TextInput
            style={styles.inputs}
            placeholder='Enter free online resume templates' onChangeText={(text) => setResumetemplate(text)}
        />
      
      
        
        <TouchableOpacity>
            <View style={styles.sign}>
                <Text style={{ color: 'white', marginLeft: 20, marginTop: 10, fontSize: 20, fontWeight: 700 }} onPress={addDetails}>ADD INFO</Text>
            </View>
        </TouchableOpacity>
       
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
main:{
    borderWidth:3,
    padding:15,
    borderRadius:15,
    borderColor:'#184FDA',
    width:'100%'

},
sign: {
    width: 171,
    height: 44,
    borderRadius: 30,
    backgroundColor: '#56CCF2',
    marginLeft: 40,
    marginTop: 30,
    // borderWidth:3
},
inputs: {
    color: 'white',
    borderRadius:10,
    fontSize: 19,
    fontWeight: 500,
    borderWidth:2,
    borderColor:'#56CCF2',
    marginBottom:20,
    paddingLeft:35,
    
    // marginLeft:20,
    // marginTop:30

},
// down:{
//     backgroundColor:'#184FDA',
//     height: 180 ,
//     width: 370,
//     borderTopRightRadius: 200,
// },
})
    
