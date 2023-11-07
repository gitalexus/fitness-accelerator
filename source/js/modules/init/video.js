// идентификатор видео на youtube
const videoId = '9TZXsZItgdw';

function initVideo() {
  const videoContainer = document.querySelector('.gym__video');
  const playButton = document.querySelector('.gym__video button');
  const placeHolder = document.querySelector('.gym__video img');

  if (playButton !== null && videoContainer !== null && placeHolder !== null) {
    playButton.addEventListener('click', ()=> {
      const iframe = createIframe(videoId);
      videoContainer.appendChild(iframe);
      playButton.remove();
      placeHolder.remove();
    });
  }
}

// Cоздание фрейма с видео
function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allow', 'autoplay; encrypted-media; allowfullscreen');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('src', `https://www.youtube.com/embed/${id}/?rel=0&showinfo=0&autoplay=1&amp;controls=0`);

  return iframe;
}

export {initVideo};
