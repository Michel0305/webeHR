<template>
  <div>
    <el-row :gutter="0">
      <el-col :xs="{span:11 }" :sm="{span:5 }" :md="{span:5 }" :lg="{span:5 }" :xl="{span:5 }" class="toolsbar signin ">
        <div>
          <h3>签到</h3>
          <el-button type="primary">签到</el-button>
          <el-button type="primary">签退</el-button>
        </div>
      </el-col>
      <!-- xs	<768px 分辨率小於768 顯示占比 -->
      <!-- sm ≥768px 分辨率大於等於768 顯示占比 -->
      <!-- md ≥992px 分辨率大於等於992 顯示占比-->
      <!-- lg ≥1200px 分辨率大於等於1200 顯示占比-->
      <!-- xl ≥1920px 分辨率大於等於1920 顯示占比-->
      <el-col :xs="{span:11 }" :sm="{span:5 ,offset:1}" :md="{span:5 ,offset:1}" :lg="{span:5 ,offset:1}" :xl="{span:5 ,offset:1}" class="toolsbar workform"> <h3>表单</h3> </el-col>
      <el-col :xs="{span:11 }" :sm="{span:5 ,offset:0}" :md="{span:5 ,offset:0}" :lg="{span:5 ,offset:1}" :xl="{span:5 ,offset:1}" class="toolsbar addressbook"> <h3>通讯录</h3> </el-col>
      <el-col :xs="{span:11 }" :sm="{span:5 ,offset:1}" :md="{span:5 ,offset:1}" :lg="{span:5 ,offset:1}" :xl="{span:5 ,offset:1}" class="toolsbar doc"><h3>个人文件</h3> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.toolsbar{
    /* border: 1px solid salmon; */
    height: 90px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    border-radius: 5px;
    margin-top: 15px;
    margin-right: 10px;
}
.signin{
    background-color: #00c0ef;
    clear: both;
    overflow: auto;
}
.workform{
    background-color: #00a65a;
}
.addressbook{
   background-color: #f39c12;
}

.doc{
    background-color: #dd4b39;
}

h3{
    color: white;
    padding: 5px;
    margin: 0px;
}

</style>
