import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight  } from 'react-native';
import Local from '@react-native-community/geolocation';

function NovoMaps() {

    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);

    const obterLocation=()=>{
        Local.getCurrentPosition(
            (pos)=>{
                setLat(pos.coords.latitude)
                setLong(pos.coords.longitude)
            },
            (erro)=>{
                alert('Erro: ' + erro.message)
            },
            {
                enableHighAccuracy:true, timeout:1200000, maximumAge:1000
            }
        )
    }

    return (
        <View style={styles.container}>Meu mapa
            <TouchableHighlight onPress={obterLocation}>
                <Text>Check-in</Text>
            </TouchableHighlight>
            <Text>Latitude: {lat}</Text>
            <Text>Longitude: {long}</Text>
        
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default NovoMaps;