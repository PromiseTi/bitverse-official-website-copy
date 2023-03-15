import server from '@/plugins/axios'
export default {
  $customerInformation(params) {
    return server.post('/common/add_customer_information', params)
  },
  $getUserAgreementList(params) {
    return server.get('/common/get_user_agreement_list', params)
  },

  //国家区号列表
  $getCountryList(params) {
    return server.get('/common/get_country_list', params)
  },


  //注册验证码
  $sendRegistCode(params) {
    return server.post('/user/send_register_code', params)
  },

  //注册
  $register(params) {
    return server.post('/user/register', params)
  },

  //登录
  $login(params) {
    return server.post('/user/login_pwd', params)
  },


  //发送安全登录验证码
  $sendVerifyLoginCode(params) {
    return server.post('/user/send_login_security_code', params)
  },

  //安全登录验证
  $loginVerify(params) {
    return server.post('/user/login_security', params)
  },

  //获取币种
  $getCurrency(params) {
    return server.get('/machine/get_currency_list', params)
  },

  //获取云算力列表
  $getList(params) {
    return server.get('/goods/get_goods_cloud_hash_rate_list', params)
  },

  //获取云算力详情
  $getDetail(params) {
    return server.get('/goods/get_goods_cloud_hash_rate_detail', params)
  },

  //获取优惠券
  $getCouponList(params) {
    return server.get('/account/get_coupons_list', params)
  },

  //确认订单
  $confirmOrder(params) {
    return server.get('/order/confirm_order', params)
  },

  //生成订单支付
  $createOrderPayment(params) {
    return server.post('/order/add_order', params)
  }
}
