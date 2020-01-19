/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {
  let ti = 0
  let tmp = 0
  for (let i = 0; i < s.length; i++) {
    if ((tmp = chk(t, ti, s.charAt(i))) === -1) {
      return false
    } else {
      ti = tmp + 1
    }
  }

  return true
}

function chk(str, start, target) {
  let idx = start
  for (let i = start; i < str.length; i++) {
    if (str.charAt(i) === target) {
      return i
    }
  }
  return -1
}
