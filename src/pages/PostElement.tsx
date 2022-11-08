import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/postelement.css";
const PostElement = () => {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [image, setImage] = useState<string>();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [cityId, setId] = useState<number>();
  const localApiUrl: string = "http://localhost:3000/api/v1/posts";

  const validateData = (e: any, callbackFunction: Function) => {
    e.preventDefault();
    const notValidInputs: any = [0, false, undefined, "", null, NaN];
    const data: any = [title, content, image, latitude, longitude];
    const isNotValid = (element: any) => {
      if (notValidInputs.includes(element)) {
        return true;
      } else if (latitude && longitude) {
        if (
          latitude < -90 ||
          latitude > 90 ||
          longitude < -180 ||
          longitude > 180
        ) {
          return true;
        }
      }
      return false;
    };
    if (data.some(isNotValid)) {
      alert("Please fill all the fields with valid values");
    } else {
      callbackFunction();
      alert("Your post has been created");
    }
  };

  const postRequest = () => {
    const sendData = async () => {
      const response = await fetch(localApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          image_url: image,
          lat: latitude,
          long: longitude,
        }),
      });
    };
    sendData();
  };

  const putRequest = () => {
    const sendData = async () => {
      const response = await fetch(`${localApiUrl}/${cityId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          image_url: image,
          lat: latitude,
          long: longitude,
        }),
      });
    };
    sendData();
  };
  return (
    <>
      <Navbar />
      <div className="main-form">
        <div className="form-container">
          <div className="form-title">
            <h1>Create a city</h1>
          </div>
          <div className="form-to-post">
            <form>
              <input
                required
                type="text"
                name="title"
                id="title"
                maxLength={20}
                placeholder="City name"
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                required
                name="content"
                id="content"
                maxLength={200}
                placeholder="Description"
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image URL"
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type="number"
                name="latitude"
                id="latitude"
                max={90}
                min={-90}
                placeholder="Latitude"
                onChange={(e) => setLatitude(e.target.valueAsNumber)}
              />
              <input
                type="number"
                name="longitude"
                id="longitude"
                max={180}
                min={-180}
                placeholder="Longitude"
                onChange={(e) => setLongitude(e.target.valueAsNumber)}
              />
              <button className="post-button"
                type="submit"
                onClick={(e) => validateData(e, postRequest)}
              >
                Post
              </button>
            </form>
          </div>
        </div>
        <div className="form-container">
          <div className="form-title">
            <h1>Edit a city</h1>
          </div>
          <div className="form-to-edit">
            <form>
              <input
                type="number"
                name="id"
                id="id"
                placeholder="City ID"
                onChange={(e) => setId(e.target.valueAsNumber)}
              />
              <input
                type="text"
                name="title"
                id="title"
                placeholder="City name"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                name="content"
                id="content"
                placeholder="Description"
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Image URL"
                onChange={(e) => setImage(e.target.value)}
              />
              <input
                type="number"
                name="latitude"
                id="latitude"
                placeholder="Latitude"
                onChange={(e) => setLatitude(e.target.valueAsNumber)}
              />
              <input
                type="number"
                name="longitude"
                id="longitude"
                placeholder="Longitude"
                onChange={(e) => setLongitude(e.target.valueAsNumber)}
              />
              <button className="put-button"
                type="submit"
                onClick={(e) => validateData(e, putRequest)}
              >
                Put
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostElement;
