// todallist.onclick(event) if event.target =   ?    remove event
var stuffToDo = []
var toDo = document.getElementById('toDo');
var toDoListJ = document.getElementById('toDoList');
var theButton = document.getElementById("toDoButton");
var reButton = document.getElementById("rm");

theButton.onclick = function() {
  	var newTitleHeading = document.createElement('h1');
  	var newTextNode = document.createTextNode(toDo.value);
  	var newRmButton = document.createElement('button');
  	toDoListJ.appendChild(newTitleHeading);
  	newTitleHeading.appendChild(newTextNode);
  	newTitleHeading.appendChild(newRmButton);
  	newRmButton.innerHTML = "x";
    newRmButton.onclick = function() {
		newTitleHeading.remove();
    };
  	toDo.value = "";
};

// reButton.onclick = function() {
// 	var titlez = document.getElementsByTagName('h1');
// 	toDoListJ.removeChild(titlez[titlez.length - 1]);
// }


// ar n = 1;
// preview.src = stuffToDo[n];
// theButton.onclick = function() {
// 	alert("WORK");
// var newTitleHeading = document.createElement('h1');
//   var newTextNode = document.createTextNode(toDo.value);

//   newTitleHeading.appendChild(newTextNode);
//   img.src = stuffToDo[n];
//   toDoListJ.appendChild(img);

//   n += 1;
//   if (n === stuffToDo.length) {
//     n = 1;
//   }
// }



/* var pics = [
  'http://cuteoverload.files.wordpress.com/2014/07/meerkat-toybox.jpeg?w=385&h=253',
  'http://cuteoverload.files.wordpress.com/2014/07/dsc09212fejuly2014e.jpeg?w=280&h=186',
  'http://cuteoverload.files.wordpress.com/2014/07/dsc_0164-2.jpeg?w=280&h=186',
  'http://cuteoverload.files.wordpress.com/2014/07/dsc09297fejuly2014.jpeg?w=280&h=186',
  'http://cuteoverload.files.wordpress.com/2014/07/dsc09439fejuly2014.jpeg?w=280&h=186',
  'http://cuteoverload.files.wordpress.com/2014/07/elsa3.jpg?w=280&h=169',
  'http://cuteoverload.files.wordpress.com/2014/07/lambs-in-jackets-6.jpg?w=280&h=186',
  'http://cuteoverload.files.wordpress.com/2014/07/w.jpg?w=280&h=169',
  'http://cuteoverload.files.wordpress.com/2014/07/04_oliver-donovan.jpg?w=385&h=288',
'http://cuteoverload.files.wordpress.com/2014/07/13988229514_bd21c4d3ab_o.jpg?w=358&h=260'
];

var title = document.getElementById('title');
var theButton = document.getElementsByTagName('button')[0];
var preview = document.getElementById('preview');
var thePics = document.getElementById('thePics');
var paragraph = document.getElementById('tArea');

var n = 1;
preview.src = pics[n];
theButton.onclick = function() {
  var newTitleHeading = document.createElement('h1');
  var newTextNode = document.createTextNode(title.value);
  
  var newtAreaHeading = document.createElement('p');
  var newPNode = document.createTextNode(paragraph.value);
  
  thePics.appendChild(newTitleHeading);
  newTitleHeading.appendChild(newTextNode);
  
  thePics.appendChild(newtAreaHeading);
  newtAreaHeading.appendChild(newPNode);
  
  var img = document.createElement('img');
  img.src = pics[n];
  thePics.appendChild(img);

  n += 1;
  if (n === pics.length) {
    n = 1;
  }
  preview.src = pics[n];
};

var rm = document.getElementById('rm');
rm.onclick = function() {
  var images = document.getElementsByTagName('img');
  var titlez = document.getElementsByTagName('h1');
 var pz = document.getElementsByTagName('p'); 
 thePics.removeChild(images[images.length - 1]);
  thePics.removeChild(titlez[titlez.length - 1]);
  thePics.removeChild(pz[pz.length - 1]);
};
*/