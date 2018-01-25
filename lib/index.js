(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['d3'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('d3'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.d3);
    global.index = mod.exports;
  }
})(this, function (_d) {
  'use strict';

  var d3 = _interopRequireWildcard(_d);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  document.body.appendChild(document.createElement('svg'));

  const svg = d3.select('svg');
  const width = +svg.attr('width');
  const height = +svg.attr('height');
  const g = svg.append('g');

  function zoom() {
    g.attr('transform', d3.event.transform);
  }

  d3.xml('tiger.svg').mimeType('image/svg+xml').get((error, xml) => {
    if (error) {
      console.log(error);
    } else {
      document.body.appendChild(xml.documentElement);

      g.append(() => document.querySelector('#svg2'));

      svg.append('rect').attr('fill', 'none').attr('pointer-events', 'all').attr('width', width).attr('height', height).call(d3.zoom().scaleExtent([1, 8]).on('zoom', zoom));
    }
  });
});
//# sourceMappingURL=index.js.map