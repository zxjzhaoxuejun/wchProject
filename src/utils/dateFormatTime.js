/* eslint-disable prefer-template */

/**
 * yyyy-MM-dd HH:mm:ss
 * @param {(string|Date)} input Date | string
 * @return {string} yyyy-MM-dd HH:mm:ss
 */
export function formatDateTime(input) {
  const pad = num => (num < 10 ? '0' + num : num);
  // disable check
  const date = new Date(input);
  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    ' ' +
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds())
  );
}

/**
 * yyyy-MM-dd
 * @param  {(Date|string)} input Date | string
 * @returns {string} yyyy-MM-dd
 */
export function formatDate(input) {
  const pad = num => (num < 10 ? '0' + num : num);
  // disable check
  const date = new Date(input);
  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate())
  );
}

/**
 * 根据毫秒数，输出倒计时，如03:25:19 86
 * @param {number} microSecond 毫秒数
 * @returns {string} 秒数
 */
export function formatCountdown(microSecond) {
  const second = Math.floor(microSecond / 1000);
  const hr = Math.floor(second / 3600);
  const min = fillZeroPrefix(Math.floor((second - hr * 3600) / 60));
  const sec = fillZeroPrefix(second - hr * 3600 - min * 60); // equal to => var sec = second % 60;
  // const microSec = fillZeroPrefix(Math.floor((microSecond % 1000) / 10));
  // console.log(`${hr}:${min}:${sec} ${microSec}`);

  return sec;
}

/**
 * 个位数时，补零
 * @param {any} num 数字
 * @returns {string} 格式化字符串
 */
function fillZeroPrefix(num) {
  return num < 10 ? `0${num}` : num.toString();
}
