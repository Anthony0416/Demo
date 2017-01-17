//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    nav: [{
      title: "首页"
    },{
      title: "最新"
    },{
      title: "最热"
    }],
    banner: [{
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    }],
    tap: 0,
    part: [{
      title: "年货专场",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      title: "新品上架",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      title: "包治百病",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      title: "潮表精选",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      title: "数码周边",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      title: "家居百货",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    },{
      title: "文房四宝",
      image: "../../imgs/banner.jpg",
      url: "jump/jump"
    }],
    new: [{
      title: "asjncaskjdcuasdcdfgbsdfghsdhfsdfghsgdfhkjasdf",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    }],
    hot: [{
      title: "asjncasdf",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    },{
      title: "风骚小物",
      image: "../../imgs/banner.jpg",
      url: "jump/jump",
      price: "123"
    }]
  },
  //导航切换事件
  indexNav: function (e) {
    this.setData({
      tap: e.currentTarget.id
    });
    console.log(scrollTo);
    scrollTo(0,0)
  },
  // 设置页面分享
  onShareAppMessage: function () {
    return {
      title: '玩物志',
      desc: '新生活必需品',
      path: '/page/index'
    }
  },
  // 监听页面加载并作出响应
  onLoad: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
  },
  // 监听页面加载完毕
  onReady: function () {
    wx.hideToast()
  },
  // 上拉加载数据
  onReachBottom: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    })
  }
})
