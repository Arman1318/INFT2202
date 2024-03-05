$(document).ready(function() {
    $("#loginBtn").on("click", function() {
        var username = $("#username").val();
        var newListItem = $("<li>").addClass("nav-item nav-link").text(username);
        $("#loginLogout").before(newListItem);
        $("#username").val("");
        $("#password").val("");
    });
});
