import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#363636',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 15,
    },
    inputContainer: {
        alignItems: 'flex-start'
    },

    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    texto: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10,
    },
    textoInput: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
    },
    info: {
        color: '#fff',
        fontSize: 12,
        marginTop: 20,
        textAlign: 'center',
        width: '50%'
    },
    infoLink: {
        color: '#fff',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        width: '50%'
    },

    button: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
        width: '75%',
        marginTop: 20
        
    },
    buttonFacebook: {
        backgroundColor: '#5A66FB',
        padding: 10,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        width: "75%",
        flexDirection: 'row'
    },
    buttonGoogle: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 200,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 20,
        flexDirection: 'row',
        width: '75%'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonTextGoogle: {
        color: '#000',
        fontSize: 17,
        fontWeight: 'bold'
    },

    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    imageFacebook: {
        marginRight: 15
    },
    imageGoogle: {
        marginRight: 15
    },

    hyperlinkStyle: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    line: {
        textAlign: 'center',
        color: '#696969',
        marginTop: 5
    }
});