particlesJS.load('particle-panel', '/particles.json', () => {
    console.log('callback - particles-js config loaded');
});

AOS.init();

const getJsonData = (localPath) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", localPath, false);
    xhr.send();

    return xhr.status === 200 ? JSON.parse(xhr.responseText) : "";
}

document.getElementById("current-year").textContent = new Date().getFullYear();