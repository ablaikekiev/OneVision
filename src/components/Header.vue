<template>
  <div class="header">
    <img src="../assets/header/Logo.svg" alt="logo" class="header__logo">
      <nav class="header__nav">
        <span class="header__nav-links">Real Time Cashflow</span>
        <span class="header__nav-links">Planner</span>
        <span class="header__nav-links">Budget</span>
        <span class="header__nav-links">Analytics: <span class="header__nav-links--orange">Market Share</span></span>
      </nav>
    <img src="../assets/header/Settings.svg" alt="settings">
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Header"
  })
</script>

<style scoped lang="scss">
  .header{
    display: flex;
    justify-content: space-between;
    &__nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 900px;
      &-links{
        margin: 15px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        &--orange{
          color: #F38C2C;
        }
      }
    }
  }
</style>