// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    
    // Abrir lightbox
    document.querySelectorAll('.enlargeable').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        });
    });

    // Fechar lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fechar ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Suaviza o loop do mosaico
    const mosaicTrack = document.querySelector('.mosaic-track');
    if (mosaicTrack) {
        mosaicTrack.addEventListener('animationiteration', () => {
            mosaicTrack.style.animation = 'none';
            void mosaicTrack.offsetWidth;
            mosaicTrack.style.animation = 'scroll 40s linear infinite';
        });
    }
});