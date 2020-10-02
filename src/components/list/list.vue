<template>
  <ul>
    <li v-for="(item,index) in list" :key="`item_${index}`">
      <!--方法1， -->
      <!-- <span v-if="!render">
        {{ item.number }}
      </span> -->
      <!-- 方法2 JSX -->
      <!-- <render-dom v-else :render-func="render" :name="item.number"></render-dom> -->
      <!--//方法3 作用域插槽 -->
      <slot name="slot1" :number="item.number"></slot>
    </li>
  </ul>
</template>
<script>
import RenderDom from '_c/render-dom'
export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {

      }
    }
  }
}
</script>
