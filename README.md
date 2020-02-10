<h1 align="center">
  <img src="https://raw.githubusercontent.com/edindelan/got/master/src/assets/images/houses/house1.png" width="300">
</h1>

<h3 align="center" style="font-size: 1.2rem;">Game of Thrones Houses App</p>

#### About the app
```
Game of Thrones API doesn't provide much rich data/information other than simple 
text (e.g no images for the houses or characters) which would be useful to build nice looking app. 
So in hope to create something more interesting other than text app, 
I used local data with images for "The Great Houses".

# App pages/routes

- homepage ['/']
- homepage ['/slide/:slideId']
   :: page that showcase 8 of The Great Houses from where it's 
   :: possible to learn more about each (local data)
- map of hauses ['/map']
- map of hauses ['/map/:houseId']
   :: map that showcase the locations of The Great Houses, clicking 
   :: on the house will bring more info about the house (local data)
- list hauses ['/list']
- list hauses ['/list/:pageId']   
- list hauses ['/list/:pageId/house/:houseId']     
   :: list of the houses with pagination with possibility to 
   :: get more info for the each house (server data)
   

# App keyboard shortcuts

:: D, Right Arrow - Previous slide
:: A, Left Arrow - Next slide
:: M - Toggle background music 
```

#### App screen shots

<h1 align="center">
  <img src="https://raw.githubusercontent.com/edindelan/got/master/src/misc/screen-1.png" width="auto">
</h1>

<h1 align="center">
  <img src="https://raw.githubusercontent.com/edindelan/got/master/src/misc/screen-2.png" width="auto">
</h1>

<h1 align="center">
  <img src="https://raw.githubusercontent.com/edindelan/got/master/src/misc/screen-3.png" width="auto">
</h1>

#### Instructions
```
# install the app 
yarn or npm install
# run the app 
yarn start or npm run start
```

#### Technical dept

```
Due time constraints and in intention to create an App with multiple screens and detail oriented features, I haven't finished the following: 
- app mobile support
- more test coverage 
- more detailed error handling for better UX 
```

#### Run End 2 End test

```
# install the app 
yarn or npm install
# run the app (app should run localhost on port 3000)
yarn start or npm run start 
#run npm command 
yarn run e2e
```
