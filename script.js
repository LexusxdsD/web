document.getElementById('buy-now').addEventListener('mouseenter', function() {
    this.classList.add('shake'); // Добавляем класс тряски
});

document.getElementById('buy-now').addEventListener('animationend', function() {
    this.classList.remove('shake'); // Убираем класс после завершения анимации
});