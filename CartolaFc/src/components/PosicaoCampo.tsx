import { StyleSheet, View, Image } from "react-native";
import { BolasCampo } from "../components/BolasCampo";

export function PosicaoCampo() {
  return (

    <View style={styles.posicoes}>
        <View style={styles.atacante}>
          <BolasCampo nomeTitular="ATA"/>
          <BolasCampo nomeTitular="ATA"/>
          <BolasCampo nomeTitular="ATA"/>
        </View>
        <View style={styles.meia}>
          <BolasCampo nomeTitular="MEI"/>
          <BolasCampo nomeTitular="MEI"/>
          <BolasCampo nomeTitular="MEI"/>
        </View>
        <View style={styles.defesa}>
          <BolasCampo nomeTitular="ZAG"/>
          <BolasCampo nomeTitular="ZAG"/>
          <BolasCampo nomeTitular="ZAG"/>
          <BolasCampo nomeTitular="ZAG"/>
        </View>
        <View style={styles.tecgol}>
          <BolasCampo nomeTitular="TEC"/>
          <BolasCampo nomeTitular="GOL"/>
        </View>
        <View style={styles.compartilha}>
        <View style={styles.shareSombra}></View>
          <Image
        style={styles.share} resizeMode='center'
        source={require('../../assets/share.png')}
        />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({


    posicoes: {
        width: "100%",
        height: "100%",
        alignItems: "center",
      },

      atacante:{
        flex: 1,
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        top: "4%"
      },

      meia:{
        flex: 1,
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        bottom: "1%",
      },

      defesa:{
        flex: 1,
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        bottom: "6%",
        gap: 30,
      },

      tecgol:{
        flex: 1,
        width: "100%",
        height: 100,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 83,
        bottom: "3%",
      },

      compartilha:{
        width: "105%",
        height: "84%",
        zIndex: 10,
        position: "absolute",
        flexDirection: 'column-reverse',
        alignItems: "flex-end",
      },

      share:{
        position: "absolute",
        width: "10%",
        height: "10%",
        shadowOpacity: 100,
      },
      shareSombra: {
        height: 30,
        width: 30,
        marginRight: 0.4,
        borderRadius: 50,
        backgroundColor: "rgba(22, 99, 46, 0.8)",
        position: "relative",
    },
    });