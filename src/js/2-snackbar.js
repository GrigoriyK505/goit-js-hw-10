// Описаний у документації
import izitoast from 'izitoast';
// Додатковий імпорт стилів
import "izitoast/dist/css/izitoast.min.css";

const form = document.querySelector(".form");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({
                title: "✅ Success",
                message: `Fulfilled promise in ${delay}ms`,
            });
})
    .catch((delay) => {
        iziToast.error({
            title: "❌ Error",
            message: `Rejected promise in ${delay}ms`,
        });
    });
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}