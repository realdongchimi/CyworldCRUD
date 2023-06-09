function commit() {
  var titlebar = document.querySelector("#oicr").value;
  var userContent = document.querySelector("#m_txt").value;
  var uppic = document.querySelector("#picture");
  var text ="";
  
  text += "제목 : "+ titlebar + "\n내용 : " + userContent;

  var newtr = document.createElement("text");
  newtr.textContent = text;

  var footer = document.querySelector("footer");
  footer.appendChild(newtr);

  alert("작성되었습니다.")
}