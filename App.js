// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY} from "@env";

// import 'react-native-gesture-handler';
// import 'android.os.Bundle';
import { NavigationContainer } from "@react-navigation/native";
// import { Provider } from 'react-redux';
// import { store } from './store';
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import "android.os.Bundle";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import tw from "tailwind-react-native-classnames";




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen  name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;



  
