/**
 用戶列表使用模板
 */
<template>
  <div>
    <el-col :span="22" :offset="0">
     <el-input v-model="search" style="width:220px; margin:5px 0px 5px 0px;" placeholder="search"></el-input>
    </el-col>  
    <el-table 
    ref="multipleTable"
    :data="tableData" 
    border
    :fit="true"
    :height="conheight.height"
    highlight-current-row
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"
    >
      <el-table-column
      type="selection"
      width="35">
      </el-table-column>  
      <el-table-column
        v-for="item in tablefield"
        :key="item.id"
        :prop="item.prop"
        :label="item.label"
        size="small"
        :width="item.width"
      ></el-table-column>      
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
var tableHaderCn = [
  { label: "工號", prop: "accountid", width: 55 },
  { label: "姓名", prop: "fullname", width: 70 },
  { label: "部門", prop: "department", width: 110 },
  { label: "部門編碼", prop: "departid", width: 70 },
  { label: "課別", prop: "classname", width: 90 },
  { label: "課別編碼", prop: "classid", width: 80 },
  { label: "綫別", prop: "lines", width: 80 },
  { label: "職位", prop: "position", width: 90 },
  { label: "工位", prop: "station", width: 80 },
  { label: "班次", prop: "worktimes", width: 50 },
  { label: "家庭住址", prop: "homeaddress", width: 320 },
  { label: "身份証", prop: "cardid", width: 150 },
  { label: "進厰日期", prop: "infodate", width: 90 },
  { label: "性別", prop: "sex", width: 50 },
  { label: "畢業學校", prop: "school", width: 120 },
  { label: "學歷", prop: "degree", width: 50 },
  { label: "專業", prop: "profession", width: 90 }
];

export default {
  data() {
    return {
      conheight: {
        height: "",
        width: "100%"
      },
      currentPage1:1,
      search:'',
      tablefield: tableHaderCn,
      multipleSelection:'',
      tableData: [
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },
        {
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },{
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },{
          accountid: "36208",
          fullname: "項敏項敏",
          department: "電子研發工程部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        },{
          accountid: "36208",
          fullname: "項敏項敏",
          department: "資訊部",
          departid: "420001",
          classname: "軟件開發課",
          classid: "420003",
          lines: "維護組",
          position: "高級工程師",
          station: "軟體開發",
          worktimes: "55",
          homeaddress: "安徽省安慶市宿松縣五里鄉黎沖村窯屋組16號",
          cardid: "340826198903058716",
          infodate: "2009/11/26",
          sex: "男",
          school: "文達電腦專修學院",
          degree: "大專",
          profession: "計算機網絡"
        }
      ]
    };
  },
  methods: {
    getHeight() {
      this.conheight.height = window.innerHeight - 230 + "px";
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    handleSizeChange(val){
    },
    handleCurrentChange(val){
        
    }
  },
  created() {
    window.addEventListener("resize", this.getHeight);
    this.getHeight();
  }
};
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
