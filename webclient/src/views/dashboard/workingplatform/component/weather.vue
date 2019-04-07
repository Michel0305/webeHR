<template>
  <div id="weatherdom">
    <div class="weatherhead">
      <h6>今天</h6>
      <h6>2019-04-07</h6>
    </div>
    <div class="weathericon">
      <img src="../static/img/01.png" alt="" srcset="">
    </div>
    <div class="weatherdata" >
      <el-form label-position="left" label-width="80px">
        <el-form-item label="城市" >
          广东/东莞
        </el-form-item>
        <el-form-item label="湿度" >
          83%
        </el-form-item>
        <el-form-item label="pm2.5" >
          2.3 ~2.7
        </el-form-item>
        <el-form-item label="空气质量">
          优
        </el-form-item>
        <el-form-item label="温度">
          24
        </el-form-item>
        <el-form-item label="郊外">
          各类人群可自由活动
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .weatherhead{
        text-align: center;
    }
    .weatherhead h6{
        margin: 15px 0 0 0;
    }
    #weatherdom{
        margin-left: 2px;
        height: 200px;
        width: 100%;
        border: 1px solid #ece8ec;
        /* background-image: url('../../../../../static/img/qingtian.png'); */
    }
    .weathericon{
        padding: 0px;
        text-align: center;
    }
    .weathericon img{
        height: 90px;
        width: 100px;
    }
</style>
