<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="24">
        <el-col :xs="{span: 22, offset: 1}" :lg="6" class="leftplatform">
          <user />
        </el-col>
        <el-col :xs="{span: 22, offset: 1}" :lg="14" class="midplatform">
          <userapply/>
        </el-col>
        <el-col :xs="{span: 22, offset: 1}" :lg="4" class="rightplatform">
          <el-row>
            <usercompoent/>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import user from './component/user'
import userapply from './component/usrapply'
import usercompoent from './component/weather'
export default {
  components: {
    user,
    userapply,
    usercompoent
  },
  data() {
    return {}
  }
}
</script>

<style>
.leftplatform {
    height: 100%;
    /* background-color: aquamarine; */
}

.midplatform {
    height: 100%;
    border: 1px rgb(239, 234, 243) solid;
    /* background-color: beige; */
}

.rightplatform {
    height: 100%;
    /* background-color: blueviolet; */
}
</style>
