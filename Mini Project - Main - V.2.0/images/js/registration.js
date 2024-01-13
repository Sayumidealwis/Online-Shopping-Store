
document.getElementById("password").oninput = ValidatePassword;

document.getElementById("confirm-password").oninput  = ConfirmPassword;

document.getElementById("registration-form").onsubmit = ValidateForm;

document.getElementById("show-password").onclick = function() {
    TogglePassword( document.getElementById("password"), document.getElementById("show-password"));
};

document.getElementById("show-confirm-password").onclick = function() {
    TogglePassword( document.getElementById("confirm-password"), document.getElementById("show-confirm-password"));
};