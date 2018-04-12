<template>
	<div id="container">
		<div id="paper" :style="{ height: '100vh', width: '100vw' + 'px' }" :nodes="graphNodes"></div>
		<button @click="exportGraph">Export</button>
	</div>
</template>

<script>


import _ from 'lodash'

let graph

export default {

	props: {
		nodes: {
			type: Array,
			default: []
		}
	},

	data() {
		return {
			width: '',
			graphData: '',
		}
	},

	computed: {
		graphNodes() {
			// filter and replace to only create once
			const nodes = this.nodes.map((node, index) => {
				const graphNode = new joint.shapes.devs.Atomic({
					position: {
							x: 20 + ( 200 * index ),
							y: 200
					},
					inPorts: ['in'],
					outPorts: ['out1', 'out2'],
					step: {
						next_step: "bot",
						message: "this"
					}
				})
				return graphNode
			})

			if(graph){
				graph.addCells(nodes);	
			}

			

			/* rounded corners */

			/*_.each(nodes, function(element) {
					element.attr({
							'.body': {
									'rx': 6,
									'ry': 6
							}
					});
			});*/

			return nodes
		}
	},

	mounted() {
			this.intialiseGraph()
	},

	beforeUpdate() {
		console.log('beforeUpdate')
		//this.graphData = graph.toJSON()
  },

	methods: {
		exportGraph() {
				console.log(this.graphData)
		},
		addPort() {

		},
		intialiseGraph() {
			console.log(window.innerWidth)
			graph = new joint.dia.Graph()
			const paper = new joint.dia.Paper({
				
				el: document.getElementById('paper'),
				width: window.innerWidth,
				gridSize: 1,
				model: graph,
				snapLinks: true,
				linkPinning: false,
				embeddingMode: true,
				highlighting: {
						'default': {
								name: 'stroke',
								options: {
										padding: 6
								}
						},
						'embedding': {
								name: 'addClass',
								options: {
										className: 'highlighted-parent'
								}
						}
				},

				validateEmbedding: function(childView, parentView) {

						return parentView.model instanceof joint.shapes.devs.Coupled;
				},

				validateConnection: function(sourceView, sourceMagnet, targetView, targetMagnet) {

						return sourceMagnet != targetMagnet;
				},

				interactive: function(cellView) {
						if (cellView.model instanceof joint.dia.Link) {
								// Disable the default vertex add functionality on pointerdown.
								return { vertexAdd: false };
						}
						return true;
				}
			});
		}
	}
}


</script>
