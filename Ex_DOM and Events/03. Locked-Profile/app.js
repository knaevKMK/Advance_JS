function lockedProfile() {
    document.getElementById('main').addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
            let currentProfile = e.target.parentNode;
            if (currentProfile.querySelectorAll('input')[0].checked) {
                return;
            }
            let hiddentext = currentProfile.querySelector('div');

            let isVisible = hiddentext.style.display === "block"
            hiddentext.style.display = isVisible ? 'none' : 'block ';

            e.target.textContent = isVisible ? 'Show more' : 'Hide it';
        }
    });
}