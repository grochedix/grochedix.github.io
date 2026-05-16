;(function () {
  var VALID =
    /^\/(404|(fr|en|nl|de)(\/(equipe|reservation))?)\/?$/

  function safeDecode(encoded) {
    try {
      return decodeURIComponent(encoded)
    } catch (e) {
      return null
    }
  }

  function isSafePath(path) {
    if (!path || typeof path !== 'string') return false
    var p = path.charAt(0) === '/' ? path : '/' + path
    var segment = p.split('?')[0].split('#')[0]
    if (segment.includes('..') || segment.includes('\\')) return false
    if (!/^\/[a-zA-Z0-9/_-]*$/.test(segment)) return false
    return true
  }

  function isValidRoute(path) {
    var segment = path.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/'
    if (segment === '/') return false
    return VALID.test(segment)
  }

  function go404(base) {
    location.replace(base + '/404')
  }

  var params = new URLSearchParams(location.search)
  var fromQuery = params.get('p')
  var stored = null
  try {
    stored = sessionStorage.getItem('gh-spa-path')
  } catch (e) {}

  var raw = fromQuery != null ? fromQuery : stored
  if (!raw) return

  try {
    sessionStorage.removeItem('gh-spa-path')
  } catch (e) {}

  var rest = safeDecode(raw)
  var base = location.pathname.replace(/\/$/, '') || '/'

  if (!rest || !isSafePath(rest)) {
    go404(base)
    return
  }

  if (!rest.startsWith('/')) rest = '/' + rest

  if (!isValidRoute(rest)) {
    go404(base)
    return
  }

  params.delete('p')
  var search = params.toString()
  var path = rest === '/' ? base + '/' : base + rest
  var url = path + (search ? '?' + search : '') + location.hash
  history.replaceState(null, '', url)
})()
