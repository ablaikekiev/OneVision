<template>
  <el-dialog
    :model-value="openModal"
    title="Tips"
    width="30%"
    class="popup"
  >
    <template #title>
      <div class="popup__closeBtn" @click="handleClose">
        <img src="../assets/popupClose.svg" alt="close" class="popup__closeImg">
      </div>

      <h2 class="popup__title">{{ modalData ? modalData.zipcode : '' }}</h2>
      <h3 class="popup__subtitle">{{ modalData ? modalData.region : '' }}</h3>
      <hr>
      <p class="popup__total">Total: {{modalData ? modalData.lastYearTotal : '' }}</p>
      <div v-if="modalData">
        <div class="popup-flexBox" v-for="(item, index) in modalData.competitors" :key="item.sales">
          <p class="popup-flexBox__items">
            <span>{{ index + 1 }}.</span>
            <span>{{ item.name }}:</span>
            <span>{{ item.sales }}</span>
          </p>
        </div>
      </div>
      <hr>
    </template>
    <template #footer>
      <p>Other: {{modalData ? modalData.total : ''}}</p>
      <button class="popup__button">Dealer</button>
    </template>
  </el-dialog>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "PopupModal",
    props: {
      openModal: {
        type: Boolean,
        default: () => false,
      },
      modalData: {
        type: Object,
        default: () => {},
      }
    },
    setup(props, { emit }) {
      const handleClose = () => {
        emit('clickColumn')
      }

      return {
        handleClose,
      }
    }
  })
</script>

<style scoped lang="scss">
  .popup{
    &__title{
      text-align: left;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.02em;
      color: #FFFFFF;

    }
    &__subtitle{
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: rgba(255, 255, 255, 0.4);
      text-align: left;
    }
    &-flexBox{
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      &__items{
        display: flex;
        justify-content: space-between;
      }
    }
    &__button{
      display: block;
      width: 100px;
      height: 50px;
      border: none;
      outline: none;
      cursor: pointer;
      color: #ffffff;
      background: #F38C2C;
      border-radius: 12px;
    }
    &__closeBtn{
      position: absolute;
      top: 40px;
      right: 40px;
      display: block;
      width: 50px;
      height: 40px;
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 8px;
      line-height: 44px;
      cursor: pointer;
    }
  }
</style>