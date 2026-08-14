// JavaScript file

document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.querySelector('.ViewMid iframe');
    const listSelector = document.querySelector('.ListSelector');
    if (!iframe || !listSelector) return;

    // Delegated click handler
    listSelector.addEventListener('click', (e) => {
        const item = e.target.closest('.playlist-item');
        if (!item) return;
        const playlistId = item.dataset.playlist;
        if (!playlistId) return;
        iframe.src = `https://www.youtube.com/embed?listType=playlist&list=${playlistId}`;
    });


});
