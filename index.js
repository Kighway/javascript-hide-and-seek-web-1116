function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function increaseRankBy(n) {
  var listItems = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = listItems.length; i < l; i++) {
    listItems[i].innerHTML = (parseInt(listItems[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  var grand = document.getElementById('grand-node')
  // return grand.children[0].children[0].children[0].children[0]
  while (true) {
    if (grand.childElementCount == 0) {
      return grand
    }
    else {
      grand = grand.children[0]
    }
  }
}
