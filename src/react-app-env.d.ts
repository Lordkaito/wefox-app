/// <reference types="react-scripts" />
/**
 * MapProps is an object that has a name property that is either a string or undefined, a latitude
 * property that is a number, a longitude property that is a number, and a zoom property that is a
 * number.
 * @property {string | undefined} name - The name of the map.
 * @property {number} latitude - The latitude of the center of the map.
 * @property {number} longitude - The longitude of the center of the map.
 * @property {number} zoom - number;
 */
type MapProps = {
  name: string | undefined;
  latitude: number;
  longitude: number;
  zoom: number;
};