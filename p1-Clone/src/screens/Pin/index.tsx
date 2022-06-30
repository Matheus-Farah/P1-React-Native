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
        barStyle="dark-content"
        hidden={true}
        backgroundColor="#000"
      />

      <View style={styles.view}>
        <ImageBackground source={Dabi} style={{ flex: 1 }}>
          <View style={styles.viewImage}>
            <Ionicons name="arrow-back" color="#fff" size={30} />
            <Ionicons name="ellipsis-horizontal" color="#fff" size={30} />
          </View>

          <View style={styles.viewS}>
            <TouchableOpacity>
              <Ionicons name="search" color="#fff" size={30} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={[styles.container, styles.inferior]}>
        <Text style={styles.texto}>Twitter</Text>
        <Text style={styles.texto2}>こふなみ on Twitter</Text>

        <View style={styles.inferior}>
          <View>
            <View style={styles.order}>
              <Ionicons
                name="chatbubble-outline"
                color="#fff"
                size={30}
                style={{ marginTop: 15 }}
              />
              <Ionicons
                name="share-social"
                color="#fff"
                size={30}
                style={{ marginTop: 15 }}
              />

              <TouchableOpacity style={styles.botao1}>
                <Text style={styles.textBotao}>Read it</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoS}>
                <Text style={styles.textBotao}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
