// api.js
/**
 * 小程序后端接口配置文件
 */

var host = 'https://xyy51.cn';
/*
*域名要在小程序的管理平台配置好，
*如果出现调用时报错，无效的域名，
*可在微信开发工具左边点项目-》配置信息-》
*看一下配置的域名【request合法域名】有没有刷新下来，没有的话就点下面的刷新
*/

var config = {
  // 下面的地址配合 Server 工作
  host,

  //首页
  index: `${host}/index_all.php`,

  //协会服务
  service: `${host}/service.php`,

  //资讯中心,2.行业，3.协会，4.会员，5.政策信息
  news: `${host}/news.php?id=`,

  //资讯中心详情页
  details: `${host}/details.php?id=`,

  //网创学院信息详情
  school: `${host}/s_details.php?id=`,

  //网创学院列表schools.php
  schoolList: `${host}/schools.php`,

  //协会领导页
  leader: `${host}/personList.php?id=2`,

  //网创智库
  ideas: `${host}/personList.php?id=1`,

  //会员单位，理事单位
  member: `${host}/members.php?id=`,

  //会员单位\理事单位详情
  memberDetails: `${host}/memberDetails.php?id=`,

  //2组织架构，3分支机构，4协会指南
  about: `${host}/about.php?id=`,

  //协会简介
  user: `${host}/about.php?id=1`,

  //注册提交接口
  register: `${host}/personList.php?id=2`
};
//对外把对象config返回
module.exports = config;
