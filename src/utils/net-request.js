import wepy from 'wepy';
/**wx.request服务封装 */
export class RequestService {
  /**
   * create by wq
   * info 错误信息
   * callBack 回调函数
   * errTip 自定义错误信息
   */
  static httpHandlerError(info, callBack, errTip) {
    /**请求成功，退出该函数 */
    if (
      (info.statusCode >= 200 && info.statusCode <= 207) ||
      info.statusCode === 304
    ) {
      wepy.hideLoading();
      return false;
    } else {
      /**401 没有权限时，重新登录 */
      if (info.statusCode === 401) {
        wepy.redirectTo({
          url: 'index'
        });
      }
      /**判断是否有自定义错误信息，如果有，优先使用自定义错误信息，其次曝出后台返回错误信息 */
      let errorInfo = '';
      if (errTip) {
        errorInfo = errTip;
      } else {
        if (info.data.message) {
          errorInfo = info.data.message;
        } else {
          errorInfo = '服务器睡觉了!';
        }
      }
      wepy.showToast({
        title: errorInfo,
        icon: 'loading',
        duration: 3000
      });
      /**发生错误信息时，如果有回调函数，则执行回调 */
      if (callBack) {
        callBack();
      }
      return true;
    }
  }
  /**
   * create by wq
   *请求封装
   *method 请求方式
   *reqData 发送请求数据
   *reqUrl 请求路径
   *failFn 请求失败，执行该函数
   *sucFn 请求成功，执行该函数
   */
  static netRequest(method, reqData, reqUrl, failFn, sucFn) {
    wepy
      .request({
        /**header 如果需要验证token 可封装另外的getHeaders函数获取本地缓存token */
        // header: this.getHeaders(),
        header: {
          'content-type': 'application/json'
        },
        data: reqData,
        url: reqUrl,
        method: method
      })
      .then(res => {
        let error = this.httpHandlerError(res, failFn);
        if (error) return;
        sucFn(res);
      });
  }
}
