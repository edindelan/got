<h1 align="center">
  <img src="https://raw.githubusercontent.com/edindelan/got/master/src/assets/images/houses/house1.png" alt="jest-puppeteer" title="jest-puppeteer" width="300">
</h1>

<p align="center" style="font-size: 1.2rem;">Game of Thrones Houses App</p>

#### About the app
```bash
Game of Thrones API doesn't provide much rich data/information other than simple 
text (e.g no images for the houses or characters) which would be useful to build nice looking app. 
So in hope to create something more interesting other than text app, I used local data with images for "The Great Houses".

#App pages/routes
- homepage ['/'] 
    :: page that showcase 8 of The Great Houses from where it's possible to learn more about each (local data)
- map of hauses ['/map']
    :: map that showcase the locations of The Great Houses, clicking on the house will bring more info about the house (local data)
- list hauses ['/list']    
    :: list of the houses with pagination with possibility to get more info for the each house
```

#### Instructions
```bash
# install the app 
yarn or npm install
# run the app 
yarn start or npm run start
```

#### Technical dept

```bash
Due time constraints and in intention to create an App with multiple screens and detail oriented features, I haven't finished the following: 
- app mobile support
- more test coverage 
- more detailed error handling for better UX 
```

#### Run End 2 End test

```bash
# install the app 
yarn or npm install
# run the app (app should run localhost on port 3000)
yarn start or npm run start 
#run npm command 
yarn run e2e
```
