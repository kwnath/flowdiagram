<template>
  <div id="app">
<!--       <el-col :span="24">
        <div class="grid-content bg-purple-dark"> -->
<!--         <el-container>
          <el-header>Header</el-header>
        </el-container> -->
        <!-- </div> -->
      <!-- </el-col> -->
    <router-view></router-view>
  </div>
</template>

<style>
@import '../styles/layout.css';
@import '../styles/themes/default.css';
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
  /* nesting for the need to test postcss */
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
</style>
