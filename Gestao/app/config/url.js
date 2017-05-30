export const URL = {
  API_AUTHORIZE: 'https://apidoc.tagplus.com.br/authorize',
  make_api_authorize(response_type= 'token', client_id=''){
    return `${this.API_AUTHORIZE}?response_type=${response_type}&client_id=${client_id}`
  },

  SYSTEM_INSTALL_URL: 'https://sistema.tagplus.com.br/checkout/?app_mobile=true',
}
