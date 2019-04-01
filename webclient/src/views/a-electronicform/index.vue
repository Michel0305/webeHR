/**
  電子表單
     |-- 請假單
     |-- 加班單
     |-- 調休單
     |-- 換班單
     |-- 洽工單
     |-- 異動單
     |-- 補卡單
     |-- 離職單     
 */
 <template>
  <div>
    <el-row :gutter="10" class="toolBar">
      <el-col :span="22" :offset="1" class="allTool">
        <el-button type="primary" @click="openEldialog('leave')">請假</el-button>
        <el-button type="primary" @click="openEldialog('overtime')">加班</el-button>
        <el-button type="primary" @click="openEldialog('contactworkers')">洽工</el-button>
        <el-button type="primary" @click="openEldialog('checkingin')">考勤</el-button>
        <el-button type="primary" @click="openEldialog('changework')">異動</el-button>
        <el-button type="primary" @click="openEldialog('takework')">調休</el-button>
        <el-button type="primary" @click="openEldialog('leaveoffice')">離職</el-button> 
      </el-col>
    </el-row>  
    <!-- <leave infodata='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'></leave>   -->
    <el-row :gutter="10" class="bodyTable">
      <el-col :span="22" :offset="1" class="allTool">
        <personnel v-on:changeUser="changeUser" ></personnel>
      </el-col>
      <!-- xs	<768px 分辨率小於768 顯示占比 -->
      <!-- <el-col :xs="10" :span="22" :offset="1" class="allTool">AAAAA</el-col> -->
      <!-- sm ≥768px 分辨率大於等於768 顯示占比 -->
      <!-- <el-col :sm="10" :span="22" :offset="1" class="allTool">BBBBB</el-col> -->
      <!-- md ≥992px 分辨率大於等於992 顯示占比-->
      <!-- <el-col :md="10" :span="22" :offset="1" class="allTool">CCCCC</el-col> -->
      <!-- md ≥1200px 分辨率大於等於1200 顯示占比-->
      <!-- <el-col :lg="10" :span="22" :offset="1" class="allTool">DDDDD</el-col> -->
      <!-- md ≥1920px 分辨率大於等於1920 顯示占比-->
      <!-- <el-col :xl="10" :span="22" :offset="1" class="allTool">EEEEE</el-col> -->
    </el-row>
    <el-dialog
      :title="currentView"
      :visible.sync="dialogVisible"
      :width="eldialogWidth"
      :before-close="handleClose">      
      <span><component :infodata="userData" :is="currentView"></component></span>  
      <!-- component :is 方式動態加載 組件 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">送 出</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>  
    import personnel from './componentes/personnelinformation.vue'
    import leave from './componentes/applyleave.vue'
    import overtime from './componentes/applyovertime'
    import contactworkers from './componentes/applycontactworkers.vue'
    import checkingin from './componentes/applycheckingin.vue'
    import changework from './componentes/applychangework.vue'
    import takework from './componentes/applytakework.vue'
    import leaveoffice from './componentes/applyleaveoffice.vue'
    export default {
      data() {
        return {
          eldialogWidth:'',
          dialogVisible:false,
          ewidth:'',
          currentView:'',
          userData:[]
        }
      },
      components:{
        personnel,
        leave,
        overtime,
        contactworkers,
        checkingin,
        changework,
        takework,
        leaveoffice
      },
      methods:{
        openEldialog(typ){
          this.dialogVisible = true;
          this.currentView=typ;           
        },
        handleClose(){
        },
        changeUser(usr){
          this.userData = usr;
          //console.log(usr)
        }                       
      },
      /**
       * 根據寬度顯示DIV 大小比例
       */
      mounted(){ 
        let dialogWidth = `${document.documentElement.clientWidth}`;
        //dialogWidth =        
        Number(dialogWidth)<=720?this.eldialogWidth='95%':Number(dialogWidth)>720 & Number(dialogWidth)<=1024?this.eldialogWidth='70%':Number(dialogWidth)>1024 & Number(dialogWidth)<=1333?this.eldialogWidth='50%':this.eldialogWidth='40%';        
        // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
        const that = this;
        window.onresize = function temp() {
          let dialogWidth  = `${document.documentElement.clientWidth}`;
          Number(dialogWidth)<=720?that.eldialogWidth='95%':Number(dialogWidth)>720 & Number(dialogWidth)<=1024?that.eldialogWidth='70%':Number(dialogWidth)>1024 & Number(dialogWidth)<=1333?that.eldialogWidth='50%':that.eldialogWidth='40%';
        };        
      },
    };
</script>
 <style scoped>
.toolBar {
  margin-bottom: 36px;
  margin: 5px 0px 10px 0px; 
}
.allTool {
  border-radius: 4px;
  background: #f6f6f8;
  /* min-height: 36px; */
  box-shadow: 2px 2px 5px #d6d4d4;
}

.allTool button {
  margin: 8px 0px 8px 0px;
}

.el-dialog__body{
     padding: 0px 20px !important;
 }

</style>
 