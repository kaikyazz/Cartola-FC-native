import { StyleSheet, View, Image, Text } from "react-native";

export function BolasCampo({nomeTitular}: any) {
  return (

    <View style={styles.bolasVerdes}>
        <Image
        style={styles.maisCampo} resizeMode='stretch'
        source={require('../../assets/maisCampo.png')}
        />
        <View style={styles.bolaSombraCampo}/>
        <View style={styles.bolaCampo } />
        <Text style={styles.nomeCampo}> {nomeTitular} </Text>
    </View>
  );
}

const styles = StyleSheet.create({

    bolasVerdes: {
        alignItems: "center",
        zIndex: 1,
    },

    bolaCampo: {
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: "#28ca5f",
        position: "absolute",
    },

    maisCampo:{
        height: 30,
        width: 30,
        position: "absolute",
        zIndex: 1,
        top: "5%",
    },

    bolaSombraCampo: {
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: "rgba(22, 99, 46, 0.8)",
        position: "relative",
        marginTop: 2
    },
    nomeCampo:{
        fontFamily: 'opensans-bold',
        fontWeight: "bold",
        fontSize: 9,
        lineHeight: 9,
        marginTop: 2,
        padding: 1,
        color: "white",
        backgroundColor: "#10883d",
        borderRadius: 2
    },
});