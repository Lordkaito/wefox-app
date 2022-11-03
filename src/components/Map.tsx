import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "../styles/map.css";


const Map = ({name, latitude, longitude, zoom}:MapProps ) => {
  const API_KEY: string = "Dz4QF34eAKhU6mkAKuiN";
  console.log(name, latitude, longitude, zoom)
  const mapContainer: any = useRef();
  const map: any = useRef();
  // this values down here are going to be dinamic
  // const [lng] = useState<number>(longitude);
  // const [lat] = useState<number>(latitude);
  // let [zoom2] = useState(1)
  // const [zoom] = useState(14);
  // const [API_KEY] = useState("Dz4QF34eAKhU6mkAKuiN");

  /* A hook that is called after every render. */
  useEffect(() => {
    // if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [longitude, latitude],
      zoom: zoom,
    });
  //   new maplibregl.Marker({ color: "#FF0000" })
  //     // this values down here are going to be dinamic
  //     .setLngLat([139.7525, 35.6846])
  //     .addTo(map.current);
  // }, [latitude, longitude]);
  })

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
