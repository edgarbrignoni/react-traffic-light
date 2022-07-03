# React Traffic Light

A simple project to learn more about the basic fundamentals of react

### Brief

-   A click on a color of the traffic light enables the light.
-   A click on the holding pole with disable the light.

### Languages and Technologies

-   HTML
-   SCSS
-   React
-   NPM
-   Webpack
-   Git
-   GitHub

### Requirements

Make sure you have node version 8

```sh
node -v
```

Install the npm package

```sh
npm install
```

###### NOTE: If you ever want to manually install all of this read the [MANUAL.md file.](/MANUAL.md)

### Start coding

The index.js that will start your javascript execution (like the window.onload).

```sh
npm run watch
```

###### NOTE: To stop the watcher on the console press CTRL + C keys simultaneously

### Deploy your code

Webpack will generate your bundle.js inside the docs folder

```sh
npm run build
```

###### NOTE: You have to re-bundle every time yoo update your JS or CSS/SASS files.

You are ready to go! You can commit & push to your new repository whenever you want.

### Remember

The application flow starts at **index.js**, you have to import any other files or assets into index.js in order for webpack to include them in the bundle.

For example, inside index.js you can do:

```js
window.onload = function() {
    console.log('hello world');
};
```

To include images, styles or any other type of file just use the **import** command:

```js
//This will include file.js into your bundle.

import 'js/file2.js';

//This will include the styles at index.scss to your bundle.

import '../styles/index.scss';
```

All your JS and CSS code must go inside the src/ directory, and webpack will automaticly bundle them and export them into the docs folder.

The HTML code must be inside docs/index.html

### MIT Licence

Copyright (c) 2021 Edgar Brignoni

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

\*\*\*Translation: You can use this for your project! Just make sure to say where you got this from :)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
