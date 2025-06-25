function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "204sw" && password === "204") {
    window.location.href = "main.html";
  } else {
    document.getElementById('error').innerText = "❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
}
