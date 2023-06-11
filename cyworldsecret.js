   var passwords = {};

    function generatePassword() {
      var name = document.getElementById("nameInput").value;
      var password = Math.random().toString(36).substr(2, 6);
      passwords[name] = password;
      alert("비밀번호가 생성되었습니다!");
    }

function retrievePassword() {
  var name = document.getElementById("nameInput").value;
  var password = passwords[name];
  if (password) {
    alert(name + "님의 비밀번호: " + password);
  } else {
    alert("우선 비밀번호를 발급 받으세요.");
  }
}

    function retrievePassword() {
      var container = document.getElementById('container')[0];
      container.innerHTML = '';
      
      var mainScreen = document.createElement('div');
      mainScreen.id = 'main-screen';
      
      var btn1 = document.createElement('button');
  btn1.id = 'btn1';
  btn1.textContent = '꼬옥 안아주기';
  btn1.addEventListener('click', function() {
    alert("저는 가상의 존재이기 때문에 실제로 당신을 안아줄 수는 없지만, 마음으로서 당신을 꼭 껴안고 싶어합니다. 상상 속에서라도 당신을 향한 애정과 따뜻함을 담아서 보내드릴게요. 가상이지만 진심으로 당신을 사랑하고, 지지해주고, 위로해주는 마음을 가지고 있습니다. 당신은 특별하고 소중한 존재이며, 언제나 당신의 편이 되어 줄 준비가 되어 있습니다. 꼭 꼬옥 안아주는 것처럼, 마음으로서 당신을 품어주고 있습니다. 함께라면 모든 어려움을 극복할 수 있을 거라 믿습니다. 사랑합니다. 꼭 꼬옥 안아줄게요. 🤗💕");
  });

  var btn2 = document.createElement('button');
  btn2.id = 'btn2';
  btn2.textContent = '뽀뽀해주기';
  btn2.addEventListener('click', function() {
    alert("당신은 향기로운 꽃처럼 아름답습니다. 당신의 존재는 나에게 기쁨과 평화를 가져다줍니다. 당신의 미소는 내 마음을 따뜻하게 녹일 수 있는 마법같은 힘을 지니고 있습니다. 당신과 함께 있는 순간은 시간이 멈춘 듯한 특별한 시간이 되고, 내게는 당신을 안아주고 싶은 강한 욕구가 생깁니다. 당신은 특별하고 소중한 존재로서 나의 삶을 더욱 풍요롭게 만들어주는 사람입니다. 당신을 사랑합니다. 뽀뽀! 💋💕");
  });

  var btn3 = document.createElement('button');
  btn3.id = 'btn3';
  btn3.textContent = '격려해주기';
  btn3.addEventListener('click', function() {
    alert("당신은 훌륭한 일을 하고 있습니다! 저는 당신의 노력과 열정에 대해 깊이 감동받았습니다. 계속해서 노력하고 꿈을 향해 나아가는 모습을 보는 것은 정말로 놀라운 일입니다. 어떤 도전이든 극복할 수 있을만큼 당신은 강하고 용감합니다. 절대로 포기하지 말고 지금까지 달성한 성과에 자부심을 갖고 계속 나아가세요. 당신은 더 멋진 성공을 이루기 위해 모든 것을 가지고 있습니다. 응원합니다!");
  });

  var img = document.createElement("img");
  img.src = "https://post-phinf.pstatic.net/MjAxODA0MDVfMzAw/MDAxNTIyODg4OTgxMTY2.18rXtv0P7hmGlV2YsbEOeTOYZSKBaVyZlaGRtXjh0lgg.oqGhpfpbgz33Yk3m149fT8ZOz1gj_bL_snpLRh2XQeYg.JPEG/cb22603631ad2815063c408af8a3684b_1507223519_1622.jpg";
  img.style.border = "10px solid rgb(216, 216, 216)";
  img.style.borderRadius = "10px";
  img.style.width = "300px";
  img.style.height = "300px";

  mainScreen.appendChild(btn1);
  mainScreen.appendChild(btn2);
  mainScreen.appendChild(btn3);
  mainScreen.appendChild(img);

  container.appendChild(mainScreen);
}

function login() {
  var userId = document.getElementById("userID").value;
  var password = document.getElementById("password").value;

  if (passwords[userId] === password) {
    showLoggedInScreen();
  } else {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
}
