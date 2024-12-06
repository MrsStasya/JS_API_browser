// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.
// Ключ доступа (Access Key): reJnu7QMJj4c1Wg38HFvPBDMPsegr5feOhoxz1Kz0c0
// Секретный ключ (Секретный ключ): Ew0Q5dw_UtpDNQxo-FDVIhO3GKA3GEkxyi2qJdDltQY





//При загрузке странице загрузим фото, фотографа и количество лайков
window.addEventListener('load', () => {
  loadPhoto();
  loadPhotographer();
  loadLikes();
})

//Загружаем рандомное фото через запрос
async function fetchRandomPhoto() {
  try {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id=reJnu7QMJj4c1Wg38HFvPBDMPsegr5feOhoxz1Kz0c0');
    console.log(response.status);
    console.log(response.ok);

    const photo = await response.json();
    return(photo);
    
  } catch (error) {
    console.error('Ошибка при загрузке фотографий:', error);
    return [];    
  }  
}

//создаем элемент и вставляем фото на сайт
async function loadPhoto() {
  const photo = await fetchRandomPhoto();
  const photoContainerEl = document.getElementById('photo-container');
  const imgEl = document.createElement('img');
  imgEl.src = photo.urls.small;
  imgEl.alt = photo.description;
  photoContainerEl.appendChild(imgEl);
}

//Загружаем фотографа
async function loadPhotographer() {
  const photo = await fetchRandomPhoto();
  const photographerName = document.getElementById('photographer'); 
  photographerName.textContent = `Фотограф: ${photo.user.name}`;
}

//Загружаем количество лайков
async function loadLikes() {
  const photo = await fetchRandomPhoto();
  let likes = photo.likes;
  const countEl = document.querySelector('.count'); 
  countEl.textContent = `${likes}`;
}

//Обработчик события на кнопку
const btnEl = document.querySelector('.like__btn');
btnEl.addEventListener('click', () => {
  counterLikes();
});

//Считаем лайки
function counterLikes() {
  const countEl = document.querySelector('.count'); 
  const currentCounter = parseInt(countEl.textContent,10);
  countEl.textContent = currentCounter + 1; 
}
