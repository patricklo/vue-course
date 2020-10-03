<template>
<div class="layout-wrapper">
  <Layout class="layout-outer">
    <Sider collapsible breakpoint="sm" reverse-arrow v-model="collapsed"></Sider>
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
export default {
data (){
  return {
    collapsed: false
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
