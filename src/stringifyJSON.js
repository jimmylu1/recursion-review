// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
// Receives JS object
// Need to convert to String
var stringifyJSON = function(obj) {
  // Identify object type
  // If array
  // Add string with '[' + val + ']'
  // Recursively call stringifyJSON
  // If object
  // Add string with '{' + val + '}'
  // Recursively call stringifyJSON
  // Else
  // Return value.toString()
  var str = '';
  var arr = [];

  if (typeof obj !== 'object' || !obj) {
    if (obj === null) {
      return 'null';
    } else if (typeof obj === 'string') {
      return '"' + obj + '"';
    } else {
      return obj.toString();
    }
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    }

    for (var i = 0; i < obj.length; i++) {
      arr.push(stringifyJSON(obj[i]));
    }

    return '[' + arr.join(',') + ']';

  } else if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0 && obj.constructor === Object) {
      return '{}';
    }

    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        var value = stringifyJSON(obj[key]);
        arr.push('"' + key + '"' + ':' + value);
      }
    }
    return '{' + arr.join(',') + '}';
  }
};
