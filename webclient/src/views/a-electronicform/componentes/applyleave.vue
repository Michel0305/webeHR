<template>
  <div>
    <el-form ref="leavefrmData" :model="leavefrmData" label-position="left" label-width="80px" size="mini">
      <el-form-item label="請假類別" required>
        <el-select v-model="leavefrmData.leaveType" placeholder="請假類別">
          <el-option v-for="(item,id) in lType" :key="id" :label="item.label" :value="item.value">{{ item.label }}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期" required>
        <el-col :xs="22" :sm="11">
          <el-form-item prop="startDate">
            <el-date-picker v-model="leavefrmData.startDate" size="mini" type="datetime" placeholder="选择日期" style="width: 100%;" @blur="computeDate"/>
          </el-form-item>
        </el-col>
        <el-col :xs="22" :sm="11">
          <el-form-item prop="endDate">
            <el-date-picker v-model="leavefrmData.endDate" size="mini" type="datetime" placeholder="选择时间" style="width: 100%;" @blur="computeDate"/>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="代理人" required>
        <el-select v-model="leavefrmData.agentUsr" placeholder="選擇代理人">
          <el-option label="36208/項敏" value="36208">36208/項敏</el-option>
          <el-option label="214/牛宇" value="214">214/牛宇</el-option>
          <el-option label="36378/唐傑" value="36378">36378/唐傑</el-option>
          <el-option label="58892/李輝" value="58892">58892/李輝</el-option>
          <el-option label="17959/謝樟良" value="17959">17959/謝樟良</el-option>
          <el-option label="40931/唐利專" value="40931">40931/唐利專</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="天/時數">{{ leavefrmData.dateCount }}{{ leavefrmData.dateuom }}</el-form-item>
      <el-form-item label="備注原因">
        <el-input v-model="leavefrmData.remark" type="textarea"/>
      </el-form-item>
      {{ infodata }}
    </el-form>
  </div>
</template>

<script>
import bus from '@/assets/bus' // 同級組件傳參
import BusLeave from './business/eformCommon.js'
export default {
  props: ['infodata'],
  data() {
    return {
      leavefrmData: {
        leaveType: '',
        startDate: '',
        endDate: '',
        remark: '',
        agentUsr: '',
        dateCount: '',
        dateuom: ''
      },
      lType: [{ label: '事假', value: '0' }, { label: '年休假', value: '1' }, { label: '病假', value: '2' }, { label: '產假', value: '3' }, { label: '哺乳假', value: '4' }, { label: '孕期公休', value: '5' }, { label: '婚假', value: '6' }, { label: '喪假', value: '7' }, { label: '陪護假', value: '8' }]
    }
  },
  mounted() {
    var self = this
    // console.log(self.userData);
    // bus.$on("userDefinedEvent",function(msg){
    //   console.log("XXXXXXXXXXXXX")
    //   console.log(msg)
    //  // self.msg=msg;
    // });
  },
  methods: {
    computeDate() {
      let recheck = BusLeave.checkleavedate(this.leavefrmData.startDate, this.leavefrmData.endDate);
      this.leavefrmData.dateCount = recheck.days;
      this.leavefrmData.dateuom = recheck.uom;
    }
  }
}
</script>
<style scoped>
 .el-form{
     font-size: 11px;
 }
 .el-form-item{
     margin-bottom: 8px;
 }
</style>
