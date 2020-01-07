export class Cookies {
  constructor () {
    /**
     * Utilities; useful scripts
     */
    this.cookies = {};
  }

  /**
   * Are cookies enabled?
   *
   * @return bool
   */
  isEnabled () {
    // try to grab the property
    var cookiesEnabled = !!(navigator.cookieEnabled)

    // unknown property?
    if (typeof navigator.cookieEnabled === 'undefined' && !cookiesEnabled) {
      // try to set a cookie
      document.cookie = 'testcookie'
      cookiesEnabled = ($.inArray('testcookie', document.cookie) !== -1)
    }

    // return
    return cookiesEnabled
  }

  /**
   * Read a cookie
   *
   * @return mixed
   */
  readCookie (name) {
    // get cookies
    var cookies = document.cookie.split(';')
    name = name + '='

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i]
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length)
      if (cookie.indexOf(name) === 0) return cookie.substring(name.length, cookie.length)
    }

    // fallback
    return null
  }

  setCookie (name, value, days) {
    if (typeof days === 'undefined') days = 7

    var expireDate = new Date()
    expireDate.setDate(expireDate.getDate() + days)
    document.cookie = name + '=' + escape(value) + ';expires=' + expireDate.toUTCString() + ';path=/'
  }
}
