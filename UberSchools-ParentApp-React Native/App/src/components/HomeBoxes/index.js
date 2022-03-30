import React from "react";
import { View, Text } from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from './styles.js';

const HomeBoxes = (props) => {
  
  return (
    <View>
      {/*  Top Row*/}
      <View style={styles.heading}>
        <Text style={styles.inputText}>Estimated Time of Arrival</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>7 min</Text>
          <FontAwesome name={'chevron-right'} size={16} />
        </View>
      </View>

      {/* Bus Information */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name={'doubleright'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.bottomText}>Bus No: B420</Text>
      </View>

      {/* Time Information */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <AntDesign name={'checkcircle'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.bottomText}>Leave now to reach the bus stop timely.</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.paddingBottom}>..</Text>
      </View>

    </View>
    
  );
};

export default HomeBoxes;
