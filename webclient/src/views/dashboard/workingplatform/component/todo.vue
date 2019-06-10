<template>
  <div>
    <div class="toolspan">
      <h6>工作代辦</h6>
      <el-button class="todobtnEdit" type="primary" icon="el-icon-edit" circle></el-button>
    </div>
    <div class="todolist">
      <ul>
        <li>
          <span>
            <div class="listdata">
              <h5>2019-08-15 08:30 財務需要提前處理掉過期賬務 </h5>
              <div class="switchbtn">
                <el-switch v-model="isClose" active-text="完成" active-color="#13ce66"  inactive-color="#ff4949"></el-switch>
                <el-switch v-model="isOver" active-text="提醒" active-color="#13ce66"  inactive-color="#ff4949"></el-switch>
              </div>                            
            </div>
          </span>
        </li>
      </ul>
    </div>
    <!-- <el-col >
      <el-calendar v-model="todos" :range="['2019-05-10', '2019-05-28']">
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </el-calendar>
    </el-col> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: new Date(),
      isOver:true,
      isClose:false,
    }
  }
}
</script>
<style>
  .toolspan{
    height: 38px;
    background-color:rgba(0, 0,0, .05); 
  }
  h6{
    position: absolute;
    width: 60%;
    margin: 10px 0px 0px 20px;
    color: rgba(0, 0, 0, .6);
  }
  .todolist ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  .switchbtn{
    float:right;
    width: 85px;
  } 
  .switchbtn .el-switch{
    margin: 5px auto;
  }

  .todolist ul>li{ 
   margin-top: 2px;    
   height: 60px; 
   background-color: rgba(48, 167, 91, .5);
   border: 1px solid white;
   border-radius: 5px;
  }
  .listdata {
    position: relative;
  }

  .listdata>h5{
    font-size: 1rem;
    position:absolute;
    width: 60%;
    margin: 8px 20px 0px 20px;    
  }  
  .todobtnEdit{    
    float: right;
    margin-right: 30px;
    margin-top: 5px;
  }


</style>
