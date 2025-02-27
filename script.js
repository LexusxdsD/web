document.addEventListener("DOMContentLoaded", function() {
    const options = {
        root: null, // Используем viewport
        rootMargin: '0px',
        threshold: 0.1 // Срабатывает, когда 10% элемента видно
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible'); // Добавляем класс для анимации
                }, index * 400); // Задержка для последовательного появления
                observer.unobserve(entry.target); // Убираем наблюдение за элементом
            }
        });
    }, options);

    // Наблюдаем за основными элементами
    const elementsToAnimate = document.querySelectorAll('.slogan-container, .content-container');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Наблюдаем за изображениями
    const imageItems = document.querySelectorAll('.image-item');
    imageItems.forEach(item => {
        observer.observe(item);
    });
});