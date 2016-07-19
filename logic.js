var arr = [];

function addNote() {

  var note = document.getElementById('note').value;
  arr.push(note);
  var index = arr.length - 1;
    var text = arr[index];
    var newElement = document.createElement('div');
    newElement.className = "addedText";
    newElement.id = "text" + index;
    var newContent = document.createTextNode(text);
    newElement.appendChild(newContent);
    var checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.id = "checkbox" + index;
    checkbox.className = 'status'
    newElement.appendChild(checkbox);
    
    var currentElement = document.getElementById('#node');
    document.body.insertBefore(newElement, currentElement); 
    document.getElementById('note').value = '';
}

