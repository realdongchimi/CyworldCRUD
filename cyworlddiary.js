function commit() {
  var titlebar = document.querySelector("#oicr").value;
  var userContent = document.querySelector("#m_txt").value;
  var uppic = document.querySelector("#picture");
  
  var newRow = document.createElement("tr");
  var titleCell = document.createElement("td");
  var contentCell = document.createElement("td");

  titleCell.textContent = titlebar;
  contentCell.textContent = userContent;

  newRow.appendChild(titleCell);
  newRow.appendChild(contentCell);

  var diaryTableBody = document.getElementById("diaryTableBody");
  diaryTableBody.appendChild(newRow);

  alert("작성되었습니다.");
}

function deleteCommit() {
  var diaryTableBody = document.getElementById("diaryTableBody");
  var rows = diaryTableBody.getElementsByTagName("tr");

  if (rows.length === 0) {
    alert("삭제할 항목이 없습니다.");
    return;
  }

  var index = prompt("삭제할 항목의 글 번호를 입력하세요 (0부터 시작):");

  if (index === null) {
    return;
  }

  index = parseInt(index);

  if (isNaN(index) || index < 0 || index >= rows.length) {
    alert("유효하지 않은 항목입니다.");
    return;
  }

  diaryTableBody.removeChild(rows[index]);
  alert("선택한 항목을 삭제했습니다.");
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