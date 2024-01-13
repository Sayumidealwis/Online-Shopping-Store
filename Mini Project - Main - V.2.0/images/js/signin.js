
document.getElementById("password").oninput = ValidatePassword;

document.getElementById("show-password").onclick = function() {
    TogglePassword( document.getElementById("password"), document.getElementById("show-password"));
};
