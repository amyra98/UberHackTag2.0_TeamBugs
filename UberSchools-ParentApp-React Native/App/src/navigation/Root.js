import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen"
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from "./CustomDrawer";
import { View, Text} from "react-native";

const Drawer = createDrawerNavigator();

const DummyScreen = (props) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{props.name}</Text>
    </View>
)


const RootNavigator = (props) => {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={
          (props) => (
            <CustomDrawer {...props} />)
        }>
          <Drawer.Screen name="Home" component={HomeScreen} />
  
          <Drawer.Screen name="Ride History">
             {() => <DummyScreen name={"Ride History"} />}
          </Drawer.Screen>
  
          <Drawer.Screen name="Help">
            {() => <DummyScreen name={"Help"} />}
          </Drawer.Screen>
  
          <Drawer.Screen name="Fees and Payment">
            {() => <DummyScreen name={"Fees and Payment"} />}
          </Drawer.Screen>
  
          <Drawer.Screen name="Settings">
            {() => <DummyScreen name={"Settings"} />}
          </Drawer.Screen>
  
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };
  
  export default RootNavigator;

