<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <el-form ref="userDatafrm" label-position="left" :model="userDatafrm" label-width="65px" size="mini" >
        <el-row>
          <el-col :span="12" :offset="1" style="margin-top:30px">
            <el-col :span="24">
              <el-form-item label="姓名:">{{userDatafrm.userName}}大多</el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="工號:">{{userDatafrm.accountId}}</el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="部門:">{{userDatafrm.department}}儘管吩咐</el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="課別:">{{userDatafrm.className}}</el-form-item>
            </el-col>
          </el-col>
          <el-col :span="10">
            <img :src="userImg" alt="IMG" srcset class="userimg">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="23" :offset="1">
            <el-form-item label="家庭住址:">{{userDatafrm.address}}</el-form-item>
          </el-col>
          <el-col :span="23" :offset="1">
            <el-form-item label="郵箱:">{{userDatafrm.email}}</el-form-item>
          </el-col>
          <el-col :span="23" :offset="1">
            <el-form-item label="手機:">{{userDatafrm.iphone}}</el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="0" class="btnfrm">
          <el-button size="mini" type="primary">加班</el-button>
          <el-button size="mini" type="primary">請假</el-button>
          <el-button size="mini" type="primary">洽工</el-button>
          <el-button size="mini" type="primary">調休</el-button>
          <el-button size="mini" type="primary">離職</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script>
// import PanThumb from '@/components/PanThumb'
export default {
  data() {
    return {
      userImg:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
      userDatafrm: {
        userName: "項敏",
        accountId: "36208",
        department: "資訊部",
        className: "維護組",
        address: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
        email: "xm@geniusnet.com.tw",
        iphone: "18664075908"
      }
    };
  }
};
</script>
<style>
.userimg {
  /* float: left; */
  width: 80px;
  height: 80px;
  margin: 30px 00px 00px 20px;
  /*上右下左*/
  /* z-index: 999; */
  /* right: 10px; */
}
.el-form-item {
  font-size: 10px;
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.el-form-item--mini.el-form-item,
.el-form-item--small.el-form-item {
  font-size: 12px;
  margin-bottom: 5px;
}
.el-form-item__content{
  font-size: 12px;
}
.el-form-item--mini .el-form-item__content, .el-form-item--mini .el-form-item__label {
    line-height: 28px;
    font-size: 12px;
}
.el-button{
  margin: 10px 0px 0px 10px;
}
</style>

