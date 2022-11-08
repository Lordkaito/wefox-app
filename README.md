## Wordwide Map
This is an interactive map of the world, where you can add your own cities, with the information required, and be able to find it in the globe, or use one of the default cities instead.
You can also navigate freely over the world draggig the map, zooming in and out and see all the streets of your own city!

## Requirements
1. Docker
2. The ruby on rails api provided by Wefox

For this project, you will need to have your api with the data running in port 3000 in order to work properly.
## How to use it
1. Download the project
2. Run npm install in your console in order to install all the dependencies
3. Run npm start in order to start the project
4. Your browser should automatically open, but if not, just copy and paste this direction "localhost:8000" in your browser

## Exploring created cities
You can explore the cities you have created by clicking on the "Show city" button just below the city name. This will automatically zoom you in to the city (there may be little variations depending on the acuracy of the latitude and longitude).
If you notice, you have 2 buttons to show a city:
The first one called "Show city" takes the information from the already fetched api, as this is being stored in the state of the app.
The second one, makes a new call to the api using the ID of the city that you want to see. This second button is not mandatory for the app to work itself, but I wanted to implement it in order to make use of the "show" action of the api.
Once you click, either the "Show city" or the "Show city from API" button, you will be able to see, right below the city list, an image and a description of that city (you can always edit this, steps on how to do this are mentioned below).

## Adding a new city
In order to add a new city, you will need to navigate to the form, using the "Post a city" link that you will find in the top right corner of your screen, right in the navbar.
Once you are there, you will need to fill the form with the information required, and click on the "Post" button if you want to create a city.

## Editing a city
If you introduced some wrong information, you can always edit it using the form that you will find right below the "Create a city" form. Here, you will need the ID of the city in order to edit it, and enter the information again in order to edit it, then just click the "Put" button to save your changes.

## Deleting a city
To delete a city, it's simple, you just need to go back to the homepage, find the city that you want to delete and click the "Delete this city button" and that's it, you just deleted that city!

## Data of interest
The initial point of the map is set to Latitude 0 and Longitude 0, which is where the marker starts when you run the app. If, after browsing some cities you want to go back to this point, just reload your page!


Hope you liked the project!