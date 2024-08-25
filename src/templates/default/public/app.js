window.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    const timezone = document.getElementById('timezone');

    submit.addEventListener('click', async () => {
        const response = await fetch(`/api/timezone?timezone=${timezone.value}`);
        const data = await response.json();
        const result = document.getElementById('result');
        if (data.error) {
            result.innerHTML = data.error;
        } else {
            result.innerHTML = data.timezone;
        }
    });
});