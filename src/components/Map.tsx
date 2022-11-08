import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "../styles/map.css";


const Map = ({name, latitude, longitude, zoom}:MapProps ) => {
  const API_KEY: string = "Dz4QF34eAKhU6mkAKuiN";
  const mapContainer: any = useRef();
  const map: any = useRef();

  useEffect(() => {
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [longitude, latitude],
      zoom: zoom,
    });
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([longitude, latitude])
      .addTo(map.current);
  }, [latitude, longitude]);


  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};


export default Map;
