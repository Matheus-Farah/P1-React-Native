import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        height: '70%',
        width: '100%',
    },
    viewImage: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '93%',
        marginTop: 10,
        marginLeft: 10
    },
    viewS: {
        marginTop: 440,
        marginLeft: 360,
        backgroundColor: "rgba(52,52,52,0.8)",
        borderRadius: 10
    },
    inferior: {
        flex: 1,
        height: "30%",
        width: "100%",
        backgroundColor: 'gray'
    },
    
    texto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    texto2: {
        color: '#fff',
        fontSize: 30,
        marginTop: 30,
        fontWeight: 'bold'
    },
    order: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 20,
        justifyContent: 'space-between',
    },

    botao1: {
        backgroundColor: '#2f4f4f',
        borderRadius: 100,
        padding: 10,
        alignItems: 'center',
        width: 100,
        height: 60,
        paddingBottom: 5, 
        marginLeft: 50
    },
    botaoS: {
        backgroundColor: '#FFF',
        borderRadius: 100,
        padding: 10,
        alignItems: 'center',
        width: 100,
        height: 60,
        marginRight: 15,
    },
    textBotao: {
        paddingTop: 5,
        fontSize: 20,
        color: "#000",
    },
});