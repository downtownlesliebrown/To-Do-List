function generateList() {
  var inputListElement = document.getElementById('list-values');
  var listValues = inputListElement.value;
  var listValuesArray = listValues.split(',');
  var unorderedListElement = document.createElement('ul');
  var displayDiv = document.getElementById('display-list');

  for (var i = 0; i < listValuesArray.length; i++) {
    var listItemElement = document.createElement('li');
    listItemElement.innerText = listValuesArray[i];
    listItemElement.addEventListener("click", function (event) {
        console.log(event);
        crossOffItem(event.target);
    });
    unorderedListElement.appendChild(listItemElement);
  }
  displayDiv.appendChild(unorderedListElement);
  inputListElement.value = '';
}

function crossOffItem(element) {
  console.log(element);
  var classArray = element.className.split(' ');
  var index;
  for (var i = 0; i < classArray.length; i++) {
    if (classArray[i] === 'cross-off') {
      index = i;
      break;
    }
  }
  if (!index) {
    classArray.splice(index, 1);
  } else {
    classArray.push('cross-off');
  }
  element.className = classArray.join(' ');
}
