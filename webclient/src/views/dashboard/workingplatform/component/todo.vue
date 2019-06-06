<template>
  <div class="listtodo">
    <el-col >
      <el-calendar v-model="todos" :range="['2019-05-10', '2019-05-28']">
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </el-calendar>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: new Date()
    }
  }
}
</script>
<style>
  .listtodo{
    width: 60%;
  }
</style>
