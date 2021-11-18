function rotate_down() {
  var TR = document.getElementsByClassName("cube")[0];
  TR.style.transform = "rotateX(90deg)";
}
function rotate_left_1() {
  var TR = document.getElementsByClassName("cube")[0];
  TR.style.transform = "rotateY(90deg)";
}
function rotate_right_1() {
  var TR = document.getElementsByClassName("cube")[0];
  TR.style.transform = "rotateY(-90deg)";
}
function rotate_left_2() {
  var TR = document.getElementsByClassName("cube")[0];
  TR.style.transform = "rotateY(0)";
}
function rotate_right_2() {
  var TR = document.getElementsByClassName("cube")[0];
  TR.style.transform = "rotateY(0)";
}
function rotate_up() {
  var VR = document.getElementsByClassName("cube")[0];
  VR.style.transform = "rotateX(360deg)";
  VR.style.transform = "rotateY(0deg)";
}
