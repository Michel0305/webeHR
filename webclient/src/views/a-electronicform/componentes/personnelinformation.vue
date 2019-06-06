/**
 用戶列表使用模板
 */
<template>
  <div>
    <el-col :span="22" :offset="0">
      <el-input v-model="search" style="width:220px; margin:5px 0px 5px 0px;" placeholder="search"/>
    </el-col>
    <el-table
      ref="multipleTable"
      :data="tableData.slice((currentPage1-1)*pageSize,currentPage1*pageSize)"
      :fit="true"
      :height="conheight.height"
      border
      highlight-current-row
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="35"/>
      <el-table-column
        v-for="item in tablefield"
        :key="item.id"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        size="small"
      />
    </el-table>
    <el-pagination
      :current-page.sync="currentPage1"
      :page-size="pageSize"
      :total="pageTotal"
      layout="total, prev, pager, next"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
import bus from '@/assets/bus' // 同級組件傳參
import { getUserData } from '@/api/user'
var tableHaderCn = [
  { label: '工號', prop: 'accountid', width: 60 },
  { label: '姓名', prop: 'fullname', width: 70 },
  { label: '部門', prop: 'userinfo.department', width: 110 },
  { label: '部門編碼', prop: 'userinfo.departid', width: 70 },
  { label: '課別', prop: 'userinfo.classname', width: 100 },
  { label: '課別編碼', prop: 'userinfo.classid', width: 80 },
  { label: '綫別', prop: 'userinfo.lines', width: 100 },
  { label: '職位', prop: 'userinfo.position', width: 90 },
  { label: '工位', prop: 'userinfo.station', width: 110 },
  { label: '班次', prop: 'worktimes', width: 50 },
  { label: '家庭住址', prop: 'homeaddress', width: 320 },
  { label: '身份証', prop: 'cardid', width: 150 },
  { label: '進厰日期', prop: 'infodate', width: 90 },
  { label: '性別', prop: 'sex', width: 50 },
  { label: '畢業學校', prop: 'school', width: 180 },
  { label: '學歷', prop: 'degree', width: 50 },
  { label: '專業', prop: 'profession', width: 90 }
]

export default {
  data() {
    return {
      conheight: {
        height: '',
        width: '100%'
      },
      currentPage1: 1,
      search: '',
      tablefield: tableHaderCn,
      multipleSelection: '',
      tableData: [],
      pageTotal: 0,
      pageSize: 10
    }
  },
  mounted() {
    var _that = this
    _that.getUserJSON()
  },
  created() {
    window.addEventListener('resize', this.getHeight)
    this.getHeight()
  },
  methods: {
    getUserJSON() {
      getUserData().then(response => {
        this.tableData = response.data
        this.pageTotal = response.data.length
      })
    },
    getHeight() {
      this.conheight.height = window.innerHeight - 230 + 'px'
      this.pageSize = (window.innerHeight - 230) / 26
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.$emit('changeUser', val)
    },
    handleSizeChange(val) {
      // this.pageData = this.tableData.slice((val-1)*6,val*6)
      // console.log('handleSizeChange:'+ val)
    },
    handleCurrentChange(val) {
      this.currentPage1 = val
      // console.log('handleCurrentChange:'+val)
    }
  }
}
</script>
<style scoped>

.el-table td{
    padding: 2px 0px;
}
.el-table {
  font-size: 11px;
}
.el-table--medium td {
  padding: 5px 0px;
}

</style>
