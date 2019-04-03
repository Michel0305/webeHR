<template>
  <div id="usrapply">
    <el-table
    :data="toApplydata"
    style="width: 100%">
    <el-table-column type="expand" width="20">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <!-- <el-table-column
        v-for="(item,id) in tbField"
        :key="id"
        header-align="center"
        align="center"        
        :prop="item.prop">
    </el-table-column> -->
    <el-table-column
        header-align="center"
        align="center"
        prop="frmType"
        width="60"
        >
    </el-table-column>
    <el-table-column
        header-align="center"
        align="center"
        prop="accountid"
        width="70">
    </el-table-column>
    <el-table-column
        header-align="center"
        align="center"
        prop="fullname"
        width="60">
    </el-table-column>
    <el-table-column
        header-align="center"
        align="center"
        prop="bm"
        width="120">
    </el-table-column>    
    <el-table-column
        header-align="center"
        align="center"
        prop="opDate"
        width="110">
    </el-table-column>
    <el-table-column
        header-align="center"
        align="center"
        prop="dataMsg">
    </el-table-column>   
    <el-table-column>
        <template slot-scope="scope">
            <el-button size="mini" type="success" circle>准</el-button>
            <el-button size="mini" type="danger" circle>駁</el-button>
            {{scope.row.status}}
        </template>
    </el-table-column> 
    
  </el-table>

    <!-- <el-collapse v-for="(item,id) in toApplydata" :key="id" @change="collapseChange">
      <div class="applylab">
        <label>{{item.fullname}}/{{item.accountid}}</label>
        <label>{{item.bm}} / {{item.kb}}</label>
      </div>
      <div class="btnapply">
        <el-button size="mini" type="success" circle>准</el-button>
        <el-button size="mini" type="danger" circle>駁</el-button>
      </div>

      <el-collapse-item :title="item.frmType" name="id">
        <div>ssssssss</div>
      </el-collapse-item>
    </el-collapse> -->

    <!-- <span v-for="(item,id) in toApplydata " :key="id">
      <div class="applyspan">
        <span><h5 class="applyh">{{item.frmType}}</h5></span> 
        <div class="applylab" >
            <label>{{item.fullname}}/{{item.accountid}}</label>
            <label>{{item.bm}} / {{item.kb}}</label>
        </div>
        <div class="btnapply">
            <el-button size="mini" type="success" circle>准</el-button>
            <el-button size="mini" type="danger" circle>駁</el-button>
        </div>
        <div>

        </div>
        
      </div>

       {{item}} 
    </span>-->
  </div>
</template>

<script>
var tbField = [{label:'',prop:'accountid'},{label:'',prop:'fullname'},{label:'',prop:'bm'},{label:'',prop:'kb'},{label:'',prop:'frmType'},{label:'',prop:'dateTimes'},{label:'',prop:'opDate'},{label:'',prop:'dataMsg'}]
var mnData = [
  {
    accountid: 36208,
    fullname: "項敏",
    bm: "資訊部",
    kb: "課別",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "因工作需求需要處理很多很多的事情"
  },
  {
    accountid: 36208,
    fullname: "項敏",
    bm: "資訊部",
    kb: "課別",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "因工作需求需要處理很多很多的事情"
  },
  {
    accountid: 45678,
    fullname: "張三",
    bm: "物料部放射性輻射",
    kb: "上發射點發射點",
    frmType: "請假單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "特殊原因請假"
  },
  {
    accountid: 48545,
    fullname: "維斯",
    bm: "財務",
    kb: "會計",
    frmType: "調休",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "工作需求所以要調休"
  },
  {
    accountid: 36208,
    fullname: "項敏",
    bm: "資訊部",
    kb: "課別",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "因工作需求需要處理很多很多的事情"
  },
  {
    accountid: 12542,
    fullname: "龍九",
    bm: "製造部",
    kb: "MFD4",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "好好的就是要加班"
  },
  {
    accountid: 36208,
    fullname: "項敏",
    bm: "資訊部",
    kb: "課別",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "因工作需求需要處理很多很多的事情"
  },
  {
    accountid: 45682,
    fullname: "皮廣義",
    bm: "研發",
    kb: "機構",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "嗯 來了就是加班的"
  },
  {
    accountid: 36208,
    fullname: "項敏",
    bm: "資訊部",
    kb: "課別",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "因工作需求需要處理很多很多的事情"
  },
  {
    accountid: 24587,
    fullname: "游記都",
    bm: "業務部",
    kb: "出口",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "又是來加班的"
  },
  {
    accountid: 36208,
    fullname: "項敏",
    bm: "資訊部",
    kb: "課別",
    frmType: "加班單",
    dateTimes: "2019-04-23 07:30:00 ~ 2019-04-23 21:30:00",
    opDate: "2019-04-03",
    dataMsg: "因工作需求需要處理很多很多的事情"
  }
];

export default {
  data() {
    return {
      toApplydata: mnData,
      activeName: 1,
      tbField:tbField,
    };
  },
  methods: {
    collapseChange() {}
  }
};
</script>

<style>
#usrapply {
  font-size: 12px;
  height: 350px;
  border: 1px;
  border-bottom-style: solid #555252;
  overflow: auto;
  overflow-y: auto;
  scrollbar-face-color: #555252;
}
.midplatform el-col el-col-24 el-col-xs-24 el-col-lg-12 {
  border-bottom: solid 1px #747171;
}
/* .el-collapse-item{
    float: left;
} */
/* .aaaaaa :hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
}  */
.applyspan {
  padding: 5px;
  width: 100%;
  height: 70px;
  border: 1px;
  border-bottom-style: dotted;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
}

.applyh {
  float: left;
  margin: 20px 10px 0px 10px;
}
.btnapply {
  float: right;
  width: 85px;
}
.applylab label {
  /* border:1px;  
  border-right-style: solid;  
  border-left-style: solid;   */
  /* position:initial; */
  text-align: center;
  /* float: left;  */
  height: 20px;
  width: 200px;
  font-size: 12px;
  padding: 20px 20px 0px 5px;
  /* margin: 20px 30px 30px 20px; */
}
.applylab {
  /* float: left; */
  width: 260px;
}

#usrapply::-webkit-scrollbar {
  height: 2px;
  width: 2px;
}
#usrapply::-webkit-scrollbar-button {
  height: 0;
  width: 0;
}
#usrapply::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
  display: block;
}
#usrapply::-webkit-scrollbar-button:vertical:start:increment,
::-webkit-scrollbar-button:vertical:end:decrement {
  display: none;
}
#usrapply::-webkit-scrollbar-track:vertical,
::-webkit-scrollbar-track:horizontal,
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal,
::-webkit-scrollbar-track:vertical,
::-webkit-scrollbar-track:horizontal,
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
  border-style: solid;
  border-color: transparent;
}
#usrapply::-webkit-scrollbar-track:vertical::-webkit-scrollbar-track:horizontal {
  background-clip: padding-box;
  background-color: #fff;
}
#usrapply::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07);
  background-clip: padding-box;
  background-color: rgba(0, 0, 0, 0.2);
  min-height: 28px;
  padding-top: 100;
}
#usrapply::-webkit-scrollbar-thumb:hover {
  -webkit-box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.4);
}
#usrapply::-webkit-scrollbar-thumb:active {
  -webkit-box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.35);
  background-color: rgba(0, 0, 0, 0.5);
}
#usrapply::-webkit-scrollbar-track:vertical,
::-webkit-scrollbar-track:horizontal,
::-webkit-scrollbar-thumb:vertical,
::-webkit-scrollbar-thumb:horizontal {
  border-width: 0;
}
#usrapply::-webkit-scrollbar-track:hover {
  -webkit-box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.05);
}
#usrapply::-webkit-scrollbar-track:active {
  -webkit-box-shadow: inset 1px 0 0 rgba(0, 0, 0, 0.14),
    inset -1px -1px 0 rgba(0, 0, 0, 0.07);
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
