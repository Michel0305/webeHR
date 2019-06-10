<template>
  <div>
    <div class="toolspan">
      <h6>工作代辦</h6>
      <el-button class="todobtnEdit" @click="createtodo=true" type="primary" icon="el-icon-edit" circle></el-button>
    </div>
    <div class="todolist">
      <ul>
        <li>
          <span>
            <div class="listdata">
              <h5>2019-08-15 08:30 財務需要提前處理掉過期賬務</h5>
              <div class="switchbtn">
                <el-switch
                  v-model="isClose"
                  active-text="完成"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
                <el-switch
                  v-model="isOver"
                  active-text="提醒"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
              </div>
            </div>
          </span>
        </li>
      </ul>
    </div>
      <el-dialog title="創建代辦" :visible.sync="createtodo" :width="eldialogWidth" :before-close="handleClose">      
      <span>
        <el-form :model='todoform' label-width='50px'>
            <el-form-item label='日期' >
              <el-date-picker
                v-model="todoform.todoData"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label='時間' >
              <el-time-picker
                v-model="todoform.todoTime"
                placeholder="任意时间点">
              </el-time-picker>
            </el-form-item>
            <el-form-item label='事項'>
              <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="todoform.todoMsg"
                maxlength="50"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label='提醒' style='width: 250px'>
              <el-switch
                v-model="todoform.isRemind"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createtodo = false">取 消</el-button>
        <el-button type="primary" @click="createtodo = false">确 定</el-button>
      </span>
      </el-dialog>
  </div>
</template>
<script>
// import { constants } from 'crypto';
export default {
  data() {
    return {
      isOver: true,
      isClose: false,
      createtodo: false,
      dialogVisible: false,
      eldialogWidth:'',
      todoform:{
        todoData:'',
        todoTime:'',
        todoMsg:'',
        isRemind:false,
      },      
    };
  },
  methods: {
    ckdialog: () => {
      console.log("XXXXXXXXXXXX");
      console.log(this.dialogVisible);
    },
    handleClose: () => {
      console.log("BeforeClose");
    }
  },
  mounted() {
    const dialogWidth = `${document.documentElement.clientWidth}`
    // dialogWidth =
    Number(dialogWidth) <= 720 ? this.eldialogWidth = '95%' : Number(dialogWidth) > 720 & Number(dialogWidth) <= 1024 ? this.eldialogWidth = '70%' : Number(dialogWidth) > 1024 & Number(dialogWidth) <= 1333 ? this.eldialogWidth = '50%' : this.eldialogWidth = '40%'
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    const that = this
    window.onresize = function temp() {
      const dialogWidth = `${document.documentElement.clientWidth}`
      Number(dialogWidth) <= 720 ? that.eldialogWidth = '95%' : Number(dialogWidth) > 720 & Number(dialogWidth) <= 1024 ? that.eldialogWidth = '70%' : Number(dialogWidth) > 1024 & Number(dialogWidth) <= 1333 ? that.eldialogWidth = '50%' : that.eldialogWidth = '40%'
    }
  },

};
</script>
<style>
.toolspan {
  height: 38px;
  background-color: rgba(0, 0, 0, 0.05);
}
h6 {
  position: absolute;
  width: 60%;
  margin: 10px 0px 0px 20px;
  color: rgba(0, 0, 0, 0.6);
}
.todolist ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

.switchbtn {
  float: right;
  width: 85px;
}
.switchbtn .el-switch {
  margin: 5px auto;
}

.todolist ul > li {
  margin-top: 2px;
  height: 60px;
  background-color: rgba(48, 167, 91, 0.5);
  border: 1px solid white;
  border-radius: 5px;
}
.listdata {
  position: relative;
}

.listdata > h5 {
  font-size: 1rem;
  position: absolute;
  width: 60%;
  margin: 8px 20px 0px 20px;
}
.todobtnEdit {
  float: right;
  margin-right: 30px;
  margin-top: 5px;
}
</style>
