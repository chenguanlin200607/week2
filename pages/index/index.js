Page({
  data: {
  job: [],
  jobList: [],
  id: '',
  isClick: false,
  jobStorage: [],
  jobId: ''
  },
  haveSave(e) {
  if (!this.data.isClick == true) {
   let jobData = this.data.jobStorage;
   jobData.push({
   jobid: jobData.length,
   id: this.data.job.id
   })
   wx.setStorageSync('jobData', jobData);//设置缓存
   wx.showToast({
   title: '已收藏',
   });
  } else {
   wx.showToast({
   title: '已取消收藏',
   });
  }
  this.setData({
   isClick: !this.data.isClick
  })
  }
 })