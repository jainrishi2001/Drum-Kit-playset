function handleClick(){
  alert("Someone pressed me");
}

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll("button")[i].addEventListener("click", function (){
    this.style.color="pink";

  });
}
