export function getCookieFromString(name, str) {
  var value = "; " + str;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
