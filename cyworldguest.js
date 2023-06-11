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

  newtr.addEventListener("click", function () {
    var editForm = document.createElement("tr");
    var editTd1 = document.createElement("td");
    var editTd2 = document.createElement("td");
    var editTd3 = document.createElement("td");
    var editTd4 = document.createElement("td");
    var editBtn = document.createElement("button");

    editForm.appendChild(editTd1);
    editForm.appendChild(editTd2);
    editForm.appendChild(editTd3);
    editForm.appendChild(editTd4);
    editForm.appendChild(editBtn);

    editTd1.innerHTML = td1.innerHTML;
    editTd2.innerHTML = '<input type="text" value="' + td2.innerText + '">';
    editTd3.innerHTML = '<input type="text" value="' + td3.innerText + '">';
    editTd4.innerHTML = td4.innerHTML;
    editBtn.innerText = "완료";

    editBtn.addEventListener("click", function () {
      td2.innerText = editTd2.querySelector("input").value;
      td3.innerText = editTd3.querySelector("input").value;

      newtr.style.display = "table-row";
      editForm.remove();
    });

    newtr.style.display = "none";
    tbody.insertBefore(editForm, newtr.nextSibling);
  });

  tbody.appendChild(newtr);
  alert("작성되었습니다.");
}
