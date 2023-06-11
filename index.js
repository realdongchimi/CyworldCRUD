function myfunction() {
  var a = document.getElementById("value").value;
  document.getElementById("value2").innerHTML = a;
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
