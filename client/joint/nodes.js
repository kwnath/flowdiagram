import joint from 'jointjs'

const TextNode = joint.shapes.devs.Model.extend({
  markup: '<g class="cb-text-node">' +
    '<rect class="body" stroke-width="1" rx="5px" ry="5px"></rect>' +
    '<text class="label" y="0.8em" xml:space="preserve" font-size="14" text-anchor="middle" font-family="Arial, helvetica, sans-serif">' +
    '<tspan id="v-18" dy="0em" x="0" class="v-line"></tspan>' + //Where your label goes
    '</text>' +
    '<g class="inPorts"/>' +
    '<g class="outPorts"/>' +
    '</g>'
});

const CarouselNode = joint.shapes.devs.Model.extend({
  markup: '<g class="cb-carousel-node">' +
    '<rect class="body" stroke-width="1" rx="5px" ry="5px"></rect>' +
    '<text class="label" y="0.8em" xml:space="preserve" font-size="14" text-anchor="middle" font-family="Arial, helvetica, sans-serif">' +
    '<tspan id="v-18" dy="0em" x="0" text-anchor="middle" class="v-line"></tspan>' + //Where your label goes
    '</text>' +
    '<g class="inPorts"/>' +
    '<g class="outPorts"/>' +
    '</g>'
});


export function getNodeForType(nodeType) {

  console.log('joint.shapes.devs.Model : ', joint.shapes.devs.Model.prototype.markup) 

  switch (nodeType.type) {
    case "text":
      return new TextNode({
        position: {
          x: 20,
          y: 200
        },
        inPorts: ['in'],
        outPorts: ['out'],
        attrs: {
          '.body': {
            width: '200',
            height: '200'
          },
          '.label': {
            text: nodeType.label,
          },
          '.element-node': {
            'data-color': '#FEFEFF'
          }
        },
        step: {
          next_step: "bot",
          message: "this"
        }
      })
    case "carousel":
      return new CarouselNode({
        position: {
          x: 20,
          y: 200
        },
        inPorts: ['in'],
        outPorts: ['out'],
        attrs: {
          '.body': {
            width: '200',
            height: '200'
          },
          '.label': {
            text: nodeType.label,
          },
          '.element-node': {
            'data-color': '#FEFEFF'
          }
        },
        step: {
          next_step: "bot",
          message: "this"
        }
      })
    default:
      return new joint.shapes.devs.Model({
        position: {
          x: 20,
          y: 200
        },
        inPorts: ['in'],
        outPorts: ['out1', 'out2'],
        attrs: {
          '.body': {
            width: '140',
            height: '60'
          },
          '.label': {
            text: nodeType.label,
          },
          '.element-node': {
            'data-color': '#FEFEFF'
          }
        },
        step: {
          next_step: "bot",
          message: "this"
        }
      })
    }
  }