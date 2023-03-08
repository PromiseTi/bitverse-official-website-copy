import server from '@/plugins/axios'
export default {
  $customerInformation(params) {
    return server.post('/common/add_customer_information', params)
  },
  $getUserAgreementList(params) {
    return server.get('/common/get_user_agreement_list', params)
  },
}
