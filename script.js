function showSignup() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
  }
  
  function showLogin() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
  }
  
  function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
  
    // You can later validate this with Firebase
    // For now, just go to dashboard
    window.location.href = "dashboard.html";
  }
  
  
  function signup() {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    // For now just show alert
    alert(`Account created for ${email}\nYou can now login.`);
    showLogin(); // switch to login after signup
  }
  