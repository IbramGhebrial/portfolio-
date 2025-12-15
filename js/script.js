// --- КОНФИГУРАЦИЯ ПРОЕКТОВ ---
const projects = [
    {
        id: 1,
        title: "Анализ ЭЭГ и оценка риска ПТСР",
        shortDesc: "Desktop-приложение на PyQt6 для нейрофизиологического анализа.",
        fullDesc: "Разработал с нуля desktop-приложение на Python (PyQt6) для анализа ЭЭГ, включающее полный пайплайн обработки сигналов, извлечение признаков и ML-модель (логистическая регрессия) для прогнозирования риска ПТСР.",
        tech: ["Python", "PyQt6", "MNE-python", "pandas", "NumPy", "scikit-learn", "SciPy", "Matplotlib", "Seaborn", "Joblib", "Multithreading", "Git"],
        images: ["eeg_1.jpg", "eeg_2.jpg", "eeg_3.jpg"],
        githubLink: null,
        certificate: "Свидетельство №2025689122"
    },
    {  
        id: 2,
        title: "Оптимизация перераспределения ресурсов с нейросетью",
        shortDesc: "Свидетельство №2024682703. Динамическое перераспределение ресурсов в сетях 5G.",
        fullDesc: "Научная разработка для магистратуры. Программа на Python и PyTorch с использованием искусственного интеллекта (нейросети) для динамического перераспределения ресурсов между виртуальными операторами в сетях 5G. ",
        tech: ["Python", "PyTorch", "Matplotlib", "NumPy", "SciPy", "Machine Learning", "5G"],
        images: ["5g_1.jpg", "5g_2.jpg"],
        githubLink: "https://github.com/ibramGebrial/Network-slicing",
        certificate: "Свидетельство №2024682703"
    },
    {
        id: 3,
        title: "Система онлайн-обучения на Django",
        shortDesc: "Свидетельство №2022663203. Полноценная платформа дистанционного обучения.",
        fullDesc: "Разработал полноценную платформу дистанционного обучения с использованием Django и SQLite/PostgreSQL. Система поддерживает три типа пользователей: студенты, преподаватели и администраторы. Основные возможности: создание и управление курсами, загрузка учебных материалов (видео, PDF, презентации), система тестирования с автоматической проверкой, отслеживание прогресса студентов, система уведомлений и форум для обсуждений.",
        tech: ["Python", "Django", "HTML/CSS", "JavaScript", "Bootstrap", "SQL", "Git"],
        images: ["lms_1.jpg", "lms_2.jpg", "lms_3.jpg", "lms_4.jpg", "lms_5.jpg", "lms_6.jpg"],
        githubLink: "https://github.com/ibramGebrial/E-leaning-system",
        certificate: "Свидетельство №2022663203"
    },
    {
        id: 4,
        title: "Эмулятор трафика для распределения сервисов МЕС",
        shortDesc: "Свидетельство №2024681784. Инструмент для прогнозирования трафика в сетях с краевыми вычислениями.",
        fullDesc: "Разработал инструмент для прогнозирования трафика и анализа распределения сервисов в сетях с краевыми вычислениями (MEC). Программа моделирует различные сценарии нагрузки на сеть, анализирует задержки и оптимальное размещение вычислительных ресурсов.",
        tech: ["Python", "Matplotlib", "NumPy", "Pandas", "Simulation"],
        images: ["mec_1.jpg", "mec_2.jpg"],
        githubLink: null,
        certificate: "Свидетельство №2024681784"
    },
    {
        id: 5,
        title: "Эмулятор искажений сигнала (Доплеровский эффект)",
        shortDesc: "Свидетельство №2024682066. ПО для имитации влияния доплеровских сдвигов на сигнал.",
        fullDesc: "Разработал ПО для имитации влияния доплеровских сдвигов на сигнал в беспроводной связи. Программа позволяет моделировать различные сценарии движения приемника/передатчика и анализировать возникающие искажения сигнала.",
        tech: ["Python", "NumPy", "SciPy", "Matplotlib", "Signal Processing"],
        images: ["doppler_1.jpg", "doppler_2.jpg"],
        githubLink: null,
        certificate: "Свидетельство №2024682066"
    }
];

// --- ГЕНЕРАЦИЯ КАРТОЧЕК ПРОЕКТОВ ---
const container = document.getElementById('projects-container');

projects.forEach(proj => {
    const bgStyle = proj.images.length > 0 
        ? `background-image: url('images/${proj.images[0]}')` 
        : `background: linear-gradient(45deg, #1e293b, #0f172a)`;

    const card = document.createElement('div');
    card.className = 'project-card fade-element';
    card.onclick = () => openModal(proj);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Открыть детали проекта ${proj.title}`);

    card.innerHTML = `
        <div class="card-thumb" style="${bgStyle}">
            <div class="card-overlay">
                <span class="btn btn-primary btn-sm">Подробнее</span>
            </div>
        </div>
        <div class="card-info">
            <h3>${proj.title}</h3>
            <p>${proj.shortDesc}</p>
            <div class="mini-tags">
                ${proj.tech.slice(0, 4).map(t => `<span>${t}</span>`).join('')}
            </div>
        </div>
    `;
    container.appendChild(card);
});

// // --- ЛОГИКА МОДАЛЬНОГО ОКНА И СЛАЙДЕРА ---
// const modal = document.getElementById('projectModal');
// const modalSlider = document.getElementById('modalSlider');
// const sliderDots = document.getElementById('sliderDots');
// let currentImageIndex = 0;
// let currentProjectImages = [];

// function openModal(project) {
//     // 1. Заполняем текстом
//     document.getElementById('modalTitle').innerText = project.title;
//     document.getElementById('modalDesc').innerText = project.fullDesc;
    
//     // Теги
//     const techContainer = document.getElementById('modalTech');
//     techContainer.innerHTML = project.tech.map(t => `<span class="badge">${t}</span>`).join('');

//     // Сертификат
//     const certContainer = document.getElementById('modalCertificate');
//     if (project.certificate) {
//         certContainer.innerHTML = `<span class="badge"><i class="fas fa-certificate"></i> ${project.certificate}</span>`;
//     } else {
//         certContainer.innerHTML = '';
//     }

//     // Ссылка на GitHub (если есть)
//     const linkContainer = document.getElementById('modalLinks');
//     linkContainer.innerHTML = '';
//     if (project.githubLink) {
//         linkContainer.innerHTML = `
//             <a href="${project.githubLink}" target="_blank" class="btn btn-primary">
//                 <i class="fab fa-github"></i> Смотреть код
//             </a>
//         `;
//     } else {
//         linkContainer.innerHTML = `
//             <span class="btn btn-outline disabled">
//                 <i class="fas fa-lock"></i> Закрытый код (Научная работа)
//             </span>
//         `;
//     }

//     // 2. Настраиваем картинки для слайдера
//     currentProjectImages = project.images;
//     currentImageIndex = 0;
//     renderSlider();

//     // 3. Показываем окно
//     modal.style.display = 'flex';
//     modal.focus();
// }

// function renderSlider() {
//     modalSlider.innerHTML = '';
//     sliderDots.innerHTML = '';
    
//     if (currentProjectImages.length === 0) {
//         modalSlider.innerHTML = '<div style="color:white; padding: 50px; text-align: center;">Нет изображений для отображения</div>';
//         return;
//     }

//     currentProjectImages.forEach((imgSrc, index) => {
//         const img = document.createElement('img');
//         img.src = `images/${imgSrc}`;
//         img.alt = `Изображение проекта ${index + 1}`;
//         img.classList.toggle('active', index === currentImageIndex);
//         modalSlider.appendChild(img);

//         // Индикатор
//         const dot = document.createElement('span');
//         dot.classList.toggle('active', index === currentImageIndex);
//         dot.onclick = () => {
//             currentImageIndex = index;
//             renderSlider();
//         };
//         sliderDots.appendChild(dot);
//     });
    
//     // Скрываем стрелки, если картинка одна
//     const arrows = document.querySelectorAll('.slider-btn');
//     arrows.forEach(btn => btn.style.display = currentProjectImages.length > 1 ? 'block' : 'none');
// }

// // Управление слайдером
// document.querySelector('.next-btn').onclick = () => {
//     currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
//     renderSlider();
// };

// document.querySelector('.prev-btn').onclick = () => {
//     currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
//     renderSlider();
// };

// // Закрытие окна
// document.querySelector('.close-modal').onclick = () => {
//     modal.style.display = 'none';
// };

// window.onclick = (e) => {
//     if (e.target === modal) modal.style.display = 'none';
// };
// --- ЛОГИКА МОДАЛЬНОГО ОКНА И СЛАЙДЕРА ---
const modal = document.getElementById('projectModal');
const modalSlider = document.getElementById('modalSlider');
const sliderDots = document.getElementById('sliderDots');
let currentImageIndex = 0;
let currentProjectImages = [];

function openModal(project) {
    // 1. Заполняем текстом
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDesc').innerText = project.fullDesc;
    
    // Теги
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = project.tech.map(t => `<span class="badge">${t}</span>`).join('');

    // Сертификат
    const certContainer = document.getElementById('modalCertificate');
    if (project.certificate) {
        certContainer.innerHTML = `<span class="badge"><i class="fas fa-certificate"></i> ${project.certificate}</span>`;
    } else {
        certContainer.innerHTML = '';
    }

    // Ссылка на GitHub
    const linkContainer = document.getElementById('modalLinks');
    linkContainer.innerHTML = '';
    if (project.githubLink) {
        linkContainer.innerHTML = `
            <a href="${project.githubLink}" target="_blank" class="btn btn-primary">
                <i class="fab fa-github"></i> Смотреть код
            </a>
        `;
    } else {
        linkContainer.innerHTML = `
            <span class="btn btn-outline disabled">
                <i class="fas fa-lock"></i> Закрытый код
            </span>
        `;
    }

    // 2. Настраиваем картинки для слайдера
    currentProjectImages = project.images;
    currentImageIndex = 0;
    renderSlider();

    // 3. Показываем окно
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function renderSlider() {
    modalSlider.innerHTML = '';
    sliderDots.innerHTML = '';
    
    if (currentProjectImages.length === 0) {
        // Заглушка если нет изображений
        modalSlider.innerHTML = `
            <div class="slide" style="display: flex; align-items: center; justify-content: center; color: white;">
                <div style="text-align: center;">
                    <i class="fas fa-image" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                    <h3>Нет изображений</h3>
                    <p>Изображения проекта скоро будут добавлены</p>
                </div>
            </div>
        `;
        return;
    }

    // Создаем слайды
    currentProjectImages.forEach((imgSrc, index) => {
        // Создаем контейнер для слайда
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        // Создаем изображение
        const img = document.createElement('img');
        img.src = `images/${imgSrc}`;
        img.alt = `Изображение ${index + 1} проекта "${document.getElementById('modalTitle').innerText}"`;
        
        // Обработка ошибок загрузки
        img.onerror = function() {
            console.error(`Ошибка загрузки: images/${imgSrc}`);
            this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231e293b"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%2394a3b8" font-family="Arial" font-size="16">Изображение не найдено</text></svg>';
        };
        
        slide.appendChild(img);
        modalSlider.appendChild(slide);

        // Создаем индикатор (точку)
        const dot = document.createElement('span');
        if (index === currentImageIndex) {
            dot.classList.add('active');
        }
        dot.onclick = () => {
            currentImageIndex = index;
            updateSlider();
        };
        sliderDots.appendChild(dot);
    });
    
    // Обновляем позицию слайдера
    updateSlider();
    
    // Показываем/скрываем стрелки
    const arrows = document.querySelectorAll('.slider-btn');
    arrows.forEach(btn => {
        btn.style.display = currentProjectImages.length > 1 ? 'flex' : 'none';
    });
}

function updateSlider() {
    // Сдвигаем слайдер на нужное количество слайдов
    const translateX = -currentImageIndex * 100; // 100% за каждый слайд
    modalSlider.style.transform = `translateX(${translateX}%)`;
    
    // Обновляем активные точки
    document.querySelectorAll('.slider-indicators span').forEach((dot, index) => {
        if (index === currentImageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Следующий слайд
function nextSlide() {
    if (currentProjectImages.length <= 1) return;
    
    currentImageIndex++;
    if (currentImageIndex >= currentProjectImages.length) {
        currentImageIndex = 0; // Возвращаемся к первому
    }
    
    updateSlider();
}

// Предыдущий слайд
function prevSlide() {
    if (currentProjectImages.length <= 1) return;
    
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = currentProjectImages.length - 1; // Переходим к последнему
    }
    
    updateSlider();
}

// Назначаем обработчики на стрелки
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Закрытие модального окна
document.querySelector('.close-modal').onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Навигация клавиатурой
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    }
});
// --- БУРГЕР-МЕНЮ ---
const burger = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burger.onclick = () => {
    navLinks.classList.toggle('active');
    burger.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : 
        '<i class="fas fa-bars"></i>';
};

// Закрытие меню при клике вне
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
        burger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// --- АНИМАЦИЯ ПРИ СКРОЛЛЕ ---
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Наблюдаем за элементами
document.querySelectorAll('.skill-category, .project-card, .timeline-item, .achievement-card').forEach(el => {
    el.classList.add('fade-element');
    observer.observe(el);
});

// --- СЧЕТЧИК ПОСЕЩЕНИЙ ---
if (!localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', 0);
}

let count = parseInt(localStorage.getItem('visitCount')) + 1;
localStorage.setItem('visitCount', count);
document.getElementById('visitCount').textContent = count;

// --- ДОСТУПНОСТЬ: ЗАКРЫТИЕ МОДАЛКИ ПО ESC ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});

// --- ЛЕНИВАЯ ЗАГРУЗКА ИЗОБРАЖЕНИЙ ---
document.querySelectorAll('img').forEach(img => {
    img.loading = 'lazy';
});

// --- ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРЕЙ ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// --- ИНИЦИАЛИЗАЦИЯ АНИМАЦИЙ ПРИ ЗАГРУЗКЕ ---
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем класс для плавного появления элементов при загрузке
    setTimeout(() => {
        document.querySelectorAll('.fade-element').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.add('fade-in');
            }
        });
    }, 300);
});

// --- ОБРАБОТКА ОШИБОК ИЗОБРАЖЕНИЙ ---
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        const parent = this.parentElement;
        if (parent.classList.contains('card-thumb')) {
            parent.style.background = 'linear-gradient(45deg, #1e293b, #0f172a)';
            parent.innerHTML = '<div style="color: #94a3b8; display: flex; align-items: center; justify-content: center; height: 100%; font-size: 0.9rem;">Изображение не найдено</div>';
        }
    });
});

// 
