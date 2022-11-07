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
      }
      return false;
    };
    if (data.some(isNotValid)) {
      alert("Please fill all the fields");
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
      console.log(response.status, response.statusText);
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
      console.log(response.status, response.statusText);
    };
    sendData();
  }
  return (
    <>
      <Navbar />
      <div>
        <div>
          <div>
            <h1>Create a city</h1>
          </div>
          <div className="form-to-post">
            <form>
              <label htmlFor="title">Title</label>
              <input required
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="content">Content</label>
              <input required
                type="text"
                name="content"
                id="content"
                onChange={(e) => setContent(e.target.value)}
              />
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.value)}
              />
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                onChange={(e) => setLatitude(e.target.valueAsNumber)}
              />
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                onChange={(e) => setLongitude(e.target.valueAsNumber)}
              />
              <button
                type="submit"
                onClick={(e) => validateData(e, postRequest)}
              >
                Post
              </button>
            </form>
          </div>
        </div>
        <div>
          <div>
            <h1>Edit a city</h1>
          </div>
          <div className="form-to-edit">
            <form>
              <label htmlFor="id">City Id</label>
              <input
                type="number"
                name="id"
                id="id"
                onChange={(e) => setId(e.target.valueAsNumber)}
              />
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="content">Content</label>
              <input
                type="text"
                name="content"
                id="content"
                onChange={(e) => setContent(e.target.value)}
              />
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.value)}
              />
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                onChange={(e) => setLatitude(e.target.valueAsNumber)}
              />
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                onChange={(e) => setLongitude(e.target.valueAsNumber)}
              />
              <button
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
