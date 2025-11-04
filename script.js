// 단어 데이터
const words = [
    { korean: '안녕하세요', english: 'Hello' },
    { korean: '감사합니다', english: 'Thank you' },
    { korean: '사랑', english: 'Love' },
    { korean: '친구', english: 'Friend' },
    { korean: '가족', english: 'Family' },
    { korean: '학교', english: 'School' },
    { korean: '집', english: 'Home' },
    { korean: '음식', english: 'Food' },
    { korean: '물', english: 'Water' },
    { korean: '책', english: 'Book' },
    { korean: '컴퓨터', english: 'Computer' },
    { korean: '전화', english: 'Phone' },
    { korean: '시간', english: 'Time' },
    { korean: '날씨', english: 'Weather' },
    { korean: '행복', english: 'Happiness' }
];

// 언어별 UI 텍스트
const uiText = {
    ko: {
        title: '영어/한국어 학습 앱',
        langToggle: '🌐 English',
        subtitle: '단어 학습하기',
        nextBtn: '다음 단어',
        flipBtn: '뒤집기',
        wordListTitle: '학습 단어 목록',
        footer: '배포 연습용 프로젝트 - Railway & Vercel'
    },
    en: {
        title: 'English/Korean Learning App',
        langToggle: '🌐 한국어',
        subtitle: 'Learn Vocabulary',
        nextBtn: 'Next Word',
        flipBtn: 'Flip',
        wordListTitle: 'Vocabulary List',
        footer: 'Deployment Practice Project - Railway & Vercel'
    }
};

// 상태 관리
let currentIndex = 0;
let currentLang = 'ko';
let isFlipped = false;

// DOM 요소
const elements = {
    title: document.getElementById('title'),
    langToggle: document.getElementById('langToggle'),
    subtitle: document.getElementById('subtitle'),
    currentWord: document.getElementById('currentWord'),
    translation: document.getElementById('translation'),
    nextBtn: document.getElementById('nextWord'),
    flipBtn: document.getElementById('flipCard'),
    nextBtnText: document.getElementById('nextBtnText'),
    flipBtnText: document.getElementById('flipBtnText'),
    wordListTitle: document.getElementById('wordListTitle'),
    wordListContainer: document.getElementById('wordListContainer'),
    footer: document.getElementById('footerText')
};

// UI 업데이트 함수
function updateUI() {
    const text = uiText[currentLang];
    elements.title.textContent = text.title;
    elements.langToggle.textContent = text.langToggle;
    elements.subtitle.textContent = text.subtitle;
    elements.nextBtnText.textContent = text.nextBtn;
    elements.flipBtnText.textContent = text.flipBtn;
    elements.wordListTitle.textContent = text.wordListTitle;
    elements.footer.textContent = text.footer;

    updateWordDisplay();
    updateWordList();
}

// 단어 표시 업데이트
function updateWordDisplay() {
    const word = words[currentIndex];

    if (currentLang === 'ko') {
        elements.currentWord.textContent = word.korean;
        elements.translation.textContent = word.english;
    } else {
        elements.currentWord.textContent = word.english;
        elements.translation.textContent = word.korean;
    }

    // 뒤집기 상태 초기화
    isFlipped = false;
    elements.translation.parentElement.style.display = 'none';
}

// 단어 목록 업데이트
function updateWordList() {
    elements.wordListContainer.innerHTML = '';

    words.forEach((word, index) => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        if (index === currentIndex) {
            wordItem.classList.add('active');
        }

        wordItem.textContent = currentLang === 'ko' ? word.korean : word.english;

        wordItem.addEventListener('click', () => {
            currentIndex = index;
            updateWordDisplay();
            updateWordList();
        });

        elements.wordListContainer.appendChild(wordItem);
    });
}

// 언어 전환
elements.langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    document.documentElement.lang = currentLang;
    updateUI();
});

// 다음 단어
elements.nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % words.length;
    updateWordDisplay();
    updateWordList();
});

// 카드 뒤집기
elements.flipBtn.addEventListener('click', () => {
    isFlipped = !isFlipped;
    elements.translation.parentElement.style.display = isFlipped ? 'block' : 'none';
});

// 초기화
updateUI();
elements.translation.parentElement.style.display = 'none';

// 키보드 단축키
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        elements.nextBtn.click();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        elements.flipBtn.click();
    } else if (e.key === 'l' || e.key === 'L') {
        elements.langToggle.click();
    }
});

console.log('🎉 영어/한국어 학습 앱이 시작되었습니다!');
console.log('🎯 단축키: Space/→ (다음), ↑/↓ (뒤집기), L (언어 전환)');
