import moment from 'moment'

export const sortStringVN = (array, attr, sort) => {
  return array.sort((a, b) => {
    return sort === 'asc' ? a[attr].localeCompare(b[attr]) : b[attr].localeCompare(a[attr])
  })
}

export const toHalfWidthNoSpace = (text) => {
  if (text) {
    let dbcText = ''
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i)
      if (c === 12288 || c === 32) {
        continue
      }
      if (c > 65280 && c < 65375) {
        dbcText += String.fromCharCode(c - 65248)
        continue
      }
      dbcText += String.fromCharCode(c)
    }
    return dbcText
  }
  return text
}

export const toHalfWidth = (str) => {
  return str.replace(/[！-～]/g, r => String.fromCharCode(r.charCodeAt(0) - 0xFEE0))
}

export const stripHtml = (html) => {
  const tmp = document.createElement('DIV')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}

export const removeVietnameseTones = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\'|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ')
  return str
}

export function formatNumber(str) {
  if (str) {
    str = str.toString().replace(/[^0-9]/g, '')

    return str
  }
  return ''
}

export function formatNumberDouble(str) {
  if (!str || str === '.') return ''
  str = str.toString().replace(/[^0-9\.]/g, '')
  str = str.length && str[str.length - 1] === '.' && (str.match(/\./g) || []).length === 1 ? str : (str = str.replace(/^\.+|\.+$/gm, ''), parseFloat(str))
  return str
}

export function formatDateFilter(timeRange) {
  if (timeRange && timeRange.length) {
    const format = 'DD/MM/YYYY'
    const min = timeRange[0] ? moment(timeRange[0]).format(format) : ''
    const max = timeRange[1] ? moment(timeRange[1]).format(format) : ''
    return min ? JSON.stringify({ min, max }) : ''
  }
  return ''
}

export const getShortcutName = (str) => {
  if (str) {
    const matches = str.match(/\b(\w)/g)
    if (matches && matches.length === 1) {
      return matches[0].toUpperCase()
    }
    if (matches && matches.length > 1) {
      return [matches[0], matches[matches.length - 1]].join('').toUpperCase()
    }
  }
  return ''
}

export const getColorShortcutName = (charac) => {
  const list = {
    A: '#7879F1',
    B: '#FFB05B',
    C: '#7879F1',
    D: '#FFB05B',
    E: '#7879F1',
    F: '#FFB05B',
    G: '#7879F1',
    H: '#FFB05B',
    I: '#7879F1',
    J: '#FFB05B',
    K: '#7879F1',
    L: '#FFB05B',
    M: '#7879F1',
    N: '#FF7875',
    O: '#33C963',
    P: '#FF7875',
    Q: '#33C963',
    R: '#FF7875',
    S: '#33C963',
    T: '#FF7875',
    U: '#33C963',
    V: '#33C963',
    W: '#33C963',
    X: '#FF7875',
    Y: '#33C963',
    Z: '#33C963'
  }
  return charac ? (list[charac] || '#7879F1') : '#33C963'
}

export const convertBreak = (text) => {
  return text ? text.replace(/(?:\r\n|\r|\n)/g, '<br>') : ''
}

export function getAttrParam(params, attr) {
  const ob = {}
  for (const key in params) {
    ob[key] = params[key][attr]
  }
  return ob
}

export function addAttrMessage(params, validates) {
  for (const key in params) {
    if (validates[key]) {
      params[key].message = validates[key].join(', ')
    }
  }
  return params
}

export function formatDateVN(date) {
  const format = 'DD/MM/YYYY'
  return date ? moment(date).format(format) : ''
}

export function convertDateTime(date) {
  const format = 'DD/MM/YYYY HH:mm'

  return date ? moment.utc(date, format).local().format(format) : ''
}

export function getTimeStamp(date) {
  return date ? moment(date, 'DD/MM/YYYY').unix() : ''
}

export function randomString() {
  return (Math.random() + 1).toString(36).substring(7)
}

export async function getFileFromUrl(url, name, defaultType = 'image/jpeg') {
  const response = await fetch(url)
  const data = await response.blob()
  return new File([data], name, {
    type: response.headers.get('content-type') || defaultType
  })
}
export function groupArrayOfObjectsByDate(list, key, dateFormat) {
  return list.reduce(function(rv, x) {
    (rv[moment(x[key]).format(dateFormat)] = rv[moment(x[key]).format(dateFormat)] || []).push(x)
    return rv
  }, {})
};

export function textToHref(text) {
  return '#' + text.toLowerCase().replace(/ /g, '-')
}

export function textToSlug(text) {
  return text.toLowerCase().replace(/ /g, '-')
}

export function formatPrice(value) {
  if (value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
}
