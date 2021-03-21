// open/close ���·� �����ϴ� �޼���
function setOpened() {
  var html = document.getElementById("html");
  var drawer = document.getElementById("drawer");
  var blocker = document.getElementById("blocker");
  html.classList.add("opened");
  drawer.classList.add("opened");
  blocker.classList.add("opened");
}
function removeOpened() {
  if (location.hash != "#drawer") {
    var html = document.getElementById("html");
    var drawer = document.getElementById("drawer");
    var blocker = document.getElementById("blocker");
    html.classList.remove("opened");
    drawer.classList.remove("opened");
    blocker.classList.remove("opened");
  }
}
