<template>
  <div :style="{height:maxheigth}" class="history">
    <ul>
      <li>
        <h6>2019-05-01公告</h6>
      </li>
      <li>
        <h6>2019-05-02公告</h6>
      </li>
      <li>
        <h6>2019-05-03公告</h6>
      </li>
      <li>
        <h6>2019-05-04公告</h6>
      </li>
      <li>
        <h6>2019-05-05公告</h6>
      </li>
      <li>
        <h6>2019-05-06公告</h6>
      </li>
      <li>
        <h6>2019-05-07公告</h6>
      </li>
      <li>
        <h6>2019-05-08公告</h6>
      </li>
      <li>
        <h6>2019-05-09公告</h6>
      </li>
      <li>
        <h6>2019-05-10公告</h6>
      </li>
      <li>
        <h6>2019-05-11公告</h6>
      </li>
    </ul>
  </div>
</template>
<script>
import { constants } from 'crypto'
export default {
  data() {
    return {
      maxheigth: `${document.documentElement.clientHeight - 370}px`,
      timer: true
    }
  },
  watch: {
    maxheigth(val) {
      this.maxheigth = val
      this.timer = true
    }
  },
  mounted() {
    // 动态设置背景图的高度为浏览器可视区域高度
    // 首先在Virtual DOM渲染数据时，设置下背景图的高度．
    this.maxheigth = `${document.documentElement.clientHeight - 370}px`
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    const that = this
    window.onresize = function temp() {
      that.maxheigth = `${document.documentElement.clientHeight - 370}px`
    }
  }
}
</script>
<style>
  .history {
    border: 1px solid rgba(200, 215, 233, 0.8);
  }
</style>
