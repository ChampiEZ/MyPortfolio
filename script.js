// Anim Header

window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});

// Anim Typer

const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
    deleteSpeed: 20
})
.changeDelay(40)
.typeString('Lorem <span style="color : #2d6a4f"> Vue</span> ipsum dolor sit amet consectetur adipisicing elit. Ea iste illum cumque? Tenetur perferendis quod voluptatibus molestias non cum numquam voluptatum sapiente? Quo ipsam vero odit, laudantium totam maxime provident')
.pauseFor(300)
.deleteChars(14)
.typeString('Lorem ipsum dolor sit amet <span style="color : #ea39ff"> HTML</span> consectetur adipisicing elit. Ea iste illum cumque? Tenetur perferendis quod voluptatibus molestias non cum numquam voluptatum sapiente? Quo ipsam vero odit, laudantium totam maxime provident')
.pauseFor(300)
.deleteChars(5)
.typeString('Lorem ipsum dolor <span style="color : midnightblue"> PHP</span> sit amet consectetur <span style="color : #27ae60"> SASS</span>')
.pauseFor(300)
.deleteChars(10)
.start()


// Anim Home

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("moutain");
let road = document.getElementById("road");
let text = document.getElementById("textM");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    road.style.top = value * 0.15 + 'px';
    textM.style.top = value * 1 + 'px';
})


// Anim prog

$(".step").click( function() {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
    $("#line-progress").css("width", "3%");
    $(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
    $("#line-progress").css("width", "25%");
    $(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
    $("#line-progress").css("width", "50%");
    $(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
    $("#line-progress").css("width", "75%");
    $(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
    $("#line-progress").css("width", "100%");
    $(".analysis").addClass("active").siblings().removeClass("active");
});