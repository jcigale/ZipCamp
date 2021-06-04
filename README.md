# README

## Overview

This project is a clone of the site [Hipcamp](https://www.hipcamp.com/en-US), a popular vacation and campsite rental service. Users are able to view, book, and review different spots as well as find spots in a particular location. 

### Live Site - [Zipcamp](http://zipcamp.herokuapp.com/)

## Technologies & APIs

* This project utilizes Ruby on Rails with Postgresql for the backend and Javascript with React and Redux in the frontend.
* Google Maps API and Google Place Autocomplete API were utilized to display spot locations and to filter spots by location search.
* AWS was used to store and render Images for rental spots.
* The site is hosted on Heroku

## Features

* Spot Search by Location
  * Users can search for spots near a certain location using Google Place Autocomplete API and Google Maps API
  * The latitude and longitude are then queried from the params and the spots withing that range are filtered and displayed
  
    <img width="1219" alt="Screen Shot 2021-06-04 at 9 55 13 AM" src="https://user-images.githubusercontent.com/75696079/120813854-4f973d80-c51c-11eb-8946-69f0e217bd71.png">
    <img width="1439" alt="Screen Shot 2021-06-04 at 9 55 31 AM" src="https://user-images.githubusercontent.com/75696079/120813904-5920a580-c51c-11eb-82e4-1f47ee7a2ef8.png">

    <img width="418" alt="Screen Shot 2021-06-04 at 9 58 19 AM" src="https://user-images.githubusercontent.com/75696079/120814036-7786a100-c51c-11eb-8947-0d9850e72f85.png">
    <img width="443" alt="Screen Shot 2021-06-04 at 10 00 04 AM" src="https://user-images.githubusercontent.com/75696079/120814066-7e151880-c51c-11eb-820c-4a7aad932675.png">


* Spot Booking
  * Once logged in users can book a spot for certain dates and then view and delete their bookings on their profile page
    
    <img width="919" alt="Screen Shot 2021-06-04 at 10 11 40 AM" src="https://user-images.githubusercontent.com/75696079/120814897-53778f80-c51d-11eb-88a7-cf2ba68b7b97.png">
    <img width="1188" alt="Screen Shot 2021-06-04 at 10 11 22 AM" src="https://user-images.githubusercontent.com/75696079/120814910-570b1680-c51d-11eb-8129-6b190ae65405.png">
    
    <img width="572" alt="Screen Shot 2021-06-04 at 10 12 57 AM" src="https://user-images.githubusercontent.com/75696079/120815103-891c7880-c51d-11eb-974c-e113ab4383d7.png">
    <img width="325" alt="Screen Shot 2021-06-04 at 10 13 33 AM" src="https://user-images.githubusercontent.com/75696079/120815140-9174b380-c51d-11eb-9a44-31665a56859e.png">
    
    
### Created by [John Cigale](https://jcigale.github.io/JohnCigale/)


  


    



