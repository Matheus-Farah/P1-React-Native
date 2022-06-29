import React, { useState } from "react";
import {
  Image,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { styles } from "./styles";
import LogoPinterest from "../../assets/images/Logo-Pinterest.png";
import facebook from "../../assets/images/facebook.png";
import google from "../../assets/images/google.png";

export const Login = () => {
  const [input, setInput] = useState("");
  const [inputS, setInputS] = useState("");
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={true}
        backgroundColor="#000"
      />
      <Image source={LogoPinterest} style={styles.image} />

      <Text style={styles.title}>Welcome to Pinterest</Text>

      <View style={{ width: "75%", marginLeft: 20 }}>
        <Text style={styles.textoInput}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#696969"}
          value={input}
          onChangeText={(texto) => setInput(texto)}
        />

        <Text style={styles.textoInput}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={"#696969"}
          value={inputS}
          onChangeText={(texto) => setInputS(texto)}
          secureTextEntry={hidePass}
        />

        <Text style={styles.texto} onPress={() => Linking.openURL("link")}>
          Forgot your password?
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>Or</Text>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonFacebook}>
        <Image source={facebook} style={styles.imageFacebook} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonGoogle}>
        <Image source={google} style={styles.imageGoogle} />
        <Text style={styles.buttonTextGoogle}>Continue with Google</Text>
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

      <View>
        <Text style={styles.line}>____________________</Text>
      </View>

      <Text style={styles.infoLink} onPress={() => Linking.openURL("link")}>
        Not on Pinterest yet? Sign up
      </Text>
      <Text
        style={styles.infoLink}
        onPress={() =>
          Linking.openURL("https://br.pinterest.com/business/hub/")
        }
      >
        Are you a business? Get started here!
      </Text>
    </View>
  );
};
