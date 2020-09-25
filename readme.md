# What is easypreloader ? :clock1:

You can use easypreloader package to add built in preloader for a web app.

## versions
 * 1.0.0
 * 1.0.1

# installation

1. `npm i easypreloader --save`

After that import the package

2.
```
import {easyloader} from 'easypreloader';

 var loader = new easyloader({
     background:"black",
     path:"your icon path"
 });

 loader.generateLoader();

```
![loader](sd.png)
## OPTIONS

easyloader provides two options and both are optional:

- _background_ //specify the color here ( Default to #00000 )
- _padding_ //specify the path of your loading icon (Default icon)

## In the upcoming version 
- [ ] preloader for specific sections on the page which fetch data from Apis
