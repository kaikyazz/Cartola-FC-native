import { StyleSheet, View, Image, Text } from "react-native";

export function InfoMerc() {
  return (
    <View>
      <View style={styles.statusbar}>
      <Image
        style={styles.escalar} resizeMode='center'
        source={require('../../assets/navescalacao.jpeg')}
        />
      </View>
      <View style={styles.retContainer}>
        <View style={styles.ret1}>
            <Text style={styles.info}> PREÇO DO TIME
            </Text>
            <Text style={styles.negrito}> <Text style={styles.info}>C$</Text> 0.00
            </Text>
        </View>
        <View style={styles.retMerc}>
          <Text style={styles.info}> MERCADO FECHA EM
            </Text>
            <Text style={styles.negrito}> 1 DIA</Text>
        </View>
        <View style={styles.ret2}>
            <Text style={styles.info}> VOCÊ AINDA TEM
            </Text>
            <View style={styles.dinheiro}>
              <Text style={styles.negrito}> <Text style={styles.info}> C$</Text>  100.00
              </Text>
              <Image
                style={styles.coracao}
                source={require('../../assets/coracao.png')}
              />
            </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  statusbar: {
    height: 50,
    backgroundColor: "#fc7505",
    alignItems: "center",
    justifyContent: "center"
  },
  retContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  ret1: {
    height: 40,
    width: "30%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  ret2: {
    height: 40,
    width: "30%",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
  },

  dinheiro:{
    flexDirection: "row",
    gap: 3,
    alignSelf: "center"
  },

  coracao:{
    height: 15,
    width: 15,
  },

  info: {
  fontFamily: "robotoslab-bold",
  fontSize: 8,
  lineHeight: 8,
  textAlign: "center",
  color: "#a0a0a0",
  },

  negrito: {
    fontFamily: "robotoslab-bold",
    fontWeight: "bold",
    fontSize: 8,
    lineHeight: 8,
    textAlign: "center",
    paddingTop: 3,
    },

  retMerc: {
    height: 40,
    width: "39%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  escalar: {
    height: "100%",
    width: "110%",
  },
});