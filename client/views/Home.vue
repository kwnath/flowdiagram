<template>
  <div>
    <el-row>
      <el-col :span="20" :push="2" >
        <diagram :graph="graph"/>
      </el-col>
       <el-col :span="2" :pull="20">
        <sideMenu @newnode='onNewNode'/>
      </el-col>
    </el-row>
</div>
</template>

<script>

import sideMenu from '../components/sidemenu';
import diagram from '../components/diagram';

import joint from 'jointjs'
import { getNodeForType } from '../joint/nodes'

export default {
  components: {
    sideMenu,
    diagram
  },
  data() {
    return {
      graph: new joint.dia.Graph()
    }
  },
  methods: {
    onElement() {
      console.log("on element")
    },
    onNewNode(nodeType) {
      this.graph.addCell(getNodeForType(nodeType))
      //this.graph.stamp = new Date().getMilliseconds()
      //this.$forceUpdate()
    }
  },
  mounted() {
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
