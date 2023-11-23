import React, { useMemo, } from 'react';
import { View, Text, StyleSheet,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

const HomeScreen = ({navigation}) => {
   
    const snapPoints = useMemo(() => ['50%','70%','80%'], []);
    // const handleChooseVehicle = () => {
    //   // Add your logic for choosing a vehicle here
    //   console.log('Vehicle chosen!');
    // };
    
  return (
    <View style={styles.container}>
    <BottomSheet 
    index={1} 
    snapPoints={snapPoints}>
      <ScrollView>
        <View>
          <Text style={styles.text1}>Where are you going Today ?</Text>
          <TextInput
            style={styles.input}
            placeholder="From"
            // Add any necessary props or event handlers here
          />
          <TextInput
            style={styles.input}
            placeholder="To"
            // Add any necessary props or event handlers here
          />
        </View>
        <Text style={styles.recentPlacesText}>Recent Places</Text>
        {/* Display your recent places here */}
      </ScrollView>

      {/* Choose a Vehicle Button */}
      <TouchableOpacity style={[styles.chooseVehicleButton, { zIndex: 1 }]}
      //  onPress={handleChooseVehicle}
       onPress={() => navigation.navigate('ChooseVehicle')}>
        <Text style={styles.chooseVehicleButtonText}>Choose a Vehicle</Text>
      </TouchableOpacity>
    </BottomSheet>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  text1: {
    color: "red",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 60,
    margin: 8,
    borderWidth: 1,
    padding: 12,
    borderRadius: 40,
    borderColor: "grey",
    color: "grey",
    fontSize:20,
    fontWeight:"400"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chooseVehicleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chooseVehicleButton: {
    backgroundColor: 'red',
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
    margin:8
    
  },
  recentPlacesText: {
    fontSize: 18,
    fontWeight: '400',
    marginVertical: 10,
    margin:12,
  },
});