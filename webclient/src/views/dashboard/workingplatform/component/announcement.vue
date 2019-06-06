<template>
  <div class="announcement" >
    <el-table
      :data="anment"
      style="width: 100%">
      <el-table-column
        prop="rq"
        label="公布日期"
      />
      <el-table-column
        prop="contents"
        label="公告内容"
      />
      <el-table-column
        prop="cfrom"
        label="公布部门"
      />
    </el-table>
  </div>
</template>
<script>
var ggdata = [{ rq: '2019-05-22', contents: '调休公告', cfrom: '人资' }, { rq: '2019-05-22', contents: '调休公告', cfrom: '人资' }, { rq: '2019-05-22', contents: '调休公告', cfrom: '人资' }, { rq: '2019-05-22', contents: '调休公告', cfrom: '人资' }, { rq: '2019-05-22', contents: '调休公告', cfrom: '人资' }]
export default {
  data() {
    return {
      maxheigth: `${document.documentElement.clientHeight - 370}px`,
      anment: ggdata
    }
  }
  // mounted () {
  //        // 动态设置背景图的高度为浏览器可视区域高度
  //   // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
  //   this.maxheigth = `${document.documentElement.clientHeight-370}px`;
  //   // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
  //   const that = this;
  //   window.onresize = function temp() {
  //     that.maxheigth = `${document.documentElement.clientHeight-370}px`;
  //   };
  //     },
  // watch: {
  //         screenWidth (val) {
  //                 this.screenWidth = val
  //                 this.timer = true
  //         }
  //     }
}
</script>
<style>
.announcement{
    border: 1px solid rgba(213, 213, 233, 0.7);
    margin: 0px;
    clear: both;
    color: rgb(116, 116, 116);
    font-size: 0.9rem;
    min-height: 300px;
}
.ctitle{
    text-align: center;
}
.ccontent{
    padding: 15px;
    overflow: auto;

}
</style>

