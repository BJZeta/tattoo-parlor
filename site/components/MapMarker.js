import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const apiKey = process.env.NEXT_PUBLIC_KEY;

const containerStyle = {
  width: '70%',
  height: '300px',
  borderRadius: "20px",
  margin: '20px',
  position: 'relative'
};

const center = {
  lat: 33.83,
  lng: -117.84
};

const marker = {
  lat: 33.836,
  lng: -117.8446,
};

function MapMarker() {
  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
       <Marker position={marker}/>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapMarker)