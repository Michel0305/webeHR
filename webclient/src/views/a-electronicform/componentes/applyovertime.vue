<template>
  <div>
    <el-form
      ref="overtimefrmData"
      :model="overtimefrmData"
      label-position="left"
      label-width="80px"
      size="mini"
    >
      <el-form-item label="加班類型">
        <el-select v-model="overtimefrmData.reType" placeholder>
          <el-option
            v-for="item in worktype"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="加班日期">
        <el-date-picker
          type="dates"
          v-model="overtimefrmData.workDate"
          :editable="false"
          placeholder="选择一个或多个日期"
          @change="getWorkDate"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="加班時間">
        <el-col :xs="22" :sm="11">
          <el-form-item prop="startTime">
            <el-time-select
              v-model="overtimefrmData.startTime"
              :picker-options="{
                start: '07:00',
                step: '00:05',
                end: '22:00'
              }"
              placeholder="開始時間"  
              @blur="getWorkHours"           
            ></el-time-select>
            <!-- <el-date-picker v-model="overtimefrmData.startTime" size="mini" type="datetime" placeholder="选择日期" style="width: 100%;" /> -->
          </el-form-item>
        </el-col>
        <el-col :xs="22" :sm="11">
          <el-form-item prop="endTime">
            <el-time-select
              v-model="overtimefrmData.endTime"
              :picker-options="{
              start: '07:00',
              step: '00:05',
              end: '22:00'
            }"
              placeholder="結束時間"
              @blur="getWorkHours"
            ></el-time-select>
            <!-- <el-date-picker v-model="overtimefrmData.endTime" size="mini" type="datetime" placeholder="选择时间" style="width: 100%;" /> -->
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="加班時數">
        <a>{{overtimefrmData.hours}}小時</a>
        </br>
        <el-checkbox label="中餐" name="lunch" v-model="overtimefrmData.lunch">午餐</el-checkbox>
        <el-checkbox label="晚餐" name="dinner" v-model="overtimefrmData.dinner">晚餐</el-checkbox>
      </el-form-item>
      <el-form-item label="加班地點">
        <el-select v-model="overtimefrmData.workLoc" placeholder="選擇地點">
          <el-option
            v-for="(item,id) in workaddress"
            :key="id"
            :label="item.kb+' / '+item.cbzx"
            :value="item.cbzx">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="備注信息">
        <el-input type="textarea" v-model="overtimefrmData.remark"></el-input>
      </el-form-item>
      {{infodata}}
    </el-form>
  </div>
</template>
<script>
import eformCommon from './business/eformCommon.js'
var workType = [
  { label: "正常加班", value: "0" },
  { label: "周末加班", value: "1" },
  { label: "節假日加班", value: "2" },
  { label: "上班連班", value: "3" },
  { label: "直落班", value: "4" },
  { label: "特殊加班", value: "5" }
];
var workAddress = [{kb:"三廠生產管理部",cbzx:"1022702"},
{kb:"五廠工程部",cbzx:"1022712"},
{kb:"包材/测試課",cbzx:"1024512"},
{kb:"生技課A",cbzx:"1022705"},
{kb:"生產技術部",cbzx:"1022704"},
{kb:"生管部",cbzx:"1022710"},
{kb:"制一課(WF)",cbzx:"1162751"},
{kb:"制一課A",cbzx:"1022751"},
{kb:"制七課B",cbzx:"1022858"},
{kb:"制九課(WF)",cbzx:"1162753"},
{kb:"制二課(WF)",cbzx:"1162752"},
{kb:"制二課A",cbzx:"1022754"},
{kb:"制十課(WF)",cbzx:"1162754"},
{kb:"制十課A",cbzx:"1022763"},
{kb:"制十課B",cbzx:"1022859"},
{kb:"制十課B(配對線)",cbzx:"1022861"},
{kb:"制三課A",cbzx:"1022755"},
{kb:"制三課B",cbzx:"1022854"},
{kb:"制五課(相機無塵室)",cbzx:"1022752"},
{kb:"制五課A",cbzx:"1022757"},
{kb:"制六課B",cbzx:"1122857"},
{kb:"制四課A",cbzx:"1022756"},
{kb:"東莞業務部",cbzx:"1021010"},
{kb:"品保部",cbzx:"1022714"},
{kb:"品保部-品質控制",cbzx:"1022715"},
{kb:"品管部",cbzx:"1021202"},
{kb:"品管部",cbzx:"1022708"},
{kb:"品管部",cbzx:"1022751"},
{kb:"品管部",cbzx:"1022752"},
{kb:"品管部",cbzx:"1022756"},
{kb:"品管部",cbzx:"1022757"},
{kb:"品管部",cbzx:"1022857"},
{kb:"品管部",cbzx:"1022858"},
{kb:"研發中心",cbzx:"1023512"},
{kb:"倉儲部",cbzx:"1022711"},
{kb:"財務部",cbzx:"1021007"},
{kb:"電子課",cbzx:"1024512"},
{kb:"製一課",cbzx:"1022851"},
{kb:"製二課",cbzx:"1022853"},
{kb:"製三課",cbzx:"1022855"},
{kb:"廠長",cbzx:"1021001"},
{kb:"稽核室",cbzx:"1121002"},
{kb:"機構課",cbzx:"1024512"},
{kb:"總務部",cbzx:"1021006"},
{kb:"關務部",cbzx:"1022709"}]
export default {
  props:['infodata'],
  data() {    
    return {
      worktype: workType,
      workaddress:workAddress,
      overtimefrmData: {
        reType: '',
        workDate: '',
        startTime: '',
        endTime: '',
        dinner:'',
        lunch:'',
        workLoc:'',
        remark:'',
        hours:''

      },
      isSubmit:true,
    };
  },
  methods:{
    getWorkDate(){    
      let stWork = Math.min(...this.overtimefrmData.workDate);
      let edWork = Math.max(...this.overtimefrmData.workDate);
      let keyinDays = eformCommon.getDaysofbetween(stWork,edWork);
      this.isSubmit = true;
      if(keyinDays>10){
        console.log('Keyin outnumber 10')
        this.isSubmit = false;
      }      
    },
    getWorkHours(){    
     let workHours = eformCommon.checkoverworkHours(this.overtimefrmData.startTime,this.overtimefrmData.endTime);
     this.overtimefrmData.hours = workHours.days;
     this.isSubmit = true;
     if(workHours.days<=0 & workHours.days!=='' ){
       console.log('Keyin Date is Error')
       this.isSubmit = false;
     }
    }
  }
};
</script>
<style scoped>
 .el-form{
     font-size: 11px;
 }
 .el-form-item{
     margin-bottom: 8px;
 }
</style>