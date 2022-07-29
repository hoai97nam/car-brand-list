# CarList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9. Used `ng-zorro-antd` as a library for UI design

## Features
 - Show car brands with mock data
 - Sort data as given field
 - Search brand with name
 - Add new car brand with given info
 - Edit car brand
 
 ## Details
 - `Ascending` sort with:
     - `All`: sort as Name
     - `Last Updated`: sort as latest modified time
     - `Brand Name`: sort as Name
     - `Number of Models`: sort as number of models
 - Search - compare if search text includes in Brand Name, trigger every input changes. Data list will be filtered gradually along the times type in. Click clear icon to reclaim full items.
 - View details - navigate to next page to show details
 - Edit infomation - click on existing logo to change random image
 - Add new brand with required info, name and description are mandatory. Image could be uploaded but app will use random image to set logo.
 - Use [Lorem Picsum](https://picsum.photos/) to get random image as logo brand
 
## Improvement
- Delete item
- Lack of model field: default is 0
- API for Sort and Search
- Upload image needs 3rd-party server

## Deployment
- Deployed on Heroku: [https://carbrandlist.herokuapp.com/car-brand-list](https://carbrandlist.herokuapp.com/car-brand-list)

