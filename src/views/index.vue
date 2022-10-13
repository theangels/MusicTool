<template>
  <el-container>
    <el-header style="background-color: #000000; height: auto; padding: 0px">
      <el-row type="flex" justify="center" align="middle">
        <el-row style="width: 100%">
          <el-container>
            <el-aside width="280px">
              <el-row type="flex" justify="center" align="middle" style="height: 100%">
                <span style="font-size: 24px">
                  <router-link tag="p" to="/"
                    style="text-decoration: none; color: white; cursor: pointer; margin:10px 0 10px 0">
                    <p style="text-decoration: none; color: white">
                      音乐编辑工具
                    </p>
                  </router-link>
                </span>
              </el-row>
            </el-aside>
          </el-container>
        </el-row>
      </el-row>
    </el-header>
    <el-main>
      <el-container class="main" :style="myStyle">
        <el-main>
          <div id="container">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-main>
    <el-footer style="background-color: #212127; height: auto">
      <el-row type="flex" justify="center" style="width: 100%; color: #ffffff; margin: 24px 0px">
        <el-row style="width: 1280px; text-align: center">
          <el-col :span="24" style="font-size: 10px; color: #939393">
            <span>Copyright © 2022 Angel Zheng All Rights Reserved.</span>
          </el-col>
        </el-row>
      </el-row>
    </el-footer>
  </el-container>
</template>
<style scoped>
  .foot-divider>.el-divider__text {
    background-color: #212127;
    color: #ffffff;
  }

  .el-main {
    padding: 0;
  }

  .el-divider {
    background-color: hsla(0, 0%, 100%, 0.07);
  }

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  * {
    font-family: "NotoSansSC-Regular";
  }

</style>

<script>
  export default {
    data() {
      return {
        myStyle: null,
      };
    },
    mounted() {
      var _this = this;

      _this.windowsChange();
      window.onresize = function () {
        _this.windowsChange();
      };
    },
    methods: {
      goto(routerName) {
        this.$router.push({
          path: routerName,
        });
        return;
      },
      windowsChange() {
        var _this = this;
        var minHeight = window.innerHeight - 64 - 60 + "px";
        var minWidth = "auto";
        _this.myStyle =
          "min-width:" +
          minWidth +
          ";" +
          "min-height:" +
          minHeight +
          ";" +
          "background-color:#f1f1f7;";
      },
    },
  };

</script>
