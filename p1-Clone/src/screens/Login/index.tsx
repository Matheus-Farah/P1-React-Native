import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import LogoPinterest from "../../assets/images/Logo-Pinterest.png";

export const Login = () => {
  const [email, setEmail] = useState();
  return (
    <View style={styles.container}>
      <Image source={LogoPinterest} style={styles.image} />

      <Text style={styles.title}>Bem-vindo ao Pinterest</Text>

      <Text style={styles.texto}>Email</Text>

      <TextInput style={styles.input} value={email} placeholder ='Email' />
    </View>
  );
};
