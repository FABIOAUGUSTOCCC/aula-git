import { StyleSheet, Text, View } from "react-native";

export default function HeaderCadastro({ etapaAtual }) {

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.text}> Cadastro</Text>
            </View>
            <View style={styles.steps}>
                <View style={etapaAtual == 0 ? styles.selectedStepLine : styles.stepLine}></View>
                <View style={etapaAtual == 1 ? styles.selectedStepLine : styles.stepLine}></View>
                <View style={etapaAtual == 2 ? styles.selectedStepLine : styles.stepLine}></View>
                <View style={etapaAtual == 3 ? styles.selectedStepLine : styles.stepLine}></View>
                <View style={etapaAtual == 4 ? styles.selectedStepLine : styles.stepLine}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:55,
    },
    steps: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    stepLine: {
        borderBottomWidth: 1,
        borderColor: 'black',
        width: '15%',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    selectedStepLine: {
        borderBottomWidth: 1,
        borderColor: '#FF0000',
        width: '15%',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        fontSize: 20,
        marginBottom:10,
        fontWeight: 'bold',
    }
})