const share = document.getElementById('share_btn');
const buttons = document.getElementById('social_medias')
share.addEventListener('click', () => {
    if(buttons.classList.contains('hidden')) {
        buttons.classList.remove('hidden');
    }
    else {
        buttons.classList.add('hidden');
    }
});