window.addEventListener("load", function() {
	console.log("Page loaded");
    document.querySelector("h1").style.color = "#6E3DFF";
    document.querySelector("h1").style.fontStyle = "Cursive";
    document.querySelector("h1").style.textAlign = "center";
});

window.addEventListener("dblclick", function() {
    window.alert(Date());
});

document.querySelector("#toggle").addEventListener("click", function() {
    console.log("Toggled email field")

    if (document.querySelector("#toggle").checked) {
        document.querySelector("#emailBox").style.display = "block"
    }

    else {
        document.querySelector("#emailBox").style.display = "none"
    }
});

