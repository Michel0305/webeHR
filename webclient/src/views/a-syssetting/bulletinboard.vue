<template>
  <div class="bulletData">
    <el-row>
      <el-col :span="7">
        <el-table :data="bulletData">
          <el-table-column label="版本號" prop="cVer">
          </el-table-column>
          <el-table-column label="發佈日期" prop="defDate">
          </el-table-column>
          <el-table-column label="生效日期" prop="effDate">
          </el-table-column>
          <el-table-column label="">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="15" :offset="1">
        <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bulletData: [{cVer:'2019061301',defDate:'2019-06-13',effDate:'2019-06-13'}],
      content: "<p>example content</p>",
      editorOption: {
        /* quill options */
      }
    };
  },
  methods: {
    onEditorChange(event) {
      console.log("onEditorChange");
    },
    onEditorBlur(event){

    },
    onEditorFocus(event){

    },
    handleEdit(index,row){

    }
  }
};
</script>
