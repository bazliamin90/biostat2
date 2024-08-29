const audio = document.getElementById('myAudio');
        const playPauseBtn = document.getElementById('playPauseBtn');

        function updateButtonGradient() {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            const percentage = (currentTime / duration) * 100;
            playPauseBtn.style.background = `linear-gradient(to right, black ${percentage}%, #f7d9fc ${percentage}%)`;
        }

        playPauseBtn.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = '𝚙𝚊𝚞𝚜𝚎';
                playPauseBtn.classList.add('playing');
            } else {
                audio.pause();
                playPauseBtn.textContent = 'Play';
                playPauseBtn.classList.remove('playing');
            }
        });

        audio.addEventListener('timeupdate', updateButtonGradient);

        audio.addEventListener('ended', function() {
            playPauseBtn.textContent = '𝚙𝚕𝚊𝚢';
            playPauseBtn.classList.remove('playing');
            playPauseBtn.style.background = `linear-gradient(to right, blue 0%, #f7d9fc 0%)`;
        });