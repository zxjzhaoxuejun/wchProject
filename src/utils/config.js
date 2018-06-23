// api.js
/**
 * wch-dev线上版本
 * 小程序后端接口配置文件
 */

var host = 'https://sieia.org';
/*
*域名要在小程序的管理平台配置好，
*如果出现调用时报错，无效的域名，
*可在微信开发工具左边点项目-》配置信息-》
*看一下配置的域名【request合法域名】有没有刷新下来，没有的话就点下面的刷新
*/

var config = {
  // 下面的地址配合 Server 工作
  host,
  //图片路径
  img: `${host}/static`,
  //首页
  index: `${host}/index/chat/index_all`,

  //协会服务
  service: `${host}/index/chat/service`,

  //资讯中心,2.行业，3.协会，4.会员，5.政策信息
  news: `${host}/index/chat/news?id=`,

  //资讯中心详情页
  details: `${host}/index/chat/details?id=`,

  //网创学院信息详情
  school: `${host}/index/chat/s_details?id=`,

  //网创学院列表schools.php
  schoolList: `${host}/index/chat/schools`,

  //协会领导页
  leader: `${host}/index/chat/personList?id=2`,

  //网创智库
  ideas: `${host}/index/chat/personList?id=1`,

  //会员单位，理事单位
  member: `${host}/index/chat/members?id=`,

  //会员单位\理事单位详情
  memberDetails: `${host}/index/chat/memberDetails?id=`,

  //2组织架构，3分支机构，4协会指南
  about: `${host}/index/chat/about?id=`,

  //协会简介
  user: `${host}/index/chat/about?id=1`,

  //注册提交接口
  register: `${host}/index/chat/register`,

  //登录获取appid
  login: `${host}/index/chat/login?code=`
};
//对外把对象config返回
module.exports = config;
