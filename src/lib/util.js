import Cookies from 'js-cookie'
export const setTitle = (title) => {
  window.document.title = title || 'admin'
}

export const setToken = (token, tokenName) => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}

export const downloadFile = ({url, params}) => {
  const form = document.createElement('form')
  form.setAttribute('action',url)
  form.setAttribute('method','post')
  for ( const key in params){
    const input = document.createElement('input')
    input.setAttribute('type','hidden')
    input.setAttribute('name',key)
    input.setAttribute('value',params[key])
    form.appendChild(input)
  }
  document.body.appendChild(form)
  form.submit()
  form.remove()
}
