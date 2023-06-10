function tableWrite() {
  var userName = document.querySelector("#username").value;
  var userContent = document.querySelector("#content").value;
  var tbody = document.querySelector("tbody");
  var userDate = new Date();

  var year = userDate.getFullYear();
  var month = userDate.getMonth() + 1;
  var date = userDate.getDate();
  var hours = String(userDate.getHours()).padStart(2, "0");
  var minutes = String(userDate.getMinutes()).padStart(2, "0");

  var newtr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");

  td1.innerText = tbody.rows.length;
  td2.innerText = userName;
  td3.innerText = userContent;
  td4.innerText = `${year}-${month}-${date} ${hours}:${minutes}`;

  newtr.append(td1);
  newtr.append(td2);
  newtr.append(td3);
  newtr.append(td4);
  tbody.appendChild(newtr);

  alert("작성되었습니다.")
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