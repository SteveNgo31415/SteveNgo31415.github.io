$(window).scroll(function () {
    var s = $(window).scrollTop();
    var d = $(document).height();
    // var c = $(window).height();
    var c = window.innerHeight;
    var scrollPercent = (s / (d - c)) * 100;
    var position = scrollPercent;
    console.log("document " + d);
    console.log("window " + c);
    console.log(position);
    $("#progressbar").attr('value', position);
});

    