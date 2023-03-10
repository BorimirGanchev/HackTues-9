import React, { useState } from "react";
import "./App.css";
import { GoogleMap, Polygon, useJsApiLoader, Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 52.52047739093263, lng: 13.36653284549709
};

function Map() {

    const [markerPosition, setMarkerPosition] = useState(null);

    const handleMapClick = (event) => {
      const latLng = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      setMarkerPosition(latLng);
      console.log(event.latLng.lat())
      console.log(event.latLng.lng())
    };

    const [path, setPath] = useState(
      [
    [
      { lat: 52.52549080781086, lng: 13.398118538856465 },
    { lat: 52.48578559055679, lng: 13.36653284549709 },
    { lat: 52.48871246221608, lng: 13.44618372440334 },
    { lat: 52.52549080781086, lng: 13.398118538856465 }
  ],
  [
    { lat: 42.52549080781086, lng: 13.398118538856465 },
  { lat: 42.48578559055679, lng: 13.36653284549709 },
  { lat: 42.48871246221608, lng: 13.44618372440334 },
  { lat: 42.52549080781086, lng: 13.398118538856465 }
],
[
  { lat: 32.52549080781086, lng: 13.398118538856465 },
{ lat: 32.48578559055679, lng: 13.36653284549709 },
{ lat: 32.48871246221608, lng: 13.44618372440334 },
{ lat: 32.52549080781086, lng: 13.398118538856465 }
],
    ]
  );//will be an array passed by database

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCUA92dD6oKA7zAtGPfgYSj6ka9paVhRvg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
          onClick={handleMapClick}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Polygon 
          paths={path}
          options={{
            fillColor: "red",
            fillOpacity: 0.4,
            strokeColor: "#d35400",
            strokeOpacity: 0.8,
            strokeWeight: 3
          }}>

        </Polygon>
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map) 
