<template>
<div class="side-menu-wrapper">
  <slot name="top"></slot>
  <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
    <template v-for="item in list">
      <re-submenu
      v-if="item.children"
      :key="`menu_${item.name}`"
      :name="item.name"
      :parent="item">
      </re-submenu>
      <menu-item v-else :key="`menu_${item.name}`" :name="item.name">
        <Icon :type="item.icon"/>
        {{ item.title }}
        </menu-item>
    </template>
  </Menu>
  <div v-show="collapsed" class="drop-wrapper">
    <template v-for="item in list">
      <re-dropdown v-if="item.children" icon-color="#fff" :key="`drop_${item.name}`" :parent="item">
      </re-dropdown>
      <Tooltip v-else :content="item.title" :key="`drop_${item.name}`" placement="right">
        <span class="drop-menu-span">
          <Icon :type="item.icon" :size="20" color="#fff"/>
        </span>
      </Tooltip>
    </template>
  </div>
</div>
</template>
<script>
import ReSubmenu from './re-submenu.vue'
import ReDropdown from './re-dropdown.vue'
export default {
  name: 'SideMenu',
  components:{
    ReSubmenu,
    ReDropdown
  },
  props :{
    collapsed: {
      type: Boolean,
      default: false
    },
      //当type为object/array/func , 默认值不能只传一个空值，需要用一个Func
      //默认值为对象时  default: () => ({})
    list: {
      type: Array,
      default: () => []
    }
  },
  methods:{
    handleSelect(name){
      console.log("selected: "+name)
    }
  }
}
</script>
<style lang="less">
.side-menu-wrapper{
  width: 100%;
  .ivu-tooltip, .drop-menu-span{
    width: 100%;
    display: block;
    text-align: center;
    padding: 5px 0;
  }
}
//直接选中子元素.ivu-dropdown应用style
.drop-wrapper > .ivu-dropdown {
  display: block;
  margin: 0 auto;
  padding-top: 5px;
}

</style>
