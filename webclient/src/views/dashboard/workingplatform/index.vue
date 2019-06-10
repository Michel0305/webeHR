<template>
  <div class="curUsrtemplate">
    <el-row :gutter="0">
        <toolsbar/>
    </el-row>
    <el-row :gutter="0">
      <el-col :xs="{span: 24 }" :sm="{span: 15}" class="signbox">
        <userapply/>        
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 7 ,offset:1}" class="usrbox">
        <user />
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :xs="{span: 24}" :sm="{span: 11 }" class="cnmentbox">
        <announcement/>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 11 ,offset:1}" class="todobox">
        <todo ref="createtodo"></todo>
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
  },
  methods:{
    todoAdd:()=>{
      this.$ref.createtodo.ckdialog();
    }
  }
}
</script>
<style>
 .curUsrtemplate{
   width: 90%;
   margin: 0 auto;
 }
 .signbox{
  padding: 0px; 
  border: 1px solid rgb(239, 234, 243);
  margin-top: 20px; 
  /* margin-left: 35px; */
 }

.cnmentbox{
  margin-top: 20px;
}
.usrbox{
  margin-top: 20px;
}
.leftplatform {
    height: 100%;
}

.midplatform {
    border: 1px rgb(239, 234, 243) solid;
}

.rightplatform {
    height: 100%;
}
.todobox{
  margin-top: 20px;
  border: 1px solid rgb(239, 234, 243);
  height: 380px;
} 
</style>
