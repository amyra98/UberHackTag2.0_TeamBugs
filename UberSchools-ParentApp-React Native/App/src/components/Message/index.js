import React from "react";
import { View, Text } from "react-native";

import styles from './styles';

const Message = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journey Overview</Text>
      <Text style={styles.text}>
        The bus is on time to reach the school at 7.15 AM, which is 15 min prior to the school timings. You would be able to track the movement of the bus as soon as your ward boards the bus.
      </Text>
      <Text style={styles.learnMore}>More Details</Text>
    </View>
  );
};

export default Message;
