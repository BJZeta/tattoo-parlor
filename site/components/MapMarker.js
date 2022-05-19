import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function MapMarker() {
  const { isLoaded } = useJsApiLoader({
    id: "google-maps-marker",
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY,
  });

  const containerStyle = {
    position: "relative",    
  };

  const center = {
    lat: 33.83,
    lng: -117.84,
  };

  const marker = {
    id: "main-marker",
    pos: { lat: 33.836, lng: -117.8446 },
  };
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} mapContainerClassName="w-full md:w-[80%] h-48 md:h-[18em] rounded-2xl" center={center} zoom={13}>
      <Marker
        key={marker.id}
        position={marker.pos}
        clickable
      >
        <InfoWindow          
          position={marker.pos}
          options={{ pixelOffset: new google.maps.Size(0, -30) }}
          className="text-white"
        >
          <div className="text-black">
            <h1>{`Tim's Tattoos`}</h1>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapMarker);
