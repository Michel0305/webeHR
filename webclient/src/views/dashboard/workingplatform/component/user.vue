<template>
  <div class="curuser">
    <div class="urtitle">
      <h6>个人资讯</h6>
    </div>    
    <div class="usrdata">
      <ul>
        <li>姓名:{{ userDatafrm.userName }}大多</li>
        <li>工號:{{ userDatafrm.accountId }}</li>
        <li>部門:{{ userDatafrm.department }}</li>
        <li>課別:{{ userDatafrm.className }}</li>
        <li>家庭住址:{{ userDatafrm.address }}</li>
        <li>郵箱:{{ userDatafrm.email }}</li>
        <li>手機:{{ userDatafrm.iphone }}</li>
      </ul>
    </div>
    <div class="userimg">
      <img :src="userImg" alt="IMG" srcset class="userimg">
    </div>
    <div class="btnfun">
      <el-button size="mini" type="primary">加班</el-button>
      <el-button size="mini" type="primary">請假</el-button>
      <el-button size="mini" type="primary">洽工</el-button>
      <el-button size="mini" type="primary">調休</el-button>
      <el-button size="mini" type="primary">離職</el-button>
    </div>
  </div>
</template>
<script>
// import PanThumb from '@/components/PanThumb'
export default {
  data() {
    return {
      userImg:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
      userDatafrm: {
        userName: '項敏',
        accountId: '36208',
        department: '資訊部',
        className: '維護組',
        address: '安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號',
        email: 'xm@geniusnet.com.tw',
        iphone: '18664075908'
      }
    }
  }
}
</script>
<style>
.urtitle{
  height: 30px;
  background-color:rgba(0, 0,0, .05);  
}
.curuser{
  font-size: 15px;
  font-weight: bold;
  position: relative;
  border: 1px solid rgb(239, 234, 243);
  clear: both;
  /* 清除浮动效果，div 撑开 */
  height: 350px;
}
.usrdata{
  margin: 15px 0px 0px 0px;
}

.usrdata ul{
  list-style: none;
  padding: 0px;
  margin: 0px;
}

h4{
  /* padding: 0px; */
  margin: 10px;

}

.usrdata ul>li{
  margin: 15px;
}
.userimg img{
  width: 90px;
  height: 90px;
  position: absolute;
  top: 50px;
  right: 30px;
}
.btnfun button{
  padding: 8px 12px 8px 12px;
  margin: 0px 0px 0px 10px;
}
.el-button+.el-button{
  margin:0px;
}
.el-table--mini td, .el-table--mini th{
  padding: 0px;
}

.btnfun{
  position: absolute;
  bottom: 10px;
}

</style>

