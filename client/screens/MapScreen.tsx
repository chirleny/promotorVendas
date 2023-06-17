import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker
} from "@react-google-maps/api";
import "./MapPage.css"
import Local from '@react-native-community/geolocation';

function MapPageProps(){
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDAl-kqKCGsl64oVAy6BelRWBq0CUexXAA"
  });

  useEffect(()=>{    
    obterLocation();
}, [])

  const [latit, setLat] = useState(0);
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
  <div className="map">
    {isLoaded ? (
    <GoogleMap
      mapContainerStyle={{width: '100%', height: '100%'}}
      center={{
        lat: latit,
        lng: long
      }}
      zoom={15}>  
      <Marker position={{
        lat: latit,
        lng: long
      }}/>
    </GoogleMap>
    ) : (
      <></>
    )}
  </div>
);
};

export default MapPageProps;