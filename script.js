$(document).ready(function(){
    let docWidth = $('body').width(),
    $wrap = $('#wrap'),
    $images = $('.wrap .block'), 
    slidesWidth = $wrap.width(); 

    $(window).on('resize', function(){
        docWidth = $('body').width();
        slidesWidth = $wrap.width();
    })

    $(document).mousemove(function(e){
        let mouseX = e.pageX,
        offset = mouseX / docWidth * slidesWidth - mouseX / 2;

        $images.css({
            '-webkit-transform': 'translate3d(' + -offset + 'px, 0, 0)',
            'transform': 'translate3d(' + -offset + 'px, 0, 0)'
        });
    });
})

var tl = gsap.timeline({paused: true});

TweenMax.from(".logo", 0.5, {
    opacity: 0,
    y: 10,
    delay: 1
});

TweenMax.from(".menu", 0.5, {
    opacity: 0,
    y: 10,
    delay: 1.2
});

TweenMax.from(".title", 2, {
    opacity: 0,
    delay: 1.4
});

TweenMax.from(".tagline", 3, {
    opacity: 0,
    delay: 1.6
});

TweenMax.from(".morebeer", 0.5, {
    opacity: 0,
    y: 4,
    delay: 1.6
});

tl.to(".beers", 1,{
    autoAlpha: 1
});


tl.from(".one", 0.5, {
    opacity: 0,
    y: 20,
    delay: 0.1
},"-=1");

tl.from(".two", 0.5, {
    opacity: 0,
    y: 20,
    delay: 0.3
},"-=1");

tl.from(".three", 0.5, {
    opacity: 0,
    y: 20,
    delay: 0.5
},"-=1");

tl.from(".four", 0.5, {
    opacity: 0,
    y: 20,
    delay: 0.7
},"-=1");

tl.from(".five", 0.5, {
    opacity: 0,
    y: 20,
    delay: 0.9
},"-=1");

tl.from(".six", 0.5, {
    opacity: 0,
    y: 20,
    delay: 1.1
},"-=1");

tl.reverse();
$(document).on("click", ".morebeer", function() {
    tl.reversed(!tl.reversed());
});

tl.reverse();
$(document).on("click", "a", function() {
    tl.reversed(!tl.reversed());
});

$(document).on("click", ".close-btn", function() {
    tl.reverse();
});