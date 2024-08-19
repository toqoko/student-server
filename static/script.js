const regions = {
    "Брестская": [
      "Антополь", "Барановичи", "Белоозерск", "Береза", "Береза Картуска", "Брест", "Высокое", "Ганцевичи", 
      "Городище", "Давид-Городок", "Домачево", "Дрогичин", "Жабинка", "Иваново", "Ивацевичи", "Каменец", 
      "Кобрин", "Коссово", "Лунинец", "Ляховичи", "Малорита", "Микашевичи", "Пинск", "Пружаны", "Столин"
    ],
    "Витебская": [
      "Барань", "Бегомль", "Бешенковичи", "Богушевск", "Браслав", "Верхнедвинск", "Ветрино", "Видзы", 
      "Витебск", "Воропаево", "Глубокое", "Городок", "Дисна", "Докшицы", "Друя", "Дубровно", "Езерище", 
      "Лепель", "Лиозно", "Миоры", "Новолукомль", "Новополоцк", "Орша", "Полоцк", "Поставы", "Россоны", 
      "Сенно", "Толочин", "Ушачи", "Чашники", "Шарковщина", "Шумилино"
    ],
    "Гомельская": [
      "Белицк", "Большевик","Брагин","Буда-Кошелево","Василевичи","Васильевка","Ветка","Гомель",
      "Добруш","Ельск","Житковичи","Жлобин","Калинковичи","Корма","Лельчицы","Лоев",
      "Мозырь","Наровля","Октябрьский","Петриков","Речица","Рогачев","Светлогорск","Туров",
      "Хойники","Чечерск"
    ],
    "Гродненская": [
      "Берёзовка","Большая Берестовица","Волковыск","Вороново","Гродно","Дятлово","Желудок",
      "Зельва","Ивье","Козловщина","Кореличи","Лида","Мосты","Новогрудок","Островец","Ошмяны",
      "Свислочь","Скидель","Слоним","Сморгонь","Щучин"
    ],
    "Минская": [
      "Березино","Бобр","Борисов","Вилейка","Воложин","Городея","Дзержинск","Жодино",
      "Заславль","Зеленый Бор","Ивенец","Клецк","Копыль","Крупки","Логойск","Любань","Марьина горка",
      "Минск","Молодечно","Мядель","Несвиж","Пуховичи","Раков","Руденск","Слуцк","Смолевичи","Солигорск",
      "Старые дороги","Столбцы","Узда","Фаниполь","Червень"
    ],
    "Могилёвская": [
      "Асеньковичи","Белыничи","Бобруйск","Быхов","Глуск","Глуша","Горки","Гродзянка",
      "Елизово","Дрибин","Кировск","Климовичи","Кличев","Костюковичи","Краснополье","Кричев","Круглое",
      "Могилев","Мстиславль","Осиповичи","Славгород","Хотимск","Чаусы","Чериков","Шклов"
    ]
  }

  const citySelect = document.getElementById('city-options-group');
  const citySelect2 = document.getElementById('city-options-all');

  for (const region in regions) {
    // Создаем группу для региона
    const optgroup = document.createElement('optgroup');
    optgroup.label = region;

    // Добавляем города в группу
    regions[region].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        optgroup.appendChild(option);
    });

    // Добавляем группу в список городов
    citySelect.appendChild(optgroup);
}

for (const region in regions) {
    // Создаем группу для региона
    const optgroup = document.createElement('optgroup');
    optgroup.label = region;

    // Добавляем города в группу
    regions[region].forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
        optgroup.appendChild(option);
    });

    // Добавляем группу в список городов
    citySelect2.appendChild(optgroup);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('city-options-div-all').style.display = 'none';
    document.getElementById('age-options-div-all').style.display = 'none';
    document.getElementById('city-options-div-group').style.display = 'none';
    document.getElementById('age-options-div-group').style.display = 'none';
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function handleSortChange(suffix, tableId) {
    var sortOption = document.getElementById('sort-options' + suffix).value;
    if (sortOption === 'city') {
        document.getElementById('city-options-div' + suffix).style.display = 'block';
        document.getElementById('age-options-div' + suffix).style.display = 'none';
    } else if (sortOption === 'age') {
        document.getElementById('city-options-div' + suffix).style.display = 'none';
        document.getElementById('age-options-div' + suffix).style.display = 'block';
    } else {
        document.getElementById('city-options-div' + suffix).style.display = 'none';
        document.getElementById('age-options-div' + suffix).style.display = 'none';
    }
    resetTable(tableId);
}

function resetTable(tableId) {
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        rows[i].style.display = '';
    }
}

function sortTable(tableId, optionsId, optionsDivId, sortOptionsId) {
    var table, rows, i, txtValue, showRow;
    table = document.getElementById(tableId);
    rows = table.getElementsByTagName("tr");
    var sortOption = document.getElementById(sortOptionsId).value;

    for (i = 0; i < rows.length; i++) {
        showRow = true;
        if (sortOption === 'city') {
            var cityOption = document.getElementById(optionsId).value;
            var addressCell = rows[i].getElementsByTagName("td")[7]; 
            if (addressCell) {
                
                txtValue = addressCell.textContent || addressCell.innerText;
                txtValue = txtValue.toLowerCase().split(',')[1];
                if (txtValue.trim() != cityOption.toLowerCase().trim()) {
                    showRow = false;
                }
            }
        } else if (sortOption === 'age') {
            var ageOption = document.getElementById(optionsId.replace('city', 'age')).value;
            var dobCell = rows[i].getElementsByTagName("td")[2]; 
            if (dobCell) {
                txtValue = dobCell.textContent || dobCell.innerText;
                var age = calculateAge(txtValue);
                if ((ageOption === 'over18' && age <= 18) ||
                    (ageOption === 'under18' && age >= 18) ||
                    (ageOption === 'over16' && age < 16) ||
                    (ageOption === 'under16' && age >= 16)) {
                    showRow = false;
                }
            }
        }

        if (showRow) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

function calculateAge(dob) {
    var dobDate = new Date(`${dob.split('.')[1]}.${dob.split('.')[0]}.${dob.split('.')[2]}`);
    var diff = Date.now() - dobDate.getTime();
    var ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.querySelector('.tablink').click();

async function fetchStudentData() {
    const loading = document.getElementById('loading');
    const main = document.getElementById('main-screen');
    loading.style.display = 'block';
    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/6664b1e2e41b4d34e40074ee", {
            method: "GET",
            headers: {
                'X-Master-Key': '$2a$10$Hq5gKFixg3LMVqftryL4cOi9Kq1PgXDCCPezf1eQews5pxBDg2Zi.'
            }
        }); 
        const data = await response.json();
        const sortedStudents = data.record.students.sort((a, b) => a.fullName.localeCompare(b.fullName));
        populateTable(sortedStudents);
    } catch (error) {
        console.error('Error fetching student data:', error);
    } finally {
        loading.style.display = 'none';
        main.style.display = 'block';
    }
}

function filterGroupData(students, selectedGroup) {
    return students.filter(student => student.groupName === selectedGroup);
}

function populateGroupTable(filteredStudents) {
    const tableBodyGroup = document.getElementById('table-group');
    tableBodyGroup.innerHTML = ''; // Очистить таблицу перед добавлением новых данных

    filteredStudents.forEach(student => {
        const row = document.createElement('tr');

        const groupNameCell = document.createElement('td');
        groupNameCell.textContent = student.groupName;
        row.appendChild(groupNameCell);

        const fullNameCell = document.createElement('td');
        fullNameCell.innerHTML = `${student.firstName} ${student.fullName} ${student.surname}<br>${student.phoneNumber}<br>`;
        row.appendChild(fullNameCell);

        const birthDateCell = document.createElement('td');
        birthDateCell.textContent = `${student.day}.${student.month}.${student.year}`;
        row.appendChild(birthDateCell);

        const passportCell = document.createElement('td');
        passportCell.innerHTML = `${student.passportSerialNumber}<br>${student.passportIssuedDate}<br>${student.passportIssuedAuthority}<br>${student.passportIDNumber}<br>`;
        row.appendChild(passportCell);

        const fatherCell = document.createElement('td');
        if (student.fatherFullName != '') {
            fatherCell.innerHTML = `${student.fatherFullName}<br>${student.fatherJob}, ${student.fatherPosition}<br>${student.fatherPhoneNumber}<br>`;
        } else {
            fatherCell.innerHTML = 'Умер';
        }
        row.appendChild(fatherCell);

        const motherCell = document.createElement('td');
        if (student.motherFullName != '') {
            motherCell.innerHTML = `${student.motherFullName}<br>${student.motherJob}, ${student.motherPosition}<br>${student.motherPhoneNumber}<br>`;
        } else {
            motherCell.innerHTML = 'Умерла';
        }
        row.appendChild(motherCell);

        const homePhoneCell = document.createElement('td');
        homePhoneCell.textContent = student.homePhoneNumber || 'Нет';
        row.appendChild(homePhoneCell);

        const addressCell = document.createElement('td');
        addressCell.innerHTML = `${student.region},<br>${student.city},<br>${student.street},<br>${student.house},<br>${student.zipCode}<br>`;
        row.appendChild(addressCell);

        const additionalCell = document.createElement('td');
        var family = '';
        if (student.family === 'incomplete_family') {
            family = 'Неполная';
        } else if (student.family === 'complete_family') {
            family = 'Полная';
        } else if (student.family === 'orphan') {
            family = 'Сирота';
        }
        additionalCell.innerHTML = `${family}${student.large_family ? `<br>Многодетная` : ''}`;
        row.appendChild(additionalCell);

        const chernobylCell = document.createElement('td');
        chernobylCell.textContent = student.chernobyl ? 'Да' : 'Нет';
        row.appendChild(chernobylCell);

        const brsmCell = document.createElement('td');
        brsmCell.textContent = student.brsm ? 'Да' : 'Нет';
        row.appendChild(brsmCell);
        
        tableBodyGroup.appendChild(row);
    });
}

// Данные для группы
document.getElementById('group-select').addEventListener('change', function() {
    const selectedGroup = this.value;
    const allStudents = JSON.parse(localStorage.getItem('studentsData'));
    const filteredStudents = filterGroupData(allStudents, selectedGroup);
    populateGroupTable(filteredStudents);
});

// Function to populate the table with student data
function populateTable(students) {
    const tableBodyAll = document.getElementById('table-all');

    // Сохраняем данные студентов в локальное хранилище для дальнейшего использования
    localStorage.setItem('studentsData', JSON.stringify(students));

    students.forEach(student => {
        const row = document.createElement('tr');

        const groupNameCell = document.createElement('td');
        groupNameCell.textContent = student.groupName.trim();
        row.appendChild(groupNameCell);

        const fullNameCell = document.createElement('td');
        fullNameCell.innerHTML = `${student.firstName} ${student.fullName} ${student.surname}<br>${student.phoneNumber}<br>`.trim();
        row.appendChild(fullNameCell);

        const birthDateCell = document.createElement('td');
        birthDateCell.textContent = `${student.day}.${student.month}.${student.year}`.trim();
        row.appendChild(birthDateCell);

        const passportCell = document.createElement('td');
        passportCell.innerHTML = `${student.passportSerialNumber}<br>${student.passportIssuedDate}<br>${student.passportIssuedAuthority}<br>${student.passportIDNumber}<br>`.trim();
        row.appendChild(passportCell);

        const fatherCell = document.createElement('td');
        if (student.fatherFullName != '') {
            fatherCell.innerHTML = `${student.fatherFullName}<br>${student.fatherJob}, ${student.fatherPosition}<br>${student.fatherPhoneNumber}<br>`.trim();
        } else {
            fatherCell.innerHTML = 'Умер';
        }
        row.appendChild(fatherCell);

        const motherCell = document.createElement('td');
        if (student.motherFullName != '') {
            motherCell.innerHTML = `${student.motherFullName}<br>${student.motherJob}, ${student.motherPosition}<br>${student.motherPhoneNumber}<br>`.trim();
        } else {
            motherCell.innerHTML = 'Умерла';
        }
        row.appendChild(motherCell);

        const homePhoneCell = document.createElement('td');
        homePhoneCell.textContent = student.homePhoneNumber || 'Нет';
        row.appendChild(homePhoneCell);

        const addressCell = document.createElement('td');
        addressCell.innerHTML = `${student.region},<br>${student.city},<br>${student.street},<br>${student.house},<br>${student.zipCode}<br>`.trim();
        row.appendChild(addressCell);

        const additionalCell = document.createElement('td');
        var family = '';
        if (student.family === 'incomplete_family') {
            family = 'Неполная';
        } else if (student.family === 'complete_family') {
            family = 'Полная';
        } else if (student.family === 'orphan') {
            family = 'Сирота';
        }
        additionalCell.innerHTML = `${family}${student.large_family ? `<br>Многодетная` : ''}`;
        row.appendChild(additionalCell);

        const chernobylCell = document.createElement('td');
        chernobylCell.textContent = student.chernobyl ? 'Да' : 'Нет';
        row.appendChild(chernobylCell);

        const brsmCell = document.createElement('td');
        brsmCell.textContent = student.brsm ? 'Да' : 'Нет';
        row.appendChild(brsmCell);
        
        tableBodyAll.appendChild(row);
    });
}

window.onload = fetchStudentData;

function filterGroup() {
    const groupSelect = document.getElementById('group-select');
    const selectedGroup = groupSelect.value;

    const filteredData = studentData.filter(student => student.group === selectedGroup);

    const tableBody = document.getElementById('table-group');
    tableBody.innerHTML = '';

    filteredData.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.group}</td>
            <td>${student.name}</td>
            <td>${student.birthdate}</td>
            <td>${student.passport}</td>
            <td>${student.fatherData}</td>
            <td>${student.motherData}</td>
            <td>${student.phone}</td>
            <td>${student.address}</td>
            <td>${student.additional}</td>
            <td>${student.chernobyl}</td>
            <td>${student.brsm}</td>
        `;
        tableBody.appendChild(row);
    });
}

async function downloadData(tableId) {
    const table = document.getElementById(tableId);
    const rows = table.getElementsByTagName('tr');
    const visibleRowsData = [];

    for (let row of rows) {
        if (window.getComputedStyle(row).display !== 'none') {
            const cells = row.getElementsByTagName('td');
            const rowData = {
                group: cells[0].innerText,
                fio_student: cells[1].innerText,
                birth_date: cells[2].innerText,
                passport_data: cells[3].innerText,
                fatherData: cells[4].innerText,
                motherData: cells[5].innerText,
                home_phone: cells[6].innerText,
                address: cells[7].innerText,
                additional: cells[8].innerText,
            };
            visibleRowsData.push(rowData);
        }
    }

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(visibleRowsData)
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'student-data.docx';
            document.body.appendChild(a);
            a.click();
            a.remove();
        } else {
            console.log('Error submitting data: ' + response.statusText);
        }
    } catch (error) {
        console.log('Error submitting data: ' + error.message);
    }
}