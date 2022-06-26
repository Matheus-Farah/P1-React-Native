import React, { useState } from "react";
import {
  Image,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import LogoPinterest from "../../assets/images/Logo-Pinterest.png";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";

export const Login = () => {
  const [input, setInput] = useState("");
  const [inputS, setInputS] = useState("");
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <Image source={LogoPinterest} style={styles.image} />

      <Text style={styles.title}>Bem-vindo ao Pinterest</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#696969"}
        value={input}
        onChangeText={(texto) => setInput(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={"#696969"}
        value={inputS}
        onChangeText={(texto) => setInputS(texto)}
        secureTextEntry={hidePass}
      />

      <Text style={styles.texto} onPress={() => Linking.openURL("link")}>
        Esqueceu sua senha?
      </Text>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>Ou</Text>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonFacebook}>
        <Image source={facebook} style={styles.imageFacebook} />
        <Text style={styles.buttonText}>Continuar com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonGoogle}>
        <Image source={google} style={styles.imageGoogle} />
        <Text style={styles.buttonTextGoogle}>Continuar com o Google</Text>
      </TouchableOpacity>

      <Text style={styles.info}>
        By continuing, you agree to Pinterest's{" "}
        <Text
          style={styles.hyperlinkStyle}
          onPress={() =>
            Linking.openURL("https://policy.pinterest.com/en/terms-of-service")
          }
        >
          Terms of Service
        </Text>{" "}
        and acknowledge you've read our{" "}
        <Text
          style={styles.hyperlinkStyle}
          onPress={() =>
            Linking.openURL("https://policy.pinterest.com/en/privacy-policy")
          }
        >
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
};
