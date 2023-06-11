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

  alert("작성되었습니다.");
}


function search() {
  var word = document.getElementById("searchword").value;
  var google = ["구글", "google", "Google", "GOOGLE"];
  var naver = ["네이버", "naver", "Naver", "NAVER"];
  var daum = ["다음", "Daum", "daum", "DAUM"];

  if (google.includes(word)) {
    window.location.href = "http://google.com";
  } else if (naver.includes(word)) {
    window.location.href = "http://naver.com";
  } else if (daum.includes(word)) {
    window.location.href = "http://daum.net";
  }
    alert("잠시만 기다려주세요..");
}