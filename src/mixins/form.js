/**
 * @File: form 验证 Mixin
 * @Author: wush
 */
import wepy from 'wepy';

export default class FormMixin extends wepy.mixin {
  data = {
    form: {
      $invalidMsg: '', // 显示的提示错误信息
      $dirty: false // 输入值是否发生变化
    },
    focus: '',
    msg: ''
  };

  methods = {
    bindFocus(e) {
      const name = e.currentTarget.dataset.name;
      this.focus = name;
      console.log(e);
    },

    validate(e) {
      this[e.currentTarget.dataset.name] = e.detail.value;
      Validators.validate(e, this);
      this.msg = this.form.$invalidMsg;
    },

    clear(e) {
      this[e.currentTarget.dataset.name] = '';
    }
  };

  beforeSubmitValidation(requiredInput) {
    Validators.validateRequired([...requiredInput], this);
    if (this.form.$invalidMsg.trim()) {
      this.msg = '';
      setTimeout(() => {
        this.msg = this.form.$invalidMsg;
        this.$apply();
      });
      return true;
    }
    return false;
  }
}
