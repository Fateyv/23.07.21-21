const $galleryPhotos = $('.gellery__photos');
const template = $('#newTodoTemplate').html();

let photos = [];

function fetchFoto() {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10`)
    .then((resp) => {resp.json()
    .then(setData)
    .then(renderFotos);
    });
}

function setData(data) {
    return (photos = data);
}

function renderFotos(photos) {
    photos.map(renderFoto);
}

 function renderFoto(photo) {
   const $photo = $(getPhotosHtml(photo));
   $galleryPhotos.append($photo);
}

function getPhotosHtml(photo) {
  return template
        .replace('{{id}}', photo.id)
        .replace('{{title}}', photo.title)
        .replace('{{url}}', photo.url)
        .replace('{{thumbnailUrl}}', photo.thumbnailUrl)
}

fetchFoto()