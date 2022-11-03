import Map from "./Map";
import "../styles/container.css";
import { useState, useEffect } from "react";

const Container = () => {
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [name, setName] = useState<string>();
  const [cities, setCities] = useState<any[]>([]);
  const [zoom, setZoom] = useState<number>();

  const localApiUrl: string = "http://localhost:3000/api/v1/posts";

  /**
   * We're calling the API, waiting for the data to come back, then converting it to JSON, then setting
   * the state of the cities variable to the response
   */
  const callApi = async () => {
    const data = await fetch(localApiUrl);
    const response = await data.json();
    setCities(response);
    console.log(cities);
  };

/**
 * DoSomething() is a function that sets the latitude, longitude, name, and zoom of the map to the
 * latitude, longitude, title, and zoom of the third city in the cities array
 */
  const doSomething = () => {
    setLatitude(cities[2].lat);
    setLongitude(cities[2].long);
    setName(cities[2].title);
    setZoom(10);
    console.log(cities[2].lat, cities[2].long, cities[2].title);
  };
/**
 * DoSomethingElse() is a function that sets the latitude, longitude, name, and zoom of the map to the
 * latitude, longitude, title, and zoom of the first city in the cities array
 */
  const doSomethingElse = () => {
    setLatitude(cities[0].lat);
    setLongitude(cities[0].long);
    setName(cities[0].title);
    setZoom(10);
    console.log(cities[0].lat, cities[0].long, cities[0].title);
  };

  /* It's calling the API and waiting for the data to come back, then converting it to JSON, then
  setting
  the state of the cities variable to the response. */
  useEffect(() => {
    callApi();
  }, []);
  return (
    /* Rendering the map and the list of cities. */
    <div className="container">
      <Map
        name={name}
        latitude={latitude ? latitude : 0}
        longitude={longitude ? longitude : 0}
        zoom={zoom ? zoom : 0}
      />
      <div className="cities-info">
        <ul>
          {cities &&
            cities.map((city) => {
              return (
                <li key={city.id}>
                  <p>{city.title}</p>
                  <p>{city.lat}</p>
                  <p>{city.long}</p>
                </li>
              );
            })}
        </ul>
        <button onClick={doSomething}>Click me to do something</button>
        <button onClick={doSomethingElse}>Click me to do something else</button>
      </div>
    </div>
  );
};

export default Container;

// this is going well. TODO for tomorrow: work on showing the images of the cities just below the list of them among with its description and name
//
