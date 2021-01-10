
window.addEventListener('scroll', function(){
    var mover = document.getElementById("moveImg");
    var x = window.pageYOffset;
    //max = document.body.clientHeight;
    var body = document.body,
    html = document.documentElement;
    var max = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    console.log(x, max);
    mover.style.backgroundPositionX = x / max * 100 + '%';
});
