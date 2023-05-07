/*import { View, StyleSheet } from 'react-native' ; 
import { 
requestForegroundPermissionsAsync , 
getCurrentPositionAsync, 
LocationObject 
} from 'expo-location' ; 
import { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import {
    GoogleMap,
    Marker,
    LoadScript,
    StandaloneSearchBox,
    DirectionsService,
    DirectionsRenderer,
  } from "@react-google-maps/api";

export default function App() { 

const [location, setLocation] = useState<LocationObject | null>(null);

async function requestLocationPermissions() { 
const { granted } = await requestForegroundPermissionsAsync(); 
if (granted) {
const currentPosition = await getCurrentPositionAsync(); 
setLocation(currentPosition);

console.log('LOC >> ' + JSON.stringify(currentPosition));
}
}

useEffect(() => {
    requestLocationPermissions();
}, []);

return ( 
<View style={styles.container}>
<MapView style={styles.map} />

</View>
    );
}

const styles = StyleSheet.create({
    map:{
        flex:1, width:'100%'
    },
    container:{
        flex:1,
        backgroundColor: '#fff'
    }
}) */