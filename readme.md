# What is easypreloader ?

You can use easypreloader package to add built in preloader for a web app.

# installation

`npm i easypreloader --save`

After that import the package

```
import {easyloader} from 'easypreloader';

 var loader = new easyloader({
     background:"black",
     path:"your icon path"
 });

 loader.generateLoader();

```

## OPTIONS

easyloader provides two options and both are optional:

- _background_ //specify the color here ( Default to #00000 )
- _padding_ //specify the path of your loading icon (Default icon)
