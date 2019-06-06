<template>
  <div id="weatherdom">
    <div class="weatherhead">
      <h6>今天</h6>
      <h6>2019-04-07</h6>
    </div>
    <div class="weathericon">
      <img src="../static/img/01.png" alt="" srcset="">
      <ul class="wdata">
        <li>城市:广东/东莞</li>
        <li>湿度:湿度</li>
        <li>PM值:2.3 ~2.7</li>
        <li>空气质量:优</li>
        <li>温度:24</li>
      </ul>
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
        margin: 5px 0 0 0;
    }
    #weatherdom{
        margin-left: 2px;
        height: 200px;
        width: 100%;
        border: 1px solid #ece8ec;
        font-size: 0.8rem;
        /* background-image: url('../../../../../static/img/qingtian.png'); */
    }
    .wdata{
      list-style: none;
      padding: 0px;
      margin: 0px;

    }
    .wdata li{
      /* position:absolute; */
      padding: 2px;
    }
    .weathericon{
        padding: 0px;
        text-align: center;
        position: relative;
    }
    .weathericon img{
        height: 60px;
        width: 60px;
        animation: weicon 2s infinite;
    }

    @keyframes weicon {
      0% {transform: scale(1)}
      50% {transform: scale(1.3)}
      100% {transform: scale(1)}
    }
</style>
