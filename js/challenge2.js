window.addEventListener("load", function() {
   console.log(document.querySelector("#billing").value);
});

// function doesn't exist?
document.querySelector("[name = 'useBilling']").addEventListener("click", function() {
    console.log("Toggled same as above");

    if (document.querySelector("[name = 'useBilling']").checked) {
        var valueAbove = document.querySelector("#billing").value;
        document.querySelector("#home").innerHTML = valueAbove;
        document.querySelector("#home").disabled = true;
    }

    else {
        console.log("unchecked")
        document.querySelector("#home").innerHTML = "";
        document.querySelector("#home").disabled = false;
    }
});

