//函数式组件，只接收参数数据，并做一些响应式的操作 - 渲染
//无状态，即不监听状态，即没有所谓的生命周期以及生命周期那些hook 函数

//render可以允许用户自定义渲染方法(style等），
//但此方法比较繁琐，一般使用JSX方法
export default{
   //设functional为true，即代表没有状态的组件，也没有实例
   functional: true,
   props:{
     //name: String,
     name: Number,
     renderFunc: Function
   },
   render: (h, ctx) => {
      return ctx.props.renderFunc(h, ctx.props.name)
   }
}
