<template>
<div>
  <!-- 方法1，方法2-->
  <!-- <list :list="list" :render="renderFunc"> </list> -->
  <!--
    方法3： 作用域插槽 slot
    slot-scope="count"会取代<slot>里面的属性值

  -->
  <list :list="list" :style="{color:'red'}">
    <count-to slot="slot1" slot-scope="count" :end-val="count.number"></count-to>
  </list>
</div>
</template>
<script>
import List from '_c/list'
import CountTo from '_c/count-to'
//render函数的使用
export default {
  data () {
    return {
      // list: [
      //   {name: 'lison'},
      //   {name: 'lili'}
      // ]
      list: [
        {number: 100},
        {number: 45}
      ]
    }
  },
  components: {
    List,
    CountTo
  },
  methods: {
    //方法1，使用render函数
    // renderFunc (h, name) {
    //   //自定义如何渲染list组件
    //   //同时需要获取到当前渲染的值，使用render-dom.js 函数式组件
    //   return h('i',{
    //     style:{
    //       color: 'pink'
    //     }
    //   }, name)
    // }

    //方法2，使用JSX函数 , 注意参数h 一定要写h
    renderFunc (h, number){
      return (
        //<i on-click={this.handleClick} style={{color: 'red'}}>{name}</i>
        <CountTo nativeOn-click={this.handleNativeClick} on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'red'}}> </CountTo>
      )
    },
    handleClick (event) {
        console.log("JSX: "+event)
    },
    handleEnd(){
      console.log('end!')
    },
    handleNativeClick(event){
      console.log("handleNativeClick:"+event)
    }
  }
}
</script>
