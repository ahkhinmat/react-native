// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React from "react";
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet,StatusBar } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const App = () => {
  return (

      <View>
        <StatusBar barStyle="ligh-content"/>
          <View style={styles.headerContainer}>
              <View style={styles.inputContainer}>
                  <FontAwesome name="search" size={30}/>
                <Text>Bạn tìm gì hôm nay?</Text>
              </View>
              <View style={styles.cartContainer}>
                  <FontAwesome name="shopping-cart" size={24}/>
              </View>

          </View>
      </View>

  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop:60,
    backgroundColor:'aqua'
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor:'#fff',
    marginLeft:10,
    alignItems:'center',
    marginBottom:4,
    flex:1,
    borderRadius:2,
    paddingHorizontal:12,
    paddingVertical:8,
  },
  cartContainer:{
    flexDirection: 'row',
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center'
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  paragraph: {
    margin: 24,
    textAlign: "center"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});

export default App;
