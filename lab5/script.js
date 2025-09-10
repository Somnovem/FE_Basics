(() => {
    const byId = (id) => document.getElementById(id);

    const inputs = {
        fullName: byId('fullName'),
        variant: byId('variant'),
        group: byId('group'),
        faculty: byId('faculty'),
        dob: byId('dob'),
    };

    const errors = {
        fullName: byId('fullNameError'),
        variant: byId('variantError'),
        group: byId('groupError'),
        faculty: byId('facultyError'),
        dob: byId('dobError'),
    };

    const result = {
        panel: byId('resultPanel'),
        status: byId('resultStatus'),
        list: byId('resultList'),
        rFullName: byId('rFullName'),
        rVariant: byId('rVariant'),
        rGroup: byId('rGroup'),
        rFaculty: byId('rFaculty'),
        rDob: byId('rDob'),
    };

    const re = {
        fullName: /^[А-ЯІЇЄҐ][а-яіїєґ']+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/u,
        variant: /^\d{2}$/,
        group: /^[A-ZА-ЯІЇЄҐ]{2}-\d{2}$/u, 
        faculty: /^[A-ZА-ЯІЇЄҐ]{4}$/u,
        dob: /^\d{2}\.\d{2}\.\d{4}$/,
    };

    const setError = (el, errEl, message) => {
        el.classList.add('invalid');
        errEl.textContent = message;
    };
    const clearError = (el, errEl) => {
        el.classList.remove('invalid');
        errEl.textContent = '';
    };

    const validateField = (key) => {
        const value = inputs[key].value.trim();
        const isValid = re[key].test(value);
        if (!isValid) {
            const messages = {
                fullName: 'Формат: Прізвище І.О. (напр. Ткаченко А.О.)',
                variant: 'Дві цифри (напр. 12)',
                group: 'Дві літери, дефіс, дві цифри (напр. ІО-35)',
                faculty: 'Чотири літери (напр. ФІОТ)',
                dob: 'Формат дати: дд.мм.рррр (напр. 01.09.2006)'
            };
            setError(inputs[key], errors[key], messages[key]);
        } else {
            clearError(inputs[key], errors[key]);
        }
        return isValid;
    };

    const form = document.getElementById('student-form');

    Object.keys(inputs).forEach((k) => {
        inputs[k].addEventListener('input', () => validateField(k));
        inputs[k].addEventListener('blur', () => validateField(k));
    });

    const showResult = (ok) => {
        result.list.hidden = !ok;
        result.status.classList.remove('ok', 'fail');
        if (ok) {
            result.status.textContent = 'Інформацію успішно перевірено.';
            result.status.classList.add('ok');
            result.rFullName.textContent = inputs.fullName.value.trim();
            result.rVariant.textContent = inputs.variant.value.trim();
            result.rGroup.textContent = inputs.group.value.trim();
            result.rFaculty.textContent = inputs.faculty.value.trim();
            result.rDob.textContent = inputs.dob.value.trim();
        } else {
            result.status.textContent = 'Є помилки у формі. Перевірте виділені поля.';
            result.status.classList.add('fail');
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const keys = Object.keys(inputs);
        const results = keys.map((k) => validateField(k));
        const allValid = results.every(Boolean);
        showResult(allValid);
        if (!allValid) {
            const firstInvalid = keys.find((k, idx) => !results[idx]);
            if (firstInvalid) inputs[firstInvalid].focus();
        }
    });

    document.getElementById('resetBtn').addEventListener('click', () => {
        Object.keys(inputs).forEach((k) => clearError(inputs[k], errors[k]));
        result.status.textContent = 'Заповніть форму та натисніть «Перевірити»';
        result.status.classList.remove('ok', 'fail');
        result.list.hidden = true;
    });

    const grid = document.getElementById('grid6x6');
    const colorPicker = document.getElementById('colorPicker');
    
    if (grid) {
        const fragment = document.createDocumentFragment();
        let cell9 = null, cell21 = null, cell33 = null;
        for (let i = 1; i <= 36; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = String(i);

            if (i === 9) {
                cell9 = cell;
                cell.addEventListener('mouseenter', function() {
                    function randomColor() {
                        return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
                    }
                    cell._prevBg = cell.style.backgroundColor;
                    cell._prevColor = cell.style.color;
                    cell.style.backgroundColor = randomColor();
                    cell.style.color = randomColor();
                });
                cell.addEventListener('click', function() {
                    const selectedColor = colorPicker.value;
                    cell.style.backgroundColor = selectedColor;
                    cell.style.color = '#ffffff';
                });
            }
            if (i === 21) {
                cell21 = cell;
            }
            if (i === 33) {
                cell33 = cell;
            }
            fragment.appendChild(cell);
        }

        grid.appendChild(fragment);

        if (cell9 && cell21 && cell33) {
            cell9.addEventListener('dblclick', function() {
                const selectedColor = colorPicker.value;
                [cell9, cell21, cell33].forEach(cell => {
                    cell.style.backgroundColor = selectedColor;
                    cell.style.color = '#ffffff';
                });
            });
        }
    }
})();


