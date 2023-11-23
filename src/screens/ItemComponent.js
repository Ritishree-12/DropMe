// ItemComponent.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet,Image,View } from 'react-native';

const ItemComponent = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor,borderColor: 'red', borderWidth: 1  },]}>
    {/* Add your image here */}
    <Image source={require('../../assets/Asset2.png')} style={[styles.image,{objectFit:'cover'}]} />
      
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
        {/* Add image details and price */}
        {/* <Text style={[styles.details, { color: textColor }]}>Capacity:900kg</Text> */}
        <Text style={[styles.details, { color: textColor }]}>{item.imgDetails}</Text>
        <Text style={[styles.details, { color: textColor }]}>{item.capacity}</Text>
       
      </View>
      <Text style={[styles.price, { color: textColor }]}>$XX.XX</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
      },
      image: {
        width: 100,
        height: 70,
        // borderRadius: 25,
        marginRight: 16,
        objectFit:'cover'
      },
      textContainer: {
        flex: 1,
      },
      title: {
        fontSize: 20,
        fontWeight: "bold",
      },
      details: {
        fontSize: 14,
      },
      price: {
        fontSize: 14,
        fontWeight: "bold",
      },
});

export default ItemComponent;
