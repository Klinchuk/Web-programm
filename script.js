document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletter-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // предотвращает отправку формы по умолчанию

        // Показывает сообщение об успешной отправке
        successMessage.style.display = 'block';

        // Очищает поле ввода
        form.reset();
        
    });
});
