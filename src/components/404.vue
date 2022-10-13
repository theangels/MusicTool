<template>
  <el-container>
    <el-main style="height:auto">
      <el-row type="flex" justify="center" align='middle' style="height:500px">
            <el-row style="height:auto;text-align:center">
              <img src="../assets/images/not_found.png" style="margin:24px 0px"/>
              <p>您访问的页面不存在...</p>
              <div style="margin:24px 0px">
                <router-link :to="{path: '/'}">
                  <el-button type="primary" plain>返回首页</el-button>
                </router-link>
              </div>
            </el-row>
      </el-row>
    </el-main>
  </el-container>

</template>
<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  margin-top: 0;
}

.context img {
  max-width: 100%;
  max-height: 100%;
}
.context p {
  margin: 20px;
  font-size: 16px;
  color: #0d3349;
}
</style>
