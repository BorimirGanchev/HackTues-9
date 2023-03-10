import React, { useState } from "react";
import "./App.css";
import { GoogleMap, Polygon, useJsApiLoader, Marker } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 42.70882769510333,
  lng: 23.233365050798994
};

function Map() {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [canClick, setCanClick] = useState(false);
  const [mapClicks, setMapClicks] = useState(0);
  const [path, setPath] = useState([]);//will be an array passed by database
  const [map, setMap] = React.useState(null)
  const [coordinates, setCoordinates]=useState([]);

  const getPolies = async () => {
     try
     {
      const POLLIES = await axios.get('http://localhost:3000/users/polies',{ crossDomain: true })
      const arr = POLLIES.data.all_pollies.map(arr => {
        var temp_arr = [];
        for(let i = 0;i < arr.coordinates.length - 1;i++){
          temp_arr.push(arr.coordinates[i])
        }
        return temp_arr
      })
      setPath(arr);
      console.log(arr)
      }catch(err) {
        console.log(err);
      }
      
    }

  const handleClick = () => {
      setCanClick((prevState) => {
        return !prevState;
      })
  }

  const canBeClicked = (mapClick) => {
    if(mapClick > 2) {
      setCanClick((prevState) => {
        return !prevState;
      })
      // coordinates.push(coordinates[0]);
      // setCoordinates((prev) => ([...prev, coordinates[0]]));
      setCoordinates((prev) => {
        var arr = prev;
        console.log("----------------------------")
        console.log(arr);
        return arr;
      })
      console.dir(coordinates)
      const data = {coordinates}
      try{
        const send_coordinates = axios.post('http://localhost:3000/users/poly',data, { headers: { 'Content-Type': 'application/json'}})
      }catch(err) {
        console.log(err);
      }
      setMapClicks(0)
      setCoordinates([]);
    }
  }

  const handleMapClick = (event) => {
    const latLng = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    setMarkerPosition(latLng);

    if(canClick) {
      // coordinates.push(latLng);
      setCoordinates((prev) => ([...prev, latLng]));
      setMapClicks(mapClicks + 1)
      console.log(coordinates)
      console.log(mapClicks)
      canBeClicked(mapClicks);
    }
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCUA92dD6oKA7zAtGPfgYSj6ka9paVhRvg"
  })

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, []);

  React.useEffect(function(){
    getPolies().then((res) => {
      console.log(res)
    })
  },[])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
    <div>
      <button type = "button" onClick={handleClick}>Add</button>
    </div>
    {/* <AddMenu onClick={() => handleCLick()}/> */}
    <GoogleMap
  
      onClick={handleMapClick}
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* <AddMenu /> */}
      { /* Child components, such as markers, info windows, etc. */}
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
      {canClick && <Marker position={markerPosition} />}
    </GoogleMap>
    </>
  ) : <></>
}

export default React.memo(Map) 
