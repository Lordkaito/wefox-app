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
  const [content, setContent] = useState<string>();
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
    const {
      name = city.title,
      id,
      image = city.image_url,
      latitude = city.lat,
      longitude = city.long,
      description = city.content,
    } = city;
    setLatitude(latitude);
    setLongitude(longitude);
    setName(name);
    setZoom(12);
    setImage(image);
    setContent(description);
  };

  // This method is built in order to make use of the 'show' endpoint from the API, unless it is not really necessary because of how I built the app
  const showFromApi = (cityId: any) => {
    fetch(`${localApiUrl}/${cityId}`)
      .then((data) => data.json())
      .then((response) => {
        if (response) {
          showCityDetails(response);
        } else {
          alert("Ups, something happened, please try again");
        }
      });
  };

  const deleteCity = (cityId: number) => {
    fetch(`${localApiUrl}/${cityId}`, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 204) {
        alert("Your post has been deleted");
        callApi();
      }
    });
  };

  /* It's calling the API and waiting for the data to come back, then converting it to JSON, then
  setting
  the state of the cities variable to the response. */
  useEffect(() => {
    callApi();
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
          <div className="info-container">
            <ul className="cities-ul">
              {cities &&
                cities.map((city) => {
                  return (
                    <li key={city.id} className="city-li">
                      <div className="city-props">
                        <h1 className="city-title">{city.title}</h1>
                        <span className="city-lat">Latitude: {city.lat}</span>
                        <span className="city-long">Longitude: {city.long}</span>
                      </div>
                      <div className="city-buttons">
                        <button
                          className="show-button"
                          onClick={(e) => showCityDetails(city)}
                        >
                          Show city
                        </button>
                        <button
                          className="api-show-button"
                          onClick={(e) => showFromApi(city.id)}
                        >
                          Show city from API
                        </button>
                        <button
                          className="delete-button"
                          onClick={(e) => deleteCity(city.id)}
                        >
                          Delete this city
                        </button>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="pictures">
            <div>{image ? <img src={image} alt="city" /> : null}</div>
            <div>
              {content ? (
                <p>{content}</p>
              ) : (
                <p className="please-text">
                  Please choose a city to see it here!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;

// this is going well. TODO for tomorrow: work on showing the images of the cities just below the list of them among with its description and name
//
