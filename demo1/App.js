
import React from "react";
import { Button, Platform, Text, Vibration, View, SafeAreaView, StyleSheet,StatusBar,Image } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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
  inputText:{
    color:'#969696',
    fontSize:14,
    marginLeft:8,
    fontWeight:'500'
  },
  cartContainer:{
    flexDirection: 'row',
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center'
  },
  bodyContainer:{
    backgroundColor:'#fff'
  },
  sectionContainer:{
    backgroundColor:'#fff'
  },
  sectionTitle:{
    fontWeight:'700',
    fontSize:16,
    color:'#2f2f2f'
  },

  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
const ProducItem=({image,name,price})=>(
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.itemImages}/>

  </View>
)
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
          <View style={styles.bodyContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Điện thoại - Máy tính bảng</Text>
      
            </View>
            <View style={styles.listItemContainer}>
              <View style={styles.itemContainer}>
                <Image source={require('./src/assets/section_banner.png')} />
              </View>
            </View>
          </View>
      </View>

  );
}


export default App;
