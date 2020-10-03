export default store => {
  console.log('store初始化了')

  // if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  // 每次commit提交mutation后，都会执行
  store.subscribe((mutation, state) => {
    console.log('mutation 提交了')
    localStorage.state = JSON.stringify(state)
  })
}
