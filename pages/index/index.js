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
      image: "../../imgs/banner.jpg"
    },{
      image: "../../imgs/banner.jpg"
    },{
      image: "../../imgs/banner.jpg"
    },{
      image: "../../imgs/banner.jpg"
    }],
    tap: 0
  },
  //事件处理函数
  indexNav: function (e) {
    console.log(this.data.tap);
    this.setData({
      tap: e.currentTarget.id
    });
  }
})
