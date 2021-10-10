<template>
  <div class="main">
    <div class="container">
      <el-table :data="store.getters.data" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="" width="180" >
          <template #default="scope">
            <span>{{store.getters.data.indexOf(scope.row) + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="zipcode" label="ZIP" width="180" >
          <template #default="scope">
            <div style="cursor: pointer;" @click="clickColumn(scope.row)">
              <span>{{ scope.row.zipcode }}</span>
              <span class="gray">({{ scope.row.region }})</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="sales" label="Period Sales" width="100" />
        <el-table-column prop="lastYear" label="LY Period Sales" width="100" />
        <el-table-column prop="Sales Change" label="Sales Change" width="100" >
          <template #default="scope">
            <span
              :class="
              scope.row.sales > scope.row.lastYear ? 'green'
              : scope.row.sales === scope.row.lastYear ? 'gray'
              : 'red'">
              {{ scope.row.sales - scope.row.lastYear }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="Period Share" label="Period Share" width="100" >
          <template #default="scope">
            <span>{{(scope.row.sales / scope.row.total * 100).toFixed(2) }}%</span>
          </template>
        </el-table-column>
        <el-table-column prop="LY Period Share" label="LY Period Share" width="100" >
          <template #default="scope">
            <span>{{(scope.row.lastYear / scope.row.lastYearTotal * 100).toFixed(2) }}%</span>
          </template>
        </el-table-column>
        <el-table-column prop="YOY Share Change" label="YOY Share Change" width="100" >
          <template #default="scope">
            <span :class="
              ((scope.row.sales / scope.row.total * 100) >
              (scope.row.lastYear / scope.row.lastYearTotal * 100)) ? 'green'
              : ((scope.row.sales / scope.row.total * 100) ===
              (scope.row.lastYear / scope.row.lastYearTotal * 100)) ? 'gray'
              : 'red'">
              {{
              ((scope.row.sales / scope.row.total * 100) -
              (scope.row.lastYear / scope.row.lastYearTotal * 100)).toFixed(2) }}%</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <PopupModal :openModal="openModal" :modalData="scopeRow" @clickColumn="clickColumn" />
  </div>
</template>

<script>
  import { defineComponent, ref } from "vue";
  import { useStore } from "vuex";
  import PopupModal from './PopupModal'

  export default defineComponent({
    name: "Main",
    components: {
      PopupModal
    },
    setup() {
      const store = useStore()
      const openModal = ref(false)
      const scopeRow = ref()

      const tableRowClassName = ({ rowIndex }) => {
        if (rowIndex % 2 === 0) {
          return 'light-row'
        }
      }

      const clickColumn = (payload) => {
        openModal.value = !openModal.value
        scopeRow.value = payload
      }

      return {
        store,
        tableRowClassName,
        clickColumn,
        openModal,
        scopeRow,
      }
    }
  })
</script>

<style scoped>
  .container{
    width: 1088px;
    margin: 0 auto;
  }
  .main{
    padding: 114px 0;
    color: #FFFFFF;
    position: relative;
  }
  .red {
    color: #FF0000;
  }
  .green{
    color: #00801A;
  }
  .gray {
    color: #777777;
  }
</style>