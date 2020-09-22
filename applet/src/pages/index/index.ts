// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
import $Alert from '../../wetui/base/alert/alert'
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    pickerList:[
        {
            label:'免确认',
            value:false
        },
        {
            label:'需确认',
            value:true 
        },
    ],
    current: 'tab1',
    option:[
        {
            label:'男',
            value:'man'
        },
        {
            label:'女',
            value:'wom'
        }
    ]
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
    getUserInfo(e: any) {
        console.log(e,'xxxx')
        let a:string = 'xxxx';
        console.log(a)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
        })
    },
    testClick(){
        console.log("按钮触发")
    },
    showAlert(){
        $Alert({
            type:'error',
            content:'我这是测试asdfa'
        })
    },
    handleChange (e:any) {
        console.log(e.detail)
        this.setData({
            current: e.detail.key
        });
    },
    FormData(e:any){
      console.log(e,'数据提交')
    }
})
