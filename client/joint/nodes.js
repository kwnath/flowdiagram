import joint from 'jointjs'

function getGenericForType(label, color) {
  return new joint.shapes.devs.Model({
    // The majority of applications does not need elements to be rotatable.
    // Thus no `.rotatable` group is used in this example.
    // e.g. `element.rotate(45)` has no effect.
    // There is also no need for the `.scalable` group. Using special attributes `ref-width`
    // and `ref-height` does the same trick here (it expands the SVG Rectangle based on the
    // current model dimensions).
    markup: '<rect/><text/>',
    size: {
      width: 120,
      height: 120
    },
    inPorts: ['in'],
    outPorts: ['out'],
    attrs: {
      rect: {
        // Using of special 'ref-like` attributes it's not generally the most
        // performer. In this particular case it's different though.
        // If the `ref` attribute is not defined all the metrics (width, height, x, y)
        // are taken from the model. There is no need to ask the browser for
        // an element bounding box.
        // All calculation are done just in Javascript === very fast.
        'ref-width': '100%',
        'ref-height': '100%',
        'stroke': color,
        'stroke-width': 2,
        'fill': '#fff'
      },
      text: {
        'text': label,
        'fill': color,
        // Please see the `ref-width` & `ref-height` comment.
        'ref-x': '50%',
        'ref-y': '50%',
        'font-size': '0.8em',
        // Do not use special attribute `x-alignment` when not necessary.
        // It calls getBBox() on the SVGText element internally. Measuring text
        // in the browser is usually the slowest.
        // `text-anchor` attribute does the same job here (works for the text elements only).
        'text-anchor': 'middle',
        // Do not use special attribute `y-alignment`. See above.
        // `y="0.3em"` gives the best result.
        'y': '.3em'
      },
    },
    z: 2
  });
}


export function getNodeForType(nodeType) {

  console.log('joint.shapes.devs.Model : ', joint.shapes.devs.Model.prototype.markup) 

  switch (nodeType.type) {
    case "text":
      return getGenericForType(nodeType.label, '#8dc4e3')
    case "carousel":
      return getGenericForType(nodeType.label, '#db8338')
    default:
      return getGenericForType(nodeType.label, '#ccc')
    }
  }