<template>
<div class="layout-wrapper">
  <Layout class="layout-outer">
    <Sider :width="300" collapsible breakpoint="sm" reverse-arrow v-model="collapsed">
      <side-menu :collapsed="collapsed" :list="menuList"></side-menu>
    </Sider>
    <Layout>
      <Header class="header-wrapper">
        <!-- Icon 本身并没有click事件，click.native调用的是Icon组件最外层的html click事件-->
        <Icon :class="triggerClass" type="md-menu" :size="32" @click.native="handleCollapsed"/>
      </Header>
      <Content class="content-con">
        <Card shadow class="page-card">
          <router-view/>
        </Card>
      </Content>
    </Layout>
  </Layout>
</div>
</template>
<script>
import SideMenu from '@/components/side-menu'
export default {
components:{
  SideMenu
},
data (){
  return {
    collapsed: false,
    menuList: [
      {
        title: '1',
        name: 'menu1',
        icon: 'ios-alarm'
      },
      {
        title: '2',
        name: 'menu2',
        icon: 'ios-alarm'
      },
      {
        title: '3',
        name: 'menu3',
        icon: 'ios-alarm',
        children: [
          {title:'3-1', name: 'menu3-1', icon: 'ios-alarm'},
          {title:'3-2', name: 'menu3-2', icon: 'ios-alarm'},
          {title:'3-3', name: 'menu3-3', icon: 'ios-alarm', children: [
            {title: '3-3-1', name: 'menu3-3-1', icon: 'ios-alarm'}
          ]},
        ]
      },
    ]
  }
},
computed:{
  triggerClass () {
    return [
      'trigger-icon',
      this.collapsed? 'rotate' : ''
    ]
  }
},
methods:{
  handleCollapsed () {
    this.collapsed = !this.collapsed
  }
}
}
</script>
<style lang="less">
.layout-wrapper, .layout-outer{
  height: 100%;
  .header-wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgb(0, 0, 0, .1);
    padding: 0 23px;
    .trigger-icon{
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .content-con{
    padding: 10px;
  }
  .page-card{
    //calc - css3计算属性, 当没有内容时，最小高度
    //lang=less 时需要用双括号
    min-height: ~"calc(100vh - 84px)";
  }
}

</style>
