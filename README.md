# Counter
Counter for displaying available lodging for special events. 

This app was born for helping a civil organization that helds several events. The events organized offer lodging for the people that goes to these events. The issue solved here is that these events are displayed in four different web pages, so the counter-updater updates the available lodge for each event in each different website from the same place.

The counter-displayer.html and the counterDisplayerCtrl.js are the codes spreaded throughout the other webpages for the counter-updater to be able to be linked with as many pages as necessary.

Feel free to modify it in your own way.

# Pre-requisites!

  - Have node installed
  - Create a DB in firebase using the schema located in /src/js/firebase-db-example.json
  - Add your firebase api key into the file constants.js

### How to run

This applicatio uses npm and gulp to run

```sh
$ npm install
$ npm install -g gulp-cli
$ gulp server
```

gulp server task runs the whole app