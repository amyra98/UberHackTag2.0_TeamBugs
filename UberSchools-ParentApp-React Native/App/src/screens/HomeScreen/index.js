import React from "react";
import { View, Dimensions } from "react-native";

import HomeMap from '../../components/HomeMap';
import Message from '../../components/Message';
import HomeBoxes from '../../components/HomeBoxes';

const HomeScreen = (props) => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 470}}>
        <HomeMap />
      </View>
      <Message />
      <HomeBoxes />
    </View>
  );
};

export default HomeScreen;
