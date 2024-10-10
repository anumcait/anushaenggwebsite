function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(element => {
        const file = element.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => console.error('Error loading file:', error));
    });
}

window.addEventListener('DOMContentLoaded', includeHTML);