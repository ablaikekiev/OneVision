<template>
  <div>
    <Header />
    <Main />
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import Header from "./components/Header";
import Main from "./components/Main";
import { useStore } from "vuex";
import data from './data.json'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Main,
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.commit('getData', data)
    })
  }
})
</script>

<style lang="scss">
  body {
    background: #2E2F32;
  }
#app {
  font-family: HelveticaNeueCyr sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  .el-table__row{
    height: 50px;
    &.light-row {
      background: #3F4042;
      border-radius: 12px;
    }
  }
  .el-overlay{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #3F4042;
    border: none;
    box-shadow: 0 24px 96px rgba(0, 0, 0, 0.24);
    border-radius: 12px;
    padding: 24px;
    width: 450px;
  }
  .el-dialog__headerbtn{
    display: none;
  }
</style>
