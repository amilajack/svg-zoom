// @flow
import * as d3 from 'd3';

const svg = d3.select('svg');
const width = +svg.attr('width');
const height = +svg.attr('height');
const g = svg.append('g');

export default function SvgZoom(svgPath: string) {
  function zoom() {
    g.attr('transform', d3.event.transform);
  }

  d3.xml(svgPath).mimeType('image/svg+xml').get((error, xml) => {
    if (error) {
      console.log(error);
    } else {
      document.body.appendChild(xml.documentElement);

      g.append(() => document.querySelector('#svg2'));

      svg.append('rect')
        .attr('fill', 'none')
        .attr('pointer-events', 'all')
        .attr('width', width)
        .attr('height', height)
        .call(d3.zoom()
          .scaleExtent([1, 8])
          .on('zoom', zoom));
    }
  });
}
