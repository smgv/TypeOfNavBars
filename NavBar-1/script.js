var fooBar = document.querySelector(".menu");
let flag = 1;

fooBar.addEventListener("click", function () {
    var ul = document.querySelector("ul");
    var span = document.getElementById("right");
    if (flag === 1) {
        ul.style.display = "block";
        span.style.display = "block";
        flag = 0;
    }
    else{
        ul.style.display = "none";
        span.style.display = "block";
        flag = 1;
    }
});
