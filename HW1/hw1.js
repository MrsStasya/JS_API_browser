// Урок 1. Dom-дерево
// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. 
// Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. 
// Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. 
// Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись".
//  После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.


//Чтение JSON-файла. Такой метод только если в html type стоит module <script type="module" src="./hw1.js"></script>
import { workouts } from './data.js';
const workoutsInfo = JSON.parse(workouts);


//Ловим дни недели по id
const monday  = document.getElementById("1");
const tuesday = document.getElementById('2');
const wednesday = document.getElementById('3');
const thursday = document.getElementById('4');
const friday = document.getElementById('5');
const saturday = document.getElementById('6');
const sunday = document.getElementById('7');


//Функция для создания html наполнения из JSON.
//В зависимости от номера дня недели в JSON формируем данные для определенного блока, используя пойманные нами ранее элементы дней недели через id. 
//Также идет сравнение максимального количества участников и текущего количества участников. При равенсте формируется блок, без кнопки ЗАПИСАТЬСЯ
function createschedule(workoutsInfo) {
  workoutsInfo.forEach(item => {
    if (item.day === "1") {
      if (item.maxnumber != item.currentnumber) {
        const el = monday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <div class="box__btn">
            <button class="box__btn_signup">Записаться</button>
          </div>`);
      } else {
        const el = monday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <h2>Запись невозможна!</h2>
        `);
      }
    } if (item.day === "2") {
      if(item.maxnumber != item.currentnumber) {
        const el = tuesday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <div class="box__btn">
            <button class="box__btn_signup">Записаться</button>
          </div>`);
      } else {
        const el = monday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <h2>Запись невозможна!</h2>`);
      }
    } if (item.day === "3") {
      if(item.maxnumber != item.currentnumber) {
        const el = wednesday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <div class="box__btn">
            <button class="box__btn_signup">Записаться</button>
          </div>`); 
      } else {
        const el = wednesday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <h2>Запись невозможна</h2>
        `); 
      }         
    } if (item.day === "4") {
      if(item.maxnumber != item.currentnumber) {
        const el = thursday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <div class="box__btn">
            <button class="box__btn_signup">Записаться</button>
          </div>`); 
      } else {
        const el = thursday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <h2>Запись невозможна</h2>
        `); 
      }
    } if (item.day === "5") {
      if(item.maxnumber != item.currentnumber) {
        const el = friday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <div class="box__btn">
            <button class="box__btn_signup">Записаться</button>
          </div>
        `);
      } else {
        const el = friday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <h2>Запись невозможна</h2>
        `); 
      }   
    } if (item.day === "6") {
      if(item.maxnumber != item.currentnumber) {
        const el = saturday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <div class="box__btn">
            <button class="box__btn_signup">Записаться</button>
          </div>
        `);
      } else {
        const el = saturday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <h2>Запись невозможна</h2>
        `); 
      }    
    } if (item.day === "7") {
      if(item.maxnumber != item.currentnumber) {
        const el = sunday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <div class="box__btn">
            <button class="box__btn_signup">Записаться</button>
          </div>
        `);
      } else {
        const el = sunday.querySelector(".box__days_information");
        el.insertAdjacentHTML('beforeend', `
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимальное количество участников: <span>${item.maxnumber}</span></p>
          <p>Текущее количество записанных участников: <span class="current">${item.currentnumber}</span></p=>
          <h2>Запись невозможна</h2>
        `); 
      }           
    } 
  });  
}

//Вызов функции
createschedule(workoutsInfo);

const schedule = document.querySelectorAll(".box__days_information");

schedule.forEach(element => {
  element.addEventListener('click', function (e) { 
    if (e.target.className === "box__btn_signup") {
      const spanEl = element.querySelector('.current');
      let newSpanEl = Number(element.querySelector('.current').textContent) + 1;
      spanEl.textContent = `${newSpanEl}`;   
      e.target.style.visibility = 'hidden';
      e.target.insertAdjacentHTML('afterend', `
        <button class="box__btn_cancel">Отменить запись</button>        
      `)      
      const cancel = document.querySelector(".box__btn_cancel");
      console.log("Cancel posible")
      cancel.addEventListener('click', function (e) {
        const spanEl = element.querySelector('.current');
        let newSpanEl = Number(element.querySelector('.current').textContent) - 1;
        spanEl.textContent = `${newSpanEl}`;
        cancel.style.visibility = 'hidden';
        const btnSin = element.querySelector('.box__btn_signup');
        btnSin.style.visibility = 'visible';
      })
    }  
  }); 
})
  



//P.S. на подумать
// 1. стили для сайта дописать (пляшет оформление). Должны быть блоки с карточками занятий определенного размера. Расстояние между карточками, компактность текста. С размером и местоположением кнопок беда какая-то. Накидала основное
// 2. разметка всего поля не только по дням, но и по времени(можно еще фильтры покидать: время, дни недели, занятия)
// 3. createschedule - не нравится, слишком длинная. Подумать как упростить
// 4. нет записи в файл JSON - нужно использовать Node.js. Не нашла информацию по чистому JS все источники с использованием Node и прочего


