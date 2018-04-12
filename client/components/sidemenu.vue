<template>
<div>
<el-menu default-active="" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapsed" :default-openeds="['1', '3']">
  <div class="swiper-btn-next" @click="toggleMenu" v-model="isCollapsed">
    <div class="arrow-container">
      <i :class="isCollapsed ? rightArrow : leftArrow" ></i>
    </div>
  </div>
  <el-submenu index="1" >
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">Components</span>
    </template>
    <el-menu-item-group title="Messaging">
      <el-menu-item v-for="(node, index) in nodesTypes" @click="handleAddNode(node)" :index="String(index+1)" :key="index">
        <i :class="node.icon"></i>
        <span slot="title">{{node.label}}</span>
      </el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Generic Template">
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">Two</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">Custom Component</span>
  </el-menu-item>
</el-menu>
</div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapsed: true,
        active: false,
        rightArrow: 'el-icon-arrow-right',
        leftArrow: 'el-icon-arrow-left',
        nodesTypes: [
          {
            type: 'text',
            label: 'text',
            icon: 'el-icon-tickets'
          },
          {
            type: 'carousel',
            label: 'carousel',
            icon: 'el-icon-picture'
          }
        ]
      }
    },
    methods: {
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed
      },
      onElement() {
        console.log("test")
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleAddNode(node) {
        this.$emit('newnode', {...node})
      }
    }
  }
</script>

<style>
.swiper-btn-next {
  left: auto;
  right: -27px;
  border-radius: 0 3px 3px 0;
  border-left: solid 1px white !important;
}

.swiper-btn-prev {
  right: 0px;
  left: auto;
  border-radius: 3px 0 0 3px;
  border-right: 0px solid white !important;
}

.swiper-btn-next img, .swiper-btn-prev img{
  height: 70%;
  width: 70%;
}

.swiper-btn-next, .swiper-btn-prev {
  opacity: 0.7;
  position: absolute;
  top: 55%;
  width: 25px;
  height: 25px;
  margin-top: -15px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid #e6e6e6;
  background-color: #fff;
}
  .arrow-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    align-content: center;
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100vh;
  }
  .el-menu-vertical {
    min-height: 100vh;
  }
  .el-menu-item-group__title {
    padding: 7px 20px 7px 20px !important;
  }
  .el-icon-arrow-right, .el-icon-arrow-left {
    font-size: 50%;
  }
</style>
