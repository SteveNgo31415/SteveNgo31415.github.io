function myFunction9() {
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo38").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo37").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo36").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo35").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo34").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo33").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo32").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo31").innerHTML = x;
}

function myFunction8() {
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo30").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo29").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo28").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo27").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo26").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo25").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo24").innerHTML = x;
}

function myFunction7() {

    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo23").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo22").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo21").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo20").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo19").innerHTML = x;
}

function myFunction6() {
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo14").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo15").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo16").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo17").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo18").innerHTML = x;
}

function myFunction5() {
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo10").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo11").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo12").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo13").innerHTML = x;
}

function myFunction4() {
    var x = Math.floor((Math.random() * 1000 * 100000000000) + 1);
    document.getElementById("demo6").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 100000000000) + 1);
    document.getElementById("demo7").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 100000000000) + 1);
    document.getElementById("demo8").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 100000) + 1);
    document.getElementById("demo39").innerHTML = x;
}

function myFunction3() {
    var x = Math.floor((Math.random() * 1000 * 10000000000000) + 1);
    document.getElementById("demo4").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 1000000000000) + 1);
    document.getElementById("demo5").innerHTML = x;
}

function myFunction2() {
    var x = Math.floor((Math.random() * 1000 * 1000000000) + 1);
    document.getElementById("demo2").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 1000000000) + 1);
    document.getElementById("demo3").innerHTML = x;
}

function myFunction1() {
    var x = Math.floor((Math.random() * 1000 * 100000) + 1);
    document.getElementById("demo").innerHTML = x;
    var x = Math.floor((Math.random() * 1000 * 100000) + 1);
    document.getElementById("demo1").innerHTML = x;
}
var seconds = 180,
    countDiv = document.getElementById('countdown'),
    secondPass,
    countDown = setInterval(function() {
        "use strict";
        secondPass();
    }, 1000);

function secondPass() {
    "use strict";
    var minutes = Math.floor((seconds / 60)),
        remSeconds = seconds % 60;
    if (seconds < 10) {
        remSeconds = "0" + remSeconds;
    }
    countDiv.innerHTML = minutes + ":" + remSeconds;
    if (seconds > 0) {
        seconds = seconds - 1;
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = 'Done';
    }
}
jQuery(document).ready(function($) {
    if ($(".btn-top").length > 0) {
        $(window).scroll(function() {
            var e = $(window).scrollTop();
            if (e > 300) {
                $(".btn-top").show()
            } else {
                $(".btn-top").hide()
            }
        });
        $(".btn-top").click(function() {
            $('body,html').animate({
                scrollTop: 0
            })
        })
    }
});
$('.yes').click(function() {
    var audio = new Audio('../sound/tick.mp3');
    audio.play();
})