import React from "react";
import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Dabi from "../../assets/images/DabiDraw.jpeg";

export const Pin = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={true}
        backgroundColor="#000"
      />

      <View style={styles.view}>
        <ImageBackground source={Dabi} style={{ flex: 1 }}>
          <Ionicons name="arrow-back" color="#000" size={30} />
          <Ionicons name="ellipsis-horizontal" color="#000" size={30}/>
        </ImageBackground>
      </View>

      
    </View>
  );
};
