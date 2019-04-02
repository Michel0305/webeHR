<template>
  <div>
    <el-col :span="22" :offset="1">
      <el-col :xs="22" :sm="6" class="leftplatform"><user/> </el-col>
      <el-col :xs="22" :sm="12" class="midplatform">bbbb</el-col>
      <el-col :xs="22" :sm="6" class="rightplatform">ccccc</el-col>
    </el-col>
  </div>
</template>
<script>
import user from './component/user'
export default {
  components: { user },
  data() {
    return {

    }
  }

}
</script>
<style>
.leftplatform {
  height: 100%;
  background-color: aquamarine;
}
.midplatform {
  height: 100%;
  background-color: beige;
}
.rightplatform {
  height: 100%;
  background-color: blueviolet;
}
</style>
