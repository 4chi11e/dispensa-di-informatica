window.addEventListener("scroll", function () {
    var el = document.getElementById("tornasu");
    // console.dir(el);
    if (window.pageYOffset > 200) {
        el.style.display = "block";
    } else if (window.pageYOffset < 200) {
        el.style.display = "none";
    }

    // val[0].innerHTML = "PageYOffset = " + window.pageYOffset;

    // $("a[href='#top']").click(function() {
    //     $("html, body").animate({ scrollTop: 0 }, 2000);
    //     return false;
    // });
}, !1);

window.addEventListener("beforeprint", function(event) { 
    var el = document.getElementById("tornasu");
    el.style.display = "none";
});

window.addEventListener("afterprint", function(event) { 
    var el = document.getElementById("tornasu");
    el.style.display = "block";
});
