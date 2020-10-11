import Mock from 'mockjs'

const Random = Mock.Random

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'Lison',
    'name|5': 'lison',
    'number|+1': 9,
    'float|9-99.2-6': 9,
    'bool|1': true,
    'boll2|1-9': true,
    'obj|2': { // 从对象中随机抽取2个元素
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'arr|2-4': [1, 2, 3], // 重复数组
    email: Random.email(),
    email2: Mock.mock('@email'), // 占位符 @
    sentence: Mock.mock('@sentence'),
    img: Mock.mock('@image')
  }

  let i = 3
  const arr = []
  while (i--) {
    arr.push(template)
  }
  return Mock.mock(arr)
}

export const login = () => {
  return {
    code: 200,
    data: {
      token: 'xxx'
    },
    mes:''
  }
}

export const authorization = () => {
  return {
    code: 200,
    data: {
      token:'xxx',
      rules: {
        page: {
          home: true,
          home_index: true,
          about: true,
          argu: true,
          count_to: false,
          menu_page: false,
          upload: true,
          form: false,
          render_page: true,
          split_pane: true,
          parent: true,
          child: true,
          named_view: true,
          store: true,
          main: true,
          icon_page: true,
        },
        component: {
          edit_button: true,
          publish_button: false
        }
      }
    },
    mes: ''
  }
}
