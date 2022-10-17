import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Admin from './pages/admin';
import AddInstitutions from './pages/addInstitutions';
import Edit from './pages/edit';

export default function App() {
  const stack=createNativeStackNavigator();

  return (
   <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown: false,}}>
    
      <stack.Screen name='admin' component={Admin}/>
      <stack.Screen name='add' component={AddInstitutions}/>
      <stack.Screen name='edit' component={Edit}/>
    </stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
