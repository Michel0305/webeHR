<template>
  <div>
    <el-form ref="leavefrmData" label-position="left" :model="leavefrmData" label-width="80px" size="mini">
      <el-form-item label="請假類別" required>
        <el-select v-model="leavefrmData.leaveType" placeholder="請假類別">
          <el-option label="label" value="value">年休</el-option>
          <el-option label="label" value="value">事假</el-option>
          <el-option label="label" value="value">病假</el-option>
          <el-option label="label" value="value">婚嫁</el-option>
          <el-option label="label" value="value">哺乳</el-option>
          <el-option label="label" value="value">產假</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期" required>
            <el-col :xs="22" :sm="11">
                <el-form-item prop="startDate">
                    <el-date-picker size="mini" type="datetime" placeholder="选择日期" v-model="leavefrmData.startDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col  :xs="22" :sm="11">
                <el-form-item prop="endDate">
                    <el-date-picker size="mini" type="datetime" placeholder="选择时间" v-model="leavefrmData.endDate" style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
      </el-form-item>
      <el-form-item label="代理人" required>
        <el-select v-model="leavefrmData.leaveType" placeholder="選擇代理人">
          <el-option label="label" value="value">36208/項敏</el-option>
          <el-option label="label" value="value">214/牛宇</el-option>
          <el-option label="label" value="value">36378/唐傑</el-option>
          <el-option label="label" value="value">58892/李輝</el-option>
          <el-option label="label" value="value">17959/謝樟良</el-option>
          <el-option label="label" value="value">40931/唐利專</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="天/時數">10天</el-form-item>
      <el-form-item label="備注原因">
            <el-input type="textarea" v-model="leavefrmData.remark"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leavefrmData: {
        leaveType: '',
        startDate:'',
        endDate:'',
        remark:''
      }
    };
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
