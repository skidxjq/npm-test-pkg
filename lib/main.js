module.exports = {
  add: add,
  sum: sum
}


function add(a, b) {
  return a + b
}

function sum() {
  var arg = Array.prototype.slice.call(arguments);
  var s = 0

  for (var i = 0; i < arg.length; i++) {
    s += arg[i]
  }

  return s
}
