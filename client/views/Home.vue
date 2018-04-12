<template>
  <div>
    <el-row>
      <!-- <el-col :span="1">
              <sideMenu />
      </el-col> -->

      <el-col :span="24" :offset="0" >
        <diagram />
      </el-col>
    </el-row>
</div>
</template>

<script>

import sideMenu from '../components/sidemenu';
import diagram from '../components/diagram';

export default {
  components: {
    sideMenu,
    diagram
  },
  methods: {
    onElement() {
      console.log("on element")
    }
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
