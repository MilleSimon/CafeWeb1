var loginDiv = document.getElementById("login");
var locationDiv = document.getElementById("location");

function loginSubmit()
{
    if (document.getElementById("loginUsername").value.length === 0)
    {
        loginDiv.getElementsByClassName("hiddenText")[0].removeAttribute("hidden");
        return;
    }

    if (document.getElementById("loginPassword").value.length === 0)
    {
        loginDiv.getElementsByClassName("hiddenText")[0].removeAttribute("hidden");
        return;
    }

    loginDiv.setAttribute("style", "Display: none;");
    locationDiv.removeAttribute("style");
    document.getElementById("loginTab").classList.remove("w3-red");
    document.getElementById("locationTab").classList.add("w3-red");
}