import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_3_4}>
        <View style={styles.View_1_3}>
          <Text style={styles.Text_1_3}>LunaPlaces</Text>
        </View>
        <View style={styles.View_1_4}>
          <Text style={styles.Text_1_4}>Prenota la tua postazione</Text>
        </View>
      </View>
      <View style={styles.View_3_83} />
      <View style={styles.View_6_29} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9407/1743/b0717e46f66498a6a28d5f4d1ef206b2"
        }}
        style={styles.ImageBackground_6_44}
      />
      <View style={styles.View_6_24}>
        <View style={styles.View_6_21}>
          <Text style={styles.Text_6_21}>Postazione 5</Text>
        </View>
        <View style={styles.View_6_22}>
          <Text style={styles.Text_6_22}>25/05/2021 - Tutto il giorno</Text>
        </View>
      </View>
      <View style={styles.View_6_30}>
        <View style={styles.View_6_31}>
          <Text style={styles.Text_6_31}>Ufficio di Enea</Text>
        </View>
        <View style={styles.View_6_32}>
          <Text style={styles.Text_6_32}>25/05/2021 - 11:30 / 12:30</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbda/cf5c/81f015b9bfd41da12e7611849b886f9e"
        }}
        style={styles.ImageBackground_3_85}
      />
      <View style={styles.View_6_6}>
        <Text style={styles.Text_6_6}>Le tue ultime prenotazioni</Text>
      </View>
      <View style={styles.View_6_25}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6612/973f/6ed6d1a4782d81ad8822ac34fe465716"
          }}
          style={styles.ImageBackground_6_26}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b61/78a6/43dbe71cc2763d463fa7f407e11374ca"
        }}
        style={styles.ImageBackground_6_37}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9407/1743/b0717e46f66498a6a28d5f4d1ef206b2"
        }}
        style={styles.ImageBackground_6_42}
      />
      <View style={styles.View_3_82} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc1b/0000/9f95eefcd6a94ec3ed61200f1327f1ee"
        }}
        style={styles.ImageBackground_3_5}
      />
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("6_429"))
        }
      >
        <View style={styles.View_3_7}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ed5/835c/83a47a57d27344c9c00c5cd3cd889011"
            }}
            style={styles.ImageBackground_3_8}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("6_143"))
        }
      >
        <View style={styles.View_6_2}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e53/3940/66b268dd06df086ca2b66c4b7f110c79"
            }}
            style={styles.ImageBackground_6_3}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("11_84"))
        }
      >
        <View style={styles.View_3_18}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e39a/3cb7/cadff2e5c11f95849bb55b415223eaa8"
            }}
            style={styles.ImageBackground_3_19}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("6_46"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa6e/52aa/91e1b0b3b1e03965b3443e7b5b90513b"
          }}
          style={styles.ImageBackground_6_0}
        />
      </TouchableOpacity>
      <View style={styles.View_3_60}>
        <View style={styles.View_I3_60_2419_29805}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/051e/c975/1346880372140925aff0833da6d69565"
            }}
            style={styles.ImageBackground_I3_60_2419_29804}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5c6/4378/a27e30cf99b42bbffa5536f5100e5343"
            }}
            style={styles.ImageBackground_I3_60_2419_29806}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0784/85ad/b2fca17c06053c6f67800c8980c73bac"
            }}
            style={styles.ImageBackground_I3_60_2419_29810}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e746/c83f/5e10c656985606eb04c9682cbd10804d"
            }}
            style={styles.ImageBackground_I3_60_2419_29814}
          />
        </View>
        <View style={styles.View_I3_60_2419_29821}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1490/2143/45d3baf791104d4bb3c58a581665c5ea"
            }}
            style={styles.ImageBackground_I3_60_2419_29822}
          />
        </View>
      </View>
      <View style={styles.View_3_61}>
        <View style={styles.View_I3_61_2419_29797}>
          <View style={styles.View_I3_61_2419_29798} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("41_0"))
        }
      >
        <View style={styles.View_6_505}>
          <View style={styles.View_6_506} />
          <View style={styles.View_6_507}>
            <Text style={styles.Text_6_507}>PRENOTA</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_3_4: {
    width: wp("43.7158447265625%"),
    minWidth: wp("43.7158447265625%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("8.743169398907105%")
  },
  View_1_3: {
    width: wp("43.7158447265625%"),
    minWidth: wp("43.7158447265625%"),
    minHeight: hp("4.479082555718761%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28.24590301513672,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.9385246658325195,
    textTransform: "none"
  },
  View_1_4: {
    width: wp("43.278690592447916%"),
    minWidth: wp("43.278690592447916%"),
    minHeight: hp("1.903610021038785%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.926992114124401%")
  },
  Text_1_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.475409507751465,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.11475409507751465,
    textTransform: "uppercase"
  },
  View_3_83: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_6_29: {
    width: wp("88.53333333333333%"),
    minWidth: wp("88.53333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("39.61748633879781%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_6_44: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("42.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%")
  },
  View_6_24: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("28.688524590163933%")
  },
  View_6_21: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_6_22: {
    width: wp("52.800000000000004%"),
    minWidth: wp("52.800000000000004%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("3.9617486338797825%")
  },
  Text_6_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  View_6_30: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("41.80327868852459%")
  },
  View_6_31: {
    width: wp("60.53333333333333%"),
    minWidth: wp("60.53333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_6_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2,
    textTransform: "none"
  },
  View_6_32: {
    width: wp("49.6%"),
    minWidth: wp("49.6%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("3.961748633879779%")
  },
  Text_6_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16,
    textTransform: "none"
  },
  ImageBackground_3_85: {
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    top: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%")
  },
  View_6_6: {
    width: wp("56.53333333333334%"),
    minWidth: wp("56.53333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("20.21857923497268%")
  },
  Text_6_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.18,
    textTransform: "uppercase"
  },
  View_6_25: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%"),
    top: hp("30.46448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_26: {
    width: wp("6.418994140625001%"),
    height: hp("1.777663908369554%"),
    top: hp("0.7530733535849983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.008996582031251421%")
  },
  ImageBackground_6_37: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("43.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666668%")
  },
  ImageBackground_6_42: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("29.78142076502732%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666666%")
  },
  View_3_82: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.08743169398907%"),
    backgroundColor: "rgba(41, 41, 41, 1)"
  },
  ImageBackground_3_5: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  View_3_7: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("101.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3_8: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_6_2: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.800000000000004%"),
    top: hp("101.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_6_3: {
    width: wp("6.418995157877603%"),
    height: hp("1.7776636478028012%"),
    top: hp("0.7530712690509773%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.008994038899743373%")
  },
  View_3_18: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.2%"),
    top: hp("101.36612021857923%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_3_19: {
    width: wp("6.40174814860026%"),
    height: hp("2.1823771012936786%"),
    top: hp("0.5481532362640849%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.002500406901049246%")
  },
  ImageBackground_6_0: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("101.36612021857923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%")
  },
  View_3_60: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I3_60_2419_29805: {
    flexGrow: 1,
    width: wp("74.62080891927083%"),
    height: hp("4.257746732951513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.46666666666667%"),
    top: hp("-0.34153005464480873%")
  },
  ImageBackground_I3_60_2419_29804: {
    width: wp("57.333333333333336%"),
    height: hp("4.166666666666666%"),
    minHeight: hp("4.166666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I3_60_2419_29806: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.13333333333334%"),
    top: hp("2.709477325606216%")
  },
  ImageBackground_I3_60_2419_29810: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.4980287499766531%"),
    minHeight: hp("1.4980287499766531%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.718326822916666%"),
    top: hp("2.709110447617828%")
  },
  ImageBackground_I3_60_2419_29814: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.84444173177083%"),
    top: hp("2.755003548710724%")
  },
  View_I3_60_2419_29821: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600008138020833%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_I3_60_2419_29822: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_3_61: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I3_61_2419_29797: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("0.8196721311475557%")
  },
  View_I3_61_2419_29798: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(31, 41, 51, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_6_505: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("86.74863387978142%")
  },
  View_6_506: {
    width: wp("87.2%"),
    minWidth: wp("87.2%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 177, 48, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_6_507: {
    width: wp("46.400000000000006%"),
    minWidth: wp("46.400000000000006%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("2.185792349726782%")
  },
  Text_6_507: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.71,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
