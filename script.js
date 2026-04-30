// === TRANSLATIONS ===
const translations = {
  nav_home: { en: "Home", ko: "홈", ru: "Главная" },
  nav_about: { en: "About", ko: "소개", ru: "Обо мне" },
  nav_skills: { en: "Skills", ko: "기술", ru: "Навыки" },
  nav_projects: { en: "Projects", ko: "프로젝트", ru: "Проекты" },
  nav_contact: { en: "Contact", ko: "연락처", ru: "Контакты" },
  hero_greeting: { en: "Hello, I'm", ko: "안녕하세요, 저는", ru: "Привет, я" },
  hero_name: { en: "Irina Tsoy", ko: "최이리나", ru: "Ирина Цой" },
  hero_desc: { en: "Currently learning HTML, CSS & JavaScript to build modern web experiences.", ko: "현대적인 웹 경험을 구축하기 위해 HTML, CSS & JavaScript를 학습 중입니다.", ru: "Изучаю HTML, CSS и JavaScript для создания современных веб-приложений." },
  about_title: { en: "About Me", ko: "소개", ru: "Обо мне" },
  about_desc: { en: "I'm a passionate learner diving into the world of web development. Currently studying HTML, CSS, and JavaScript fundamentals, I'm building my skills step by step to create beautiful and functional websites.", ko: "저는 웹 개발의 세계에 뛰어든 열정적인 학습자입니다. 현재 HTML, CSS, JavaScript 기초를 공부하며, 아름답고 기능적인 웹사이트를 만들기 위해 단계별로 실력을 쌓고 있습니다.", ru: "Я увлечённый ученик, погружающийся в мир веб-разработки. Сейчас изучаю основы HTML, CSS и JavaScript, шаг за шагом развивая навыки для создания красивых и функциональных сайтов." },
  skills_title: { en: "Tech Skills", ko: "기술 스택", ru: "Технические навыки" },
  skills_html: { en: "HTML5 - Structure & Semantics", ko: "HTML5 - 구조 & 시맨틱", ru: "HTML5 - Структура и семантика" },
  skills_css: { en: "CSS3 - Styling & Animations", ko: "CSS3 - 스타일링 & 애니메이션", ru: "CSS3 - Стилизация и анимации" },
  skills_js: { en: "JavaScript - Logic & Interactivity", ko: "JavaScript - 로직 & 인터랙티비티", ru: "JavaScript - Логика и интерактивность" },
  skills_progress: { en: "In Progress", ko: "학습 중", ru: "В процессе" },
  projects_title: { en: "Learning Journey", ko: "학습 여정", ru: "Путь обучения" },
  projects_desc: { en: "My coding practice and study materials", ko: "코딩 연습과 학습 자료", ru: "Мои практические задания и учебные материалы" },
  contact_title: { en: "Get In Touch", ko: "연락하기", ru: "Связаться" },
  contact_desc: { en: "Feel free to reach out!", ko: "편하게 연락주세요!", ru: "Не стесняйтесь обращаться!" },
  contact_email: { en: "Email", ko: "이메일", ru: "Электронная почта" },
  contact_phone: { en: "Phone", ko: "전화", ru: "Телефон" },
  contact_kakao: { en: "KakaoTalk QR", ko: "카카오톡 QR", ru: "KakaoTalk QR" },
  footer_text: { en: "Built with passion while learning web development", ko: "웹 개발을 배우며 열정으로 만들었습니다", ru: "Создано с любовью в процессе изучения веб-разработки" },
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });
}

// === TYPING EFFECT ===
function typeWriter() {
  const text = "Web Developer";
  const el = document.getElementById("typedText");
  let i = 0;
  const interval = setInterval(() => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 100);
}

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Animate skill bars
          if (entry.target.classList.contains("skill-item")) {
            const fill = entry.target.querySelector(".skill-fill");
            if (fill) {
              setTimeout(() => fill.classList.add("animate"), 300);
            }
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".skill-item, .project-card").forEach((el) => {
    observer.observe(el);
  });
}

// === NAVBAR ===
function setupNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.style.padding = "0.5rem 0";
    } else {
      navbar.style.padding = "1rem 0";
    }
  });
}

// === LANGUAGE SELECT ===
function setupLanguageSelect() {
  const select = document.getElementById("langSelect");
  select.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
}

// === SMOOTH SCROLL ===
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// === INIT ===
document.addEventListener("DOMContentLoaded", () => {
  typeWriter();
  setupScrollAnimations();
  setupNavbar();
  setupLanguageSelect();
  setupSmoothScroll();
});
