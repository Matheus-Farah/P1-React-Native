import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const Inicio = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={true}
        backgroundColor="#000"
      />

      <View style={styles.navbar}>
        <TouchableOpacity>
          <Ionicons name="home" color="#808080" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" color="#808080" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" color="#808080" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" color="#808080" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="home" color="#808080" size={30}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
