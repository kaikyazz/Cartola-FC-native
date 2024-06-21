import { StyleSheet, View, Image, Text } from "react-native";

export function BancodeReservas({nome}: any) {
  return (

    <View style={styles.banco}>
      <Image
        style={styles.mais} resizeMode='stretch'
        source={require('../../assets/mais.png')}
        />
      <View style={styles.bolaSombra}/>
      <View style={styles.bola } />
      <Text style={styles.nomeRes}> {nome} </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  banco: {
    alignItems: "center",
  },

  bola: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#cccccc",
    position: "absolute",
  },

  mais:{
    height: 30,
    width: 30,
    position: "absolute",
    zIndex: 1,
    top: "9%",
  },

  bolaSombra: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#989898",
    position: "relative",
    marginTop: 2
  },
  nomeRes:{
    fontFamily: 'opensans-bold',
    fontWeight: "bold",
    fontSize: 9,
    lineHeight: 9,
    marginTop: 5,
    color: "#979797",
  },

});