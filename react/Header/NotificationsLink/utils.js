export function getCookie(name) {
  if (typeof document === 'undefined') {
    return null;
  }
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
