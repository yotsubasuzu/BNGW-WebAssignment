//carousel auto and click
jQuery('#camera_wrap').camera({
    alignment:'center',
    autoAdvance:true,
    mobileAutoAdvance:true,
    barDirection:'leftToRight',
    barPosition:'bottom',
    cols: 6,
    easing:'linear',
    // mobileEasing:'',
    // 'random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight'
    //you can also use more than one effect, just separate them with commas: 'simpleFade, scrollRight, scrollBottom'
    fx:'random',
    mobileFx:'',
    width:'98.7%',
    minHeight: '200px',
    navigation: true,
    navigationHover: true,
    mobileNavHover: true,

    // the path to the image folder (it serves for the blank.gif, when you want to display <a href="https://www.jqueryscript.net/tags.php?/video/">video</a>s)
    imagePath:'images/',
    hover:true,
    //loader
    loader: 'pie',
    loaderColor: '#eeeeee',
    loaderBgColor: '#222222',
    loaderOpacity: .8,//0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1
    loaderPadding: 2,
    loaderStroke: 7,
    pieDiameter: 38,
    piePosition: 'rightTop', //'rightTop', 'leftTop', 'leftBottom', 'rightBottom'
    opacityOnGrid: false,
    overlayer: true,
    pagination: true,
    portrait:false,
    rows: 4,
    slicedCols: 12,
    slicedRows: 8,
    slideOn:'random',
    thumbnails:false,
    time: 500,
    transPeriod: 1500,
});
//aos
AOS.init({
    duration: 3000,
})

// circle div moving,set both auto and click
var circle = document.getElementById("circleDiv");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = 0;
upBtn.onclick = function(){
    rotateValue -=45;
    circle.style.transform = `rotate(${rotateValue}deg)`;
}
downBtn.onclick = function(){
    rotateValue +=45;
    circle.style.transform = `rotate(${rotateValue}deg)`;
}
//auto circulate
setInterval(function (){
    rotateValue +=45;
    circle.style.transform = `rotate(${rotateValue}deg)`;
}, 2000);
//vertical carousel
$(window).on('load',function(){
    console.log($("#content-1").mThumbnailScroller)
    $("#content-1").mThumbnailScroller({
        axis:"y",
        type:"hover-precise",
        contentTouchScroll:25,
    });
    $("#content-2").mThumbnailScroller({
        axis:"y",
        type:"hover-precise",
        contentTouchScroll:25,

    });
    $("#content-3").mThumbnailScroller({
        axis:"y",
        type:"hover-precise",
        contentTouchScroll:25,

    });
});

//enjoy: click: background, sound, smoke, zoomin
//curtain fadeOut
function showOff() {
    $(".curtain").hide();
}
//toggle weather
$(".sun").on('click',function(){
    $(".bgSun").toggle();
})
$(".snow").on('click',function(){
    $("#snowImg").toggle();
})
$(".star").on('click',function(){
    $(".starImg").toggle();
})
$(".wind").on('click',function(){
    $(".windImg").toggle();
})
$(".night").on('click',function(){
    $(".bgNight").toggle();
})
//audio
$(document).ready(()=>{
    var rain = document.getElementsByClassName("rain")[0];
    var rainAud = document.getElementById("rainAud");
    let h=true;
    rain.addEventListener('click',function(){
        h=!h;
        if(h) {
            rainAud.pause();
            $("#rainImg").hide();
        }else {
            rainAud.play();
            $("#rainImg").show();
        }
    })
});
$(document).ready(()=>{
    var music = document.getElementsByClassName("music")[0];
    var musicAud = document.getElementById("musicAud");
    let h=true;
    music.addEventListener('click',function(){
        h=!h;
        if(h) {
            musicAud.pause();
        }else {
            musicAud.play();
        }
    })
});
$(document).ready(()=>{
    var bird = document.getElementsByClassName("bird")[0];
    var birdAud = document.getElementById("birdAud");
    let h=true;
    bird.addEventListener('click',function(){
        h=!h;
        if(h) {
            birdAud.pause();
            $("#birdFly").hide();
        }else {
            birdAud.play();
            $("#birdFly").show();
        }
    })
});
$(document).ready(()=>{
    var cat = document.getElementsByClassName("cat")[0];
    var catAud = document.getElementById("catAud");
    let h=true;
    cat.addEventListener('click',function(){
        h=!h;
        if(h) {
            catAud.pause();
            $("#catMeow").hide();
        }else {
            catAud.play();
            $("#catMeow").show();
        }
    })
});
$(document).ready(()=>{
    var sip = document.getElementsByClassName("sip")[0];
    var sipAud = document.getElementById("sipAud");
    let h=true;
    sip.addEventListener('click',function(){
        h=!h;
        if(h) {
            sipAud.pause();
            $("#cup").animate({
                right: '13.5%',
                bottom: '-1%',
                width: '20%',
                height: '25%',
            },0.3);
            $("#smoke").animate({
                right: '17%',
                bottom: '13%',
                width: '15%',
                height: '30%',
            },0.3);
        }else {
            $("#cup").animate({
                right: '10%',
                bottom: '10%',
                width: '40%',
                height: '50%',
            },0.3);
            $("#smoke").animate({
                right: '20%',
                bottom: '30%',
                width: '25%',
                height: '35%',
            },0.3);
            sipAud.play();
        }
    })
});
//update products with infos and number


//add to cart button, payment, confirm, sum cost,



//scrollToTop
window.onscroll = function(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('#scrollToTopBtn').show();
    }else{
        $('#scrollToTopBtn').hide();
    }
}
$('#scrollToTopBtn').on('click',function (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});