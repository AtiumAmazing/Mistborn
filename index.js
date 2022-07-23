var red = document.getElementById(red);
//let white = document.getElementById(white);
//let green = document.getElementById(green);
//let blue = document.getElementById(blue);
//let yellow = document.getElementById(yellow); 

document.addEventListener("click" , red);

function colour (e){
  e.preventDefault();
  document.body.style.backgroundColor = "#FC7272";
}

if(red){
  document.backgroundColor = "#FC7272";
}else{
  document.backgroundColor = "#F4F5DD";
}

