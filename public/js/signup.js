
const signupHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector("#signup-username");
    const passwordEl = document.querySelector("#signup-password");
    fetch("/api/user", {
      method: "post",
      body: JSON.stringify({
        username: usernameEl.value,
        password: passwordEl.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function() {
        document.location.replace("/dashboard");
      })
      .catch(err => console.log(err));
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupHandler);
  