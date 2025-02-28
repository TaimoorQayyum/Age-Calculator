
function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const result = document.getElementById('result');
    result.innerHTML = '';
    result.classList.remove('error', 'success');

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        showError('Please fill in all fields with valid numbers');
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    if (birthDate.getDate() !== day || birthDate.getMonth() + 1 !== month || birthDate.getFullYear() !== year) {
        showError('Please enter a valid date');
        return;
    }

    if (birthDate > currentDate) {
        showError('Birth date cannot be in the future');
        return;
    }

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        ageDays += lastDayOfMonth;
        ageMonths--;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    showResult(`Your age is: <span class="highlight">${ageYears}</span> years, <span class="highlight">${ageMonths}</span> months, and <span class="highlight">${ageDays}</span> days`);
}

function showError(message) {
    const result = document.getElementById('result');
    result.innerHTML = message;
    result.classList.add('error');
}

function showResult(message) {
    const result = document.getElementById('result');
    result.innerHTML = message;
    result.classList.add('success');
}
