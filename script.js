var a;
function save() {
    //get value from input field and save as "a"
    a = document.getElementById("name").value;
    document.getElementById("name").value="";
    //create LS key with valueo of "a"
    localStorage.setItem("username",a);
    //automatiicaly take user to page two.html
    location.href="two.html";
}

function getUser() {
    var b = localStorage.getItem("username");
    document.getElementById("placeholder").innerHTML = "Hello " + b;
}
