<template>
  <div>
    <el-row :gutter="0">
      <toolsbar/>
    </el-row>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 15, offset: 1}" class="signbox">
        <userapply/>
        <!-- <history/> -->
        <!-- <el-col :xs="{span: 22, offset: 1}" :lg="5" class="leftplatform">
          <el-row>
            <user />
          </el-row>
          <el-row>
            <history/>
          </el-row>
        </el-col>
        <el-col :xs="{span: 22, offset: 1}" :lg="14" class="midplatform">
          <userapply/>
          <announcement/>
        </el-col>
        <el-col :xs="{span: 22, offset: 1}" :lg="5" class="rightplatform">
          <el-row>
            <usercompoent/>
          </el-row>
          <el-row>
            <todo/>
          </el-row>
        </el-col> -->
      </el-col>
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 7}" class="usrbox">
        <user />
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 11}" class="cnmentbox">
        <announcement/>
      </el-col>
      <el-col :xs="{span: 22, offset: 1}" :sm="{span: 11}" class="todobox">
        <todo/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import user from './component/user'
import userapply from './component/usrapply'
import usercompoent from './component/weather'
import todo from './component/todo'
import announcement from './component/announcement'
import history from './component/history'
import toolsbar from './component/toolbar'
export default {
  components: {
    user,
    userapply,
    usercompoent,
    todo,
    announcement,
    history,
    toolsbar
  },
  data() {
    return {
    }
  }
}
</script>

<style>
.signbox{
  margin: 20px;
  border: 1px solid rgb(239, 234, 243);
  margin-left: 35px;
}
.cnmentbox{
  margin: 15px auto;
  margin-left:30px;
}
.usrbox{
  margin-top: 20px;
  margin-left: 30px;
}
.leftplatform {

    height: 100%;
    /* background-color: aquamarine; */
}

.midplatform {
    /* height: 262px; */
    border: 1px rgb(239, 234, 243) solid;
    /* background-color: beige; */
}

.rightplatform {
    height: 100%;
    /* background-color: blueviolet; */
}
.todobox{

  border: 1px solid rgb(239, 234, 243);
  margin: 15px auto;
  margin-left: 30px;

}
</style>
