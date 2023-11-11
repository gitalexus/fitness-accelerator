
const baseSuccessCallback = (event) => {
  event.preventDefault();
  const url = 'https://echo.htmlacademy.ru/';
  const formData = new FormData(document.querySelector('[data-form-node] form'));

  fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) => response.text()).then((data) => {
    document.body.innerHTML = `<pre>${data}</pre>`;
  }).catch(() => {
    document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
  });

};

const baseErrorCallback = (event) => {
  event.preventDefault();
  // Данный коллбек используется при необходимости выполнить какое-либо действие помимо показа ошибок при попытке отправить некорректные данные, он не связан с запросами на сервер
};

export const callbacks = {
  base: {
    // Сброс формы
    reset: true,
    // Таймаут сброса формы
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
