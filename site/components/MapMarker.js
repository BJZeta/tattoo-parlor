import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const apiKey = process.env.NEXT_PUBLIC_KEY;

function MapMarker({}) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  console.log(`The key is ${apiKey}`);

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 33.836035484716284,
    lng: -117.8446982980625,
  };
  
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapMarker);
