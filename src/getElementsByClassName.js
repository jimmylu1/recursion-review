// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var arr = [];


  var recursiveSearch = function(node) {
    // recursively call function if there are children
    if (node.classList) {
      if (node.classList.contains(className)) {
        arr.push(node);
      }
    }
    if (node.childNodes) {
      for (let i = 0; i < node.childNodes.length; i++) {
        recursiveSearch(node.childNodes[i]);
      }
    }
  };
  recursiveSearch(document.body);
  return arr;
};
//

// You should use document.body, element.childNodes, and element.classList
