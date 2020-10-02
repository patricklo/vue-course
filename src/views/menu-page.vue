<template>
  <div class="menu-box">
    <a-menu>
      <a-menu-item>

      </a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import menuComponents  from '_c/menu'
const {AMenu, AMenuItem, ASubMenu} = menuComponents
export default {
  name: 'menu_page',
  components:{
    AMenu,
    AMenuItem,
    ASubMenu
  }
}
</script>
,<style lang="less">

</style>
