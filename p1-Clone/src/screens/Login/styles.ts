import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'lightgray',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 20,
        borderRadius: 7,
        width: 100,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    image: {
        width: 50,
        height: 50,
        marginTop: 5
    },
    texto: {
        color: '#fff',
        fontSize: 15,
        marginTop: 30,
        textAlign: 'left'
    }
});