window.addEventListener("load", function() {
    window.alert(document.querySelectorAll("figcaption")[1].innerHTML)
 });

thumbnails = document.querySelectorAll(".thumbnail");
for (var index = 0; index < thumbnails.length; index++) { 
    thumbnails[index].tabIndex = 0;
    thumbnails[index].addEventListener("mouseover", function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')";
        document.querySelector("#display").innerHTML = this.alt;
        this.style.visibility = "hidden";
    }); 

    thumbnails[index].addEventListener("mouseleave", function() {
        document.querySelector("#display").style.backgroundImage = "";
        document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text.";
        this.style.visibility = "visible";
    });

    // focus not working
    thumbnails[index].addEventListener("focus", function() {
        document.querySelector("#display").style.backgroundImage = "url('" + this.src + "')";
        document.querySelector("#display").innerHTML = this.alt;
        this.style.position = "relative";
        this.style.left = "10000px";
    });

    thumbnails[index].addEventListener("focusout", function() {
        document.querySelector("#display").style.backgroundImage = "";
        document.querySelector("#display").innerHTML = "Hover over an image below to display the image and the alt text.";
        this.style.position = "default";
        this.style.left = "0px"
    });
}
