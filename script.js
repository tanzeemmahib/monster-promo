// Feature 1: Hero Animation on Load
window.addEventListener('load', () => {
    const heroTitle = document.getElementById('heroTitle');
    heroTitle.style.animationPlayState = 'running';
});

// Feature 9: Sound FX on Hover
const crackSound = document.getElementById('crackSound');
const monsterLogo = document.getElementById('monsterLogo');

monsterLogo.addEventListener('mouseenter', () => {
    crackSound.currentTime = 0;
    crackSound.play().catch(e => console.log('Audio play failed:', e));
});

// Feature 8: 3D Can Rotation
const monsterCan = document.getElementById('monsterCan');
let rotationAngle = 0;

monsterCan.addEventListener('mouseenter', () => {
    rotationAngle += 15;
    monsterCan.style.transform = `rotateY(${rotationAngle}deg) scale(1.1)`;
});

monsterCan.addEventListener('mouseleave', () => {
    monsterCan.style.transform = `rotateY(${rotationAngle}deg) scale(1)`;
});

// Feature 10 & 18: Build-A-Can Generator
const buildCanBtn = document.getElementById('buildCan');
const canResult = document.getElementById('canResult');
const flavorSelect = document.getElementById('flavorSelect');
const taglineSelect = document.getElementById('taglineSelect');
const colorSelect = document.getElementById('colorSelect');

buildCanBtn.addEventListener('click', () => {
    const flavor = flavorSelect.value;
    const tagline = taglineSelect.value;
    const color = colorSelect.value;
    
    const flavorNames = {
        original: 'Original Beast',
        mango: 'Mango Loco',
        ultra: 'Ultra White',
        pipeline: 'Pipeline Punch'
    };
    
    const taglineTexts = {
        chaos: 'Fueled by Chaos',
        beast: 'Unleash the Beast',
        energy: 'Pure Energy',
        mayhem: 'Midnight Mayhem'
    };
    
    const colorStyles = {
        green: '#00ff00',
        orange: '#ff8c00',
        blue: '#00bfff',
        red: '#ff0000'
    };
    
    canResult.innerHTML = `
        <h3 style="color: ${colorStyles[color]}">YOUR CUSTOM MONSTER</h3>
        <p><strong>${flavorNames[flavor]}</strong></p>
        <p>${taglineTexts[tagline]}</p>
        <div style="width: 100px; height: 150px; background: ${colorStyles[color]}; margin: 1rem auto; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #000; font-weight: bold;">MONSTER</div>
    `;
});

// Feature 11: Can Wheel Hover Effects
const canItems = document.querySelectorAll('.can-item');
canItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const flavorInfo = item.querySelector('.flavor-info');
        flavorInfo.style.opacity = '1';
    });
    
    item.addEventListener('mous
