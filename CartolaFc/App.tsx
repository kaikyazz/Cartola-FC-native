import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from "react-native";
import { BancodeReservas } from "./src/components/BancodeReservas";
import { InfoMerc } from "./src/components/InfoMerc";
import { PosicaoCampo } from "./src/components/PosicaoCampo";




export default function App() {
  return (
    <View style={styles.container}>
      <InfoMerc />
      <View style={styles.meioCartola}>
        <Image
            style={styles.gatoMestre} resizeMode='stretch'
            source={require('./assets/gatomestre.png')}
            />
        <View style={styles.campo}>
          <ImageBackground
              style={styles.campinho} resizeMode='contain'
              source={require('./assets/campinho.png')}
            >
              <View style={styles.jogadores}>
              <PosicaoCampo/>
              </View>
            <Text style={styles.nomeBanco}> BANCO DE RESERVAS </Text>
          </ImageBackground>
        </View>
      </View>
      <View style={styles.inferior}>
        <View style={styles.res}>
          <BancodeReservas nome="GOL"/>
          <BancodeReservas nome="ZAG"/>
          <BancodeReservas nome="LAT"/>
          <BancodeReservas nome="MEI"/>
          <BancodeReservas nome="ATA"/>
        </View>
        <View style={styles.viewDownBar}>
          <Image
            style={styles.downBar}
            source={require('./assets/downbarcartola.jpeg')}
            />
        </View>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "space-between",
backgroundColor: "#e9e9e9"
},

meioCartola:{
  flex: 1,
  position: "relative",
  justifyContent: "center",
},

campo:{
  alignItems: "center",

},

jogadores:{
  width: "80%",
},

campinho:{
  width: "100%",
  height: "100%",
  justifyContent: "center",
  position: "relative",
  alignItems: "center",
  paddingVertical: 10,
},

gatoMestre:{
  width: "08%",
  height: "40%",
  zIndex: 1,
  position: "absolute",
  right: 0,
  top: 12
},

inferior: {
},

viewDownBar:{
  marginTop: 20
},

downBar: {
  width: "100%",
  height: 55,
  alignItems: "center"
},

res: {
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignContent: "space-around",
},

banco: {
  alignItems: "center"
},

nomeBanco:{
    fontFamily: 'opensans-bold',
    fontWeight: "bold",
    fontSize: 10,
    lineHeight: 10,
    bottom: 20,
    color: "black",
  },

nameRes:{
},

});
