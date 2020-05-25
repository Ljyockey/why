let count = 0;
const labels = ['Why are you upset?', 'Why do you feel that way?', 'Why is that important to you?'];
const elements = {};

const onFormSubmit = (e) => {
    e.preventDefault();

    const r = document.createElement('div');
    const q = document.createElement('p');
    const a = document.createElement('p');

    q.innerText = labels[count] || 'Why?';
    a.innerText = elements.input.value;
    count++;

    r.appendChild(q);
    r.appendChild(a);
    elements.results.appendChild(r);

    elements.input.value = '';
    elements.label.innerText = labels[count] || 'Why?';
}


const init = () => {
    elements.label = document.getElementById('form-label');
    elements.input = document.getElementById('form-input');
    elements.results = document.getElementById('results');

    document.getElementById('form').addEventListener('submit', onFormSubmit);
}

window.addEventListener('DOMContentLoaded', () => init());
