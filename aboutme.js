const ThemeSwitch = document.getElementById('theme-switch')
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
}

ThemeSwitch.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

const DownloadCV = document.getElementsByClassName('aboutme-head4')[0];
DownloadCV.addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'download.pdf';
    link.download = 'download.pdf';
    link.click();
});