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
        marginTop: 30,
        borderRadius: 15,
        width: '85%'
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    texto: {
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
    button: {
        backgroundColor: '#FF0000',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonFacebook: {
        backgroundColor: '#5A66FB',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row'
    },
    buttonGoogle: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        width: '66%'
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
    icon: {
        width: '15%',
        color: '#',
    },
    image: {
        width: 80,
        height: 80,
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
});