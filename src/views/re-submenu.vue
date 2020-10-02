<template>
<!-- 递归组件： 使用动态递归方式将动态菜单渲染出来 -->
  <a-submenu>
    <div slot="title">{{parent.title}}</div>
    <template v-for="(item, idx) in parent.children" >
      <a-menu-item v-if="!item.children" :key="`menu_item_${index}_${idx}`">{{ item.title }}</a-menu-item>
      <re-submenu v-else :key="`menu_item_${index}_${idx}`" :parent="item" :index="index"></re-submenu>
    </template>
  </a-submenu>
</template>
<script>
import menuComponents  from '_c/menu'
const { ASubmenu, AMenuItem} = menuComponents
export default {
  name: 'ReSubmenu',
  components: {
    ASubmenu, AMenuItem
  },
  props: {
    parent: {
      type: Object,
      default: () => ({}) //如果type 是object,必须提供一个回调函数。
    },
    index:{
      type: Number
    }
  }
}
</script>
