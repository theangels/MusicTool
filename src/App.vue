<template>
  <el-container style="padding: 0px; margin: 0px; height: auto; width: auto">
    <MainView></MainView>
  </el-container>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  .el-divider>div {
    background-color: #3b3b3f;
    color: #ffffff;
  }

  .el-divider {
    margin: 0px 0px;
  }

  .noActive>.el-submenu,
  .noActive>.el-submenu__title,
  .noActive>.el-menu-item,
  .noActive:not(.is-disabled),
  .noActive>.el-menu-item.is-active {
    border-bottom: 0px;
  }

  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title,
  .el-menu--horizontal>.el-submenu:not(.is-disabled) .el-submenu__title,
  .el-submenu.is-active .el-submenu__title {
    border-bottom: 0px;
  }

</style>

<script>
  import "element-ui/lib/theme-chalk/display.css";
  import MainView from "./views/index";

  export default {
    components: {
      MainView,
    },
    data() {
      return {};
    },
    update() {},
    mounted() {},
    methods: {},
    watch: {},
  };

</script>
