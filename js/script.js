// ===============================
// Portfolio Website Script
// ===============================

// ---------- ซากุระ ----------
const sakuraContainer = document.getElementById("sakura-container");

function createSakura() {

    if(!sakuraContainer) return;

    const sakura = document.createElement("div");
    sakura.className = "sakura";

    const flowers = ["🌸","🌺","🍃"];

    sakura.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

    sakura.style.left = Math.random()*100 + "vw";
    sakura.style.fontSize = (18 + Math.random()*18) + "px";
    sakura.style.animationDuration = (6 + Math.random()*5) + "s";

    sakuraContainer.appendChild(sakura);

    setTimeout(()=>{
        sakura.remove();
    },11000);

}

setInterval(createSakura,350);

// ---------- วิ้ง ----------
const sparkleContainer = document.getElementById("sparkle-container");

function createSparkle(){

    if(!sparkleContainer) return;

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random()*100+"vw";
    sparkle.style.top = Math.random()*100+"vh";
    sparkle.style.animationDuration = (1+Math.random()*2)+"s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(()=>{
        sparkle.remove();
    },3000);

}

setInterval(createSparkle,500);

// ---------- หัวใจ ----------
const heartContainer = document.getElementById("heart-container");

function createHeart(){

    if(!heartContainer) return;

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(22+Math.random()*18)+"px";
    heart.style.animationDuration=(6+Math.random()*4)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);

}

setInterval(createHeart,700);

// ---------- เพลง ----------
const music=document.getElementById("bg-music");
const musicBtn=document.getElementById("music-toggle");

if(music && musicBtn){

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="🔇 ปิดเพลง";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵 เปิดเพลง";

playing=false;

}

});

}

// ---------- Fade In ----------
window.addEventListener("load",()=>{

document.body.classList.add("fade");

});
