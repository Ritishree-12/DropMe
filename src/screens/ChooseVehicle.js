import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import ItemComponent from "./ItemComponent";

const HomeScreen = () => {
  const snapPoints = useMemo(() => ["50%", "70%", "80%"], []);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Dala Auto",
      imgDetails:'13.2ftx6.9ftx5.9ft',
      capacity:'capacity:900kg'
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Tata Ace",
      imgDetails:'13.2ftx6.9ftx5.9ft',
      capacity:'capacity:900kg'
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Pickup",
      imgDetails:'13.2ftx6.9ftx5.9ft',
      capacity:'capacity:900kg'
    },
  ];
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "red" : "transparent";
    const color = item.id === selectedId ? "white" : "red";

    return (
      <ItemComponent
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <View style={styles.container}>
      <BottomSheet index={1} snapPoints={snapPoints}>
        {/* <ScrollView> */}
          <View>
            <Text style={styles.text1}>Choose Vehicle</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </View>
        {/* </ScrollView> */}
      </BottomSheet>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 24,
    // backgroundColor: "grey",
  },
  text1: {
    color: "red",
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
