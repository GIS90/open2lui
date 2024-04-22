/**
 * Author: gao.mingliang
 * Create Time: 2022-03-04 23-07-36
 */

/**
 * @param {string} path
 * @returns {Boolean}
 * desc: 验证是否包含拓展
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} url
 * @returns {Boolean}
 * desc: 验证是否为合法URL
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 验证是否为小写
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 验证是否为大写
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 验证是否为字母
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 * desc: 验证是否为合法email
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 验证是否为字符串
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 * desc: 验证是否为数组
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 验证是否为电话
 */
export function validPhone(str) {
  const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 验证是否为excel文件格式，目前只支持.xls, .xlsx
 */
export function validExcelFile(str) {
  const fileExt = ['xls', 'xlsx']
  const fileNames = str.split('.')
  const fileSuffix = fileNames[fileNames.length - 1]
  return fileExt.includes(fileSuffix)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 获取浏览器可用的宽度，高度
 */
export function validClientHW(str) {
  const height = document.documentElement.clientHeight || 0
  const width = document.documentElement.clientWidth || 0
  return {
    'height': height,
    'width': width
  }
}

/**
 * @param {string} str
 * @param {char} char
 * @returns {Boolean}
 * desc: 验证是否包含指定的字符
 */
export function isIncludeChar(str, char) {
  // no string
  if (!str) {
    return false
  }

  return str.includes(char)
}

/**
 * @param {string} str
 * @returns {Boolean}
 * desc: 验证是否为excel文件格式，目前只支持.xls, .xlsx
 */
export function validImageFile(str) {
  const fileExt = ['jpg', 'jpeg', 'png']
  const fileNames = str.split('.')
  const fileSuffix = fileNames[fileNames.length - 1]
  return fileExt.includes(fileSuffix)
}
