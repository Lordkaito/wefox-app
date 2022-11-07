import Map from "./Map";
import "../styles/container.css";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Container = () => {
  const localApiUrl: string = "http://localhost:3000/api/v1/posts";

  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [name, setName] = useState<string>();
  const [cities, setCities] = useState<any[]>([]);
  const [zoom, setZoom] = useState<number>();
  const [image, setImage] = useState<string>();
  /**
   * We're calling the API, waiting for the data to come back, then converting it to JSON, then setting
   * the state of the cities variable to the response
   */
  const callApi = async () => {
    const data = await fetch(localApiUrl);
    const response = await data.json();
    setCities(response);
  };

  const showCityDetails = (city: any) => {
    console.log(city)
    const {
      name = city.title,
      id,
      image = city.image_url,
      latitude = city.lat,
      longitude = city.long,
    } = city;
    setLatitude(latitude);
    setLongitude(longitude);
    setName(name);
    setZoom(12);
    setImage(image)
    console.log(name, id, image, latitude, longitude);
  };

  // This method is built in order to make use of the 'show' endpoint from the API, unless it is not really necessary because of how I built the app
  const showFromApi = (cityId:any) => {
    fetch(`${localApiUrl}/${cityId}`)
    .then(data => data.json())
    .then(response => {
      if(response) {
        showCityDetails(response)
      } else {
        alert("Ups, something happened, please try again")
      }
    })
  }

  const deleteCity = (cityId:number) => {
    fetch(`${localApiUrl}/${cityId}`, {
      method: "DELETE",
    })
    .then(response => {
      if(response.status === 204) {
        alert("Your post has been deleted");
        callApi();
      }
    })
  }

  /* It's calling the API and waiting for the data to come back, then converting it to JSON, then
  setting
  the state of the cities variable to the response. */
  useEffect(() => {
    callApi();
    cities && console.log(cities);
  }, []);
  return (
    /* Rendering the map and the list of cities. */
    <>
      <Navbar />
      <div className="container">
        <Map
          name={name}
          latitude={latitude ? latitude : 0}
          longitude={longitude ? longitude : 0}
          zoom={zoom ? zoom : 0}
        />
        <div className="cities-info">
          <div>
            <ul>
              {cities &&
                cities.map((city) => {
                  return (
                    <li key={city.id}>
                      <p>{city.title}</p>
                      <p>{city.lat}</p>
                      <p>{city.long}</p>
                      <button onClick={(e) => showCityDetails(city)}>
                        Show city
                      </button>
                      <button onClick={(e) => showFromApi(city.id)}>
                        Show city from API
                        </button>
                      <button onClick={(e) => deleteCity(city.id)}>
                        Delete this city
                        </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="pictures">hjkdhfh</div>
        </div>
      </div>
    </>
  );
};

export default Container;

// this is going well. TODO for tomorrow: work on showing the images of the cities just below the list of them among with its description and name
//
