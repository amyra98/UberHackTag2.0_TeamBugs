import React from "react";
import { View, Text, Pressable } from "react-native";
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import Avatar, { Sizes } from 'rn-avatar';
import AntDesign from 'react-native-vector-icons/AntDesign'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: '#212121', padding: 15}}>

        {/* User Row */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
         
            <Avatar
            size={Sizes.LARGE}
            source={require('../assets/avatars/a_bgless.png')}
            containerStyle={{ margin: 10 }}
            />
          <View>
            <Text 
            style={{
                color: 'white', 
                fontSize: 24}}>
                    Varun Sharma
            </Text>
            
            <Text 
            style={{
                color: 'lightgrey'}}>
                    Student at FASN
            </Text>
         
          </View>
        </View>

        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: '#919191',
          borderTopWidth: 1,
          borderTopColor: '#919191',
          paddingVertical: 5,
          marginVertical: 10,
          flexDirection:'row',
          alignContent:'space-between',
          
        }}>
          <Pressable
            onPress={() => {console.warn('Profile')}}>
            <Text style={{color: '#dddddd', paddingVertical: 5,}}>Edit My Profile                                       </Text>
          </Pressable>
          <AntDesign name={'arrowright'} size={20} color={'#ffffff'} style={{paddingVertical:5,}} />
        </View>


        <Pressable onPress={() => {console.warn('Contact')}}>
          <Text style={{color: 'white', paddingVertical: 5}}>Contact FAS</Text>
        </Pressable>


      </View>

      <DrawerItemList {...props} />

      <Pressable onPress={() => {console.warn('Logout')}}>
        <Text style={{padding: 5, paddingLeft: 20, paddingTop:10}}>Logout</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
