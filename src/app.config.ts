export default {
  pages: [
    'pages/index/index',
    'pages/mine/mine'
  ],
  tabBar: {
    borderStyle: 'black',
    position: 'bottom',
    list: [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "pagePath": "pages/mine/mine",
        "text": "我的"
      }
    ]
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置将用于小程序位置接口的效果展示'
    }
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  }
}
