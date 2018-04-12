<template>
	<div id="container">
		<div id="paper" :style="{ height: '100vh', width: '100vw' + 'px' }"></div>
		<button @click="exportGraph">Export</button>
	</div>
</template>

<script>


import _ from 'lodash'
import joint from 'jointjs'
import { getNodeForType } from '../joint/nodes'

let graph = new joint.dia.Graph()


export default {

	props: {
		graph: {
			type: Object
		}
	},

	data() {
		return {
			graphData: '',
		}
	},

	mounted() {
		this.$watch('graph', () => {
			console.log('graph watch')
		})
		this.intialiseGraph(this.graph)
	},

	methods: {
		exportGraph() {
				console.log(this.graphData)
		},
		addPort() {

		},
		intialiseGraph(graph) {
			console.log(window.innerWidth)
			
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
						return sourceMagnet != targetMagnet &&
						sourceMagnet.getAttribute('port-group') !== targetMagnet.getAttribute('port-group');
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

<style>

.cb-text-node .body {
		width: 150px;
		height: 150px;
		fill: #FFF;
		stroke: #8dc4e3;
}

.cb-carousel-node .body {
		width: 150px;
		height: 150px;
		fill: #FFF;
		stroke: #db8338;
}
.port-label {
	font-size: 0.8em;
}

</style>
