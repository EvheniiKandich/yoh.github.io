// Translations
const translations = {
    ua: {
        schedule: "Розклад",
        scheduleDesc: "Переглянути графік занять",
        projects: "Проєкти",
        projectsDesc: "Мій код та кейси",
        contacts: "Контакти",
        contactsDesc: "Написати мені",
        ammunition: "Спорядження",
        ammunitionDesc: "Моє airsoft спорядження",
        monday: "Понеділок",
        tuesday: "Вівторок",
        wednesday: "Середа",
        thursday: "Четвер",
        friday: "П'ятниця",
        saturday: "Субота",
        sunday: "Неділя"
    },
    en: {
        schedule: "Schedule",
        scheduleDesc: "View class schedule",
        projects: "Projects",
        projectsDesc: "My code and cases",
        contacts: "Contacts",
        contactsDesc: "Write to me",
        ammunition: "Ammunition",
        ammunitionDesc: "My airsoft ammunition",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday"
    }
};

let currentLang = 'ua';

// Language Switch
document.getElementById('langSwitch').addEventListener('click', (e) => {
    e.preventDefault();
    currentLang = currentLang === 'ua' ? 'en' : 'ua';
    updateLanguage();
});

function updateLanguage() {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.dataset.langKey;
        el.textContent = translations[currentLang][key];
    });
}

// Stars Animation (optimized)
function createStars() {
    const container = document.getElementById('stars-container');
    const starCount = 50; // Reduced for performance

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(star);
    }
}

// Card Expansion
document.querySelectorAll('.glass-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.closest('.equipment-details')) return;

        const wasExpanded = this.classList.contains('expanded');

        // Close all cards
        document.querySelectorAll('.glass-card').forEach(c => {
            c.classList.remove('expanded');
        });

        // Toggle clicked card
        if (!wasExpanded) {
            this.classList.add('expanded');

            // Load content
            const cardType = this.dataset.card;
            if (cardType === 'schedule') {
                loadSchedule();
            }
        }
    });
});

// Schedule Data
function loadSchedule() {
    const scheduleData = [
        { day: 'monday', tasks: [
                'HTML/CSS Practice - 1 hour',
                'JavaScript Fundamentals - 1.5 hours',
                'Code Review - 30 min',
                'Git Practice - 30 min',
                'Reading Documentation - 1 hour',
                'Building Mini Project - 2 hours',
                'Reflection & Planning - 30 min'
            ]},
        { day: 'tuesday', tasks: [
                'JavaScript Arrays - 1 hour',
                'DOM Manipulation - 1.5 hours',
                'Practice Exercise - 1 hour',
                'YouTube Tutorial - 1 hour',
                'Build Component - 1.5 hours',
                'Code Testing - 45 min',
                'Journal Entry - 15 min'
            ]},
        { day: 'wednesday', tasks: [
                'Functions Deep Dive - 1 hour',
                'Async JavaScript - 1.5 hours',
                'API Practice - 1 hour',
                'Debug Session - 45 min',
                'Project Work - 2 hours',
                'Git Commit - 30 min',
                'Weekly Review - 30 min'
            ]},
        { day: 'thursday', tasks: [
                'ES6+ Features - 1 hour',
                'Object Methods - 1 hour',
                'Coding Challenge - 1.5 hours',
                'Mentor Session - 1 hour',
                'Apply Feedback - 1 hour',
                'Side Project - 1.5 hours',
                'Plan Tomorrow - 15 min'
            ]},
        { day: 'friday', tasks: [
                'React Introduction - 1.5 hours',
                'Components Practice - 1 hour',
                'Mini React App - 2 hours',
                'Code Review - 45 min',
                'Documentation - 30 min',
                'Git Push - 30 min',
                'Weekend Planning - 30 min'
            ]},
        { day: 'saturday', tasks: [
                'Personal Project - 3 hours',
                'Tutorial Following - 2 hours',
                'Code Refactoring - 1 hour',
                'Learning New Tool - 1 hour',
                'Community Forum - 30 min',
                'Portfolio Update - 1 hour',
                'Rest - as needed'
            ]},
        { day: 'sunday', tasks: [
                'Weekly Review - 1 hour',
                'Portfolio Work - 2 hours',
                'Blog Post Writing - 1 hour',
                'LinkedIn Update - 30 min',
                'Plan Next Week - 1 hour',
                'Free Learning - 1 hour',
                'Rest & Recharge - as needed'
            ]}
    ];

    const container = document.getElementById('scheduleContent');
    container.innerHTML = '';

    scheduleData.forEach(({ day, tasks }) => {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day-schedule';

        const dayName = translations[currentLang][day];
        dayDiv.innerHTML = `<h4>${dayName}</h4>`;

        const taskList = document.createElement('div');
        taskList.className = 'task-list';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                        <input type="checkbox" class="task-checkbox" id="${day}-${index}">
                        <label for="${day}-${index}">${task}</label>
                    `;
            taskList.appendChild(taskItem);
        });

        dayDiv.appendChild(taskList);
        container.appendChild(dayDiv);
    });
}

// Ammunition Equipment
const equipmentData = {
    head: {
        title: 'Head Equipment',
        items: ['Helmet - Ops-Core FAST', 'Balaclava - Black', 'Goggles - ESS', 'Headset - Comtac']
    },
    torso: {
        title: 'Body Armor',
        items: ['Plate Carrier - JPC 2.0', 'Mag Pouches x3', 'Radio Pouch', 'Medkit Pouch']
    },
    legs: {
        title: 'Lower Body',
        items: ['Tactical Pants - Multicam', 'Knee Pads - Alta', 'Tactical Boots', 'Belt - Cobra']
    },
    backpack: {
        title: 'Backpack Contents',
        items: ['Hydration System 3L', 'Extra BBs x2000', 'Tools & Maintenance', 'Extra Battery', 'Snacks & Water']
    },
    weapon: {
        title: 'Assault Rifle',
        items: ['Kalashnikov AK-74', 'Red Dot Sight', 'Foregrip - Magpul', 'Sling - Tactical', 'Hi-Cap Mag 450rds']
    }
};

document.querySelectorAll('.body-part').forEach(part => {
    part.addEventListener('click', (e) => {
        e.stopPropagation();

        // Remove any existing details
        document.querySelectorAll('.equipment-details').forEach(d => d.remove());

        const equipType = part.dataset.equipment;
        const data = equipmentData[equipType];

        const details = document.createElement('div');
        details.className = 'equipment-details active';
        details.innerHTML = `
                    <h5>${data.title}</h5>
                    <ul>
                        ${data.items.map(item => `<li>• ${item}</li>`).join('')}
                    </ul>
                `;

        // Position details
        const rect = part.getBoundingClientRect();
        details.style.top = `${rect.bottom + 10}px`;
        details.style.left = `${rect.left}px`;

        part.appendChild(details);

        // Close on click outside
        setTimeout(() => {
            document.addEventListener('click', function closeDetails(e) {
                if (!details.contains(e.target)) {
                    details.remove();
                    document.removeEventListener('click', closeDetails);
                }
            });
        }, 100);
    });
});

// Initialize
createStars();
updateLanguage();