document.addEventListener("DOMContentLoaded", function() {
   
    const greetings = ["Halo", "Hello", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요"];
    

    const loaderText = document.getElementById('loader-text');
    const percentText = document.getElementById('percent-text');
    const progressBar = document.getElementById('progress-bar');
    const loaderWrapper = document.getElementById('loader-wrapper');
    
   
    document.body.style.overflow = 'hidden';

    const totalDuration = 2500; 
    let startTimestamp = null;
    let currentGreetingIndex = -1;

   
    function animateLoading(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        
        let percent = Math.floor((elapsed / totalDuration) * 100);
        if (percent > 100) percent = 100;
        
        percentText.textContent = percent + '%';
        progressBar.style.width = percent + '%';

        let expectedGreetingIndex = Math.floor((elapsed / totalDuration) * greetings.length);
        if (expectedGreetingIndex > currentGreetingIndex && expectedGreetingIndex < greetings.length) {
            currentGreetingIndex = expectedGreetingIndex;
            loaderText.classList.remove('text-visible');
            
            setTimeout(() => {
                loaderText.textContent = greetings[currentGreetingIndex];
                loaderText.classList.add('text-visible');
            }, 100);
        }

        if (elapsed < totalDuration) {
            window.requestAnimationFrame(animateLoading); 
        } else {

            setTimeout(() => {
                loaderWrapper.classList.add('loader-hide');
                setTimeout(() => {
                    document.body.style.overflow = 'auto';
                    document.body.classList.add('loaded');
                    setTimeout(()=> loaderWrapper.remove(), 1000); 
                }, 600); 
            }, 400);
        }
    }
    
    window.requestAnimationFrame(animateLoading);

   
    const gradeBadges = document.querySelectorAll('.grade-badge');
    gradeBadges.forEach(badge => {
        const grade = badge.textContent.trim().toUpperCase();
        badge.className = 'grade-badge'; 
        
        if (grade === 'A') badge.classList.add('grade-a');
        else if (grade === 'AB') badge.classList.add('grade-ab');
        else if (grade === 'B') badge.classList.add('grade-b');
        else if (grade === 'BC') badge.classList.add('grade-bc');
        else if (grade === 'C') badge.classList.add('grade-c');
        else if (grade === 'D') badge.classList.add('grade-d');
        else if (grade === 'E') badge.classList.add('grade-e');
    });
});
