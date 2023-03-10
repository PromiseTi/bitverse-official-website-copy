import waves from '@/directive/waves/index.js'
export default {
  data() {
    return {
      // errList: {
      //   200: 'Success',
      //   500: 'Fail',
      //   555: 'No right to operate',
      //   669: 'The SMS is sent too fast, please try again in 1 day',
      //   670: 'The SMS is sent too fast, please try again in 1 hour',
      //   671: 'The SMS is sent too fast, please try again in 1 minute',
      //   10000: 'Login expired',
      //   10001: 'Parameter error',
      //   10002: 'The account does not exist or the password is wrong',
      //   10003: 'Country does not support',
      //   10004: 'Wrong phone number',
      //   10005: 'Verification too frequently',
      //   10006: 'Verification code error',
      //   10007: 'Verification code expired',
      //   10008: 'Account error',
      //   10009: 'Account occupation',
      //   10010: 'Wrong invitation code',
      //   10011: 'Authorization code expired',
      //   10012: 'Account does not exist',
      //   10013: 'Pending order cannot be deleted',
      //   10014: 'wrong password',
      //   10015: 'Mailbox is already occupied',
      //   10016: 'Email has been bound',
      //   10017: 'The phone number has been taken',
      //   10018: 'Mobile phone number has been bound',
      //   10019: 'The invitation code is bound',
      //   10020: 'Transaction password has been set',
      //   10021: 'Insufficient balance',
      //   10022: 'Incorrect transaction password',
      //   10023: 'Less than the minimum withdrawal amount',
      //   10024: 'Exceeded the maximum number of withdrawals',
      //   10025: 'Exceeds the maximum daily withdrawal limit',
      //   10026: 'File upload failed',
      //   10027: 'The order has been paid or cancelled and cannot be cancelled',
      //   10031: 'Bichain disabled',
      //   10032: 'Update failed',
      //   10033: 'It is in safe time and cannot be withdrawn',
      //   10034: 'Commodity prices have changed',
      //   10035: 'Your withdrawal address is wrong, please reconfirm the input',
      //   10036: 'Only the data of the last two years can be selected',
      //   10037: 'Time format is abnormal',
      //   10038: 'No data',
      //   10039: 'Please try again later',
      //   10040: 'Incorrect wallet address format',
      //   10041: 'Mailbox is already occupied',
      //   10042: 'The order is pending payment, please try again after payment',
      //   10043: 'Commodity does not support pledge',
      //   10044: 'Please do not submit the pledge repeatedly',
      //   10045: 'Electricity payment address is already occupied',
      //   10046: 'Incorrect order status',
      //   10047: 'There is an unpaid order, please try again after payment',
      //   10048:
      //     'You have electricity bills in arrears, please recharge and then withdraw',
      //   10049: 'Abnormal withdrawal accuracy',
      //   10050: 'Duplicate wallet address',
      //   20001: 'Update failed',
      //   20002: 'Order exception',
      //   20003:
      //     'You have an unpaid order, please cancel the order before placing the order',
      //   20004: 'Inventory shortage',
      //   20005: 'Commodity prices have changed',
      //   20006: 'Goods have been removed',
      // },
    }
  },
  computed: {},
  methods: {
    goLink(url, type = '_blank') {
      window.open(url, type)
    },
    errSpringFrame(message, title = 'Error', routeName = '', pcMa = '') {
      if (!window.alertIsShow) {
        this.$alert({
          title,
          content: message,
          isAlret: true,
          routeName,
          pcMa,
        })
        window.alertIsShow = true
      }
    },
    succesIng() {
      // this.$message.success('Verification code sent successfully')
      this.isDisable = true
      this.timer = setInterval(() => {
        this.countdown--
        if (this.countdown <= 0) {
          clearInterval(this.timer)
          this.isDisable = false
          this.countdown = 90
        }
      }, 1000)
    },
  },
  created() {},
  mounted() {},
  directives: {
    waves,
  },
}
