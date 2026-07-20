// ===== ดอกซากุระ / ใบไม้ =====
const sakuraContainer = document.getElementById('sakura-container');

if (sakuraContainer) {
    function createSakura() {
        const sakura = document.createElement('div');
        sakura.classList.add('sakura');

        const flowers = ['🌸', '🍃', '🌺'];
        sakura.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

        sakura.style.left = Math.random() * 100 + 'vw';
        sakura.style.animationDuration = (5 + Math.random() * 5) + 's';
        sakura.style.fontSize = (18 + Math.random() * 18) + 'px';

        sakuraContainer.appendChild(sakura);

        setTimeout(() => sakura.remove(), 10000);
    }

    setInterval(createSakura, 400);
}

// ===== วิ้งวิ้ง =====
const sparkleContainer = document.getElementById('sparkle-container');

if (sparkleContainer) {
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.innerHTML = '✨';

        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = (1 + Math.random() * 2) + 's';

        sparkleContainer.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 3000);
    }

    setInterval(createSparkle, 500);
}

// ===== หัวใจ =====
const heartContainer = document.getElementById('heart-container');

if (heartContainer) {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖';

        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';
        heart.style.fontSize = (20 + Math.random() * 20) + 'px';

        heartContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }

    setInterval(createHeart, 800);
}

// ===== เพลง =====
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');

if (music && musicBtn) {
    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            music.play();
            musicBtn.innerHTML = '🔇 ปิดเพลง';
            isPlaying = true;
        } else {
            music.pause();
            musicBtn.innerHTML = '🎵 เปิดเพลง';
            isPlaying = false;
        }
    });
}
