svg-zoom
========

A micro library that lets you zoom in on svg elements

## Installation

```bash
npm install svg-zoom --save
```

## Usage

First add an `<svg>` element to your html.

```html
<html>
  <body>
    <svg id="svg-zoom" width="900" height="500"></svg>
  </body>
</html>
```

Then import the library. `svgZoom` takes two arguments: the path to the svg and the css selector for the element:

```js
import svgZoom from 'svg-zoom';

svgZoom('./path/to/svg.svg', '#svg-zoom');
```

## Local Setup

```bash
# If you don't have yarn, run `npm i -g yarn`
yarn
yarn build
```

## Example

Run the example:

```bash
yarn example
```

## Related

* [**d3-zoom**: Pan and zoom SVG, HTML or Canvas using mouse or touch input](https://github.com/d3/d3-zoom)
* [**svg-pan-zoom**: JavaScript library for panning and zooming an SVG image from the mouse, touches and programmatically](https://github.com/ariutta/svg-pan-zoom)
