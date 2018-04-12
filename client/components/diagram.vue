<template>
    <div id="container">
        <div id="paper" :style="{ height: '100vh', width: '100vw' + 'px' }"></div>
        <button @click="exportGraph">Export</button>
    </div>
</template>

<script>
import _ from 'lodash'



export default {
    data() {
        return {
            width: '',
            graphData: ''
        }
    },

    mounted() {
        this.intialiseGraph()
        // console.log(this.width)
    },    
    methods: {
        exportGraph() {
            console.log(this.graphData)
        },
        addPort() {

        },
        intialiseGraph() {
            console.log(window.innerWidth)
            const graph = new joint.dia.Graph;
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

            const a1 = new joint.shapes.devs.Atomic({

                position: {
                    x: 360,
                    y: 260
                },
                inPorts: ['in'],
                outPorts: ['out1', 'out2'],
                step: {
                    next_step: "bot",
                    message: "this"
                }
            });

            const a2 = new joint.shapes.devs.Atomic({

                position: {
                    x: 50,
                    y: 160
                },
                outPorts: ['out'],
                step: {
                    next_step: "bot",
                    message: "this"
                }
            });

            const a3 = new joint.shapes.devs.Atomic({
                position: {
                    x: 650,
                    y: 50
                },
                size: {
                    width: 100,
                    height: 300
                },
                inPorts: ['a', 'b'],
                step: {
                    next_step: "bot",
                    message: "this"
                }
            });

            graph.addCells([a1, a2, a3]);

            /* rounded corners */

            _.each([a1, a2, a3], function(element) {

                element.attr({
                    '.body': {
                        'rx': 6,
                        'ry': 6
                    }
                });
            }); 

            this.graphData = graph.toJSON()
        }
    }
}


</script>
