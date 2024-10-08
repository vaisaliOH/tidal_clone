document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    
    if (username === "" ) {
      alert("Please fill the field.");
    } else {
      alert(`Welcome, ${username}!`);
    }
  });
  
