<template>
  <div class="todocontent">
    <div class="toolspan">
      <h6>工作代辦</h6>
      <el-button
        class="todobtnEdit"
        @click="createDialog()"
        type="primary"
        icon="el-icon-edit"
        circle
      ></el-button>
    </div>
    <div class="todolist">
      <ul>
        <li v-for="(item,i) in sortTodoList" :key="i" :style="item.isClose?endPlan:startPlan"  >
          <span>
            <div class="listdata">
              <h5> {{formatDate(item.todoData)}} {{formatTime(item.todoTime)}} </h5>
              <label>{{item.todoMsg}}</label>
              <div class="switchbtn">
                <el-switch
                  v-model="item.isClose"
                  active-text="完成"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
                <el-switch
                  v-model="item.isRemind"
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
    <el-dialog
      title="創建代辦"
      :visible.sync="createtodo"
      :width="eldialogWidth"
      :before-close="handleClose"
    >
      <span>
        <el-form :model="todoform" label-width="50px">
          <el-form-item label="日期">
            <el-date-picker v-model="todoform.todoData" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="時間">
            <el-time-picker v-model="todoform.todoTime" placeholder="任意时间点"></el-time-picker>
          </el-form-item>
          <el-form-item label="事項">
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="todoform.todoMsg"
              maxlength="50"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item label="提醒" style="width: 250px">
            <el-switch v-model="todoform.isRemind" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="createtodo = false">取 消</el-button>
        <el-button type="primary" @click="saveDialog()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// import { constants } from 'crypto';
import dateFormat from "../../../../utils/common";
import { constants } from "crypto";
export default {
  data() {
    return {
      isOver: true,
      createtodo: false,
      dialogVisible: false,
      eldialogWidth: "",
      todoform: {
        todoData: "",
        todoTime: "",
        todoMsg: "",
        isRemind: false,
        isClose: false,
      },
      todoListData: [],
      startPlan:{'background-color': 'rgba(148, 167, 91, 0.5)'},
      endPlan:{'background-color': 'rgba(0, 0, 0, 0.3)'}

      //background-color: rgba(48, 167, 91, 0.5);
    };
  },
  methods: {
    ckdialog() {
      console.log(this.dialogVisible);
    },
    handleClose() {
      console.log("BeforeClose");
    },
    saveDialog() {
      this.todoListData.push(this.todoform);
      this.todoListData = this.todoListData.sort(sortNumber);
      this.createtodo = false;
    },
    createDialog() {
      this.createtodo = true;
      this.todoform = {
        todoData: "",
        todoTime: "",
        todoMsg: "",
        isRemind: false,
        isClose: false,
      };
    },
    formatDate(stDate) {
      return dateFormat.dateFormats("yyyy-MM-dd", stDate);
    },
    formatTime(stTime) {
      return dateFormat.dateFormats("HH:mm", stTime);
    }
  },
  computed: {
    sortTodoList(){
      return sortByParam(this.todoListData,'todoTime');
    }
  },
  mounted() {
    const dialogWidth = `${document.documentElement.clientWidth}`;
    // dialogWidth =
    Number(dialogWidth) <= 720
      ? (this.eldialogWidth = "95%")
      : (Number(dialogWidth) > 720) & (Number(dialogWidth) <= 1024)
      ? (this.eldialogWidth = "70%")
      : (Number(dialogWidth) > 1024) & (Number(dialogWidth) <= 1333)
      ? (this.eldialogWidth = "50%")
      : (this.eldialogWidth = "40%");
    // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度．
    const that = this;
    window.onresize = function temp() {
      const dialogWidth = `${document.documentElement.clientWidth}`;
      Number(dialogWidth) <= 720
        ? (that.eldialogWidth = "95%")
        : (Number(dialogWidth) > 720) & (Number(dialogWidth) <= 1024)
        ? (that.eldialogWidth = "70%")
        : (Number(dialogWidth) > 1024) & (Number(dialogWidth) <= 1333)
        ? (that.eldialogWidth = "50%")
        : (that.eldialogWidth = "40%");
    };
  }
};
function sortNumber(a,b){
  return a - b
}

function sortByParam(arr,param){
  let newList = []
  if(arr.length<=1) return arr;
  arr.sort((a,b)=>{
    if(!a.isClose){
      return a.isClose - b.isClose;
    }else{
      return new Date(`${b.todoData} ${b.todoTime}`)- new Date(`${a.todoData} ${a.todoTime}`);
    }
  })
  return arr;
}

</script>
<style>
.todocontent{
  height: 300px;
}
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

.todolist{
 /* overflow:auto;*/
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
  border: 1px solid white;
  border-radius: 5px;
}
.listdata {
  position: relative;
  color: rgb(143, 145, 151);
}

.listdata > h5 {
  margin: 8px 0px 0px 10px;
  font-size: 1rem;
  position: absolute;
  width: 60%;
}

.listdata > label{
  font-size: .8rem;
  position: absolute;
  margin: 30px 0px 0px 10px;
  padding: 3px;
  font-weight: normal;
}

.todobtnEdit {
  float: right;
  margin-right: 30px;
  margin-top: 5px;
}
</style>
