# 영어/한국어 학습 앱 📚

> **Language**: [한국어](#) | [English](README.en.md)

npm 없이 바로 배포 가능한 간단한 학습 앱입니다!

## 프로젝트 특징

- ✅ npm 설치 불필요
- ✅ HTML, CSS, JavaScript만 사용
- ✅ 영어/한국어 양방향 학습
- ✅ 반응형 디자인
- ✅ 키보드 단축키 지원

## 배포 방법

### 1️⃣ Vercel로 배포하기

#### 방법 A: GitHub 연동

1. GitHub에 이 프로젝트를 업로드
2. [Vercel](https://vercel.com) 접속 및 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택
5. "Deploy" 클릭 → 완료!

#### 방법 B: Vercel CLI 사용

```bash
# Vercel CLI 설치 (한 번만)
npm install -g vercel

# 프로젝트 폴더에서 실행
vercel
```

### 2️⃣ Railway로 배포하기

#### 방법 A: GitHub 연동

1. GitHub에 이 프로젝트를 업로드
2. [Railway](https://railway.app) 접속 및 로그인
3. "New Project" → "Deploy from GitHub repo" 선택
4. 저장소 선택
5. "Deploy Now" 클릭 → 완료!

#### 방법 B: Railway CLI 사용

```bash
# Railway CLI 설치 (한 번만)
npm install -g @railway/cli

# 로그인
railway login

# 프로젝트 배포
railway init
railway up
```

### 3️⃣ 로컬에서 테스트하기

파일을 브라우저에서 바로 열면 됩니다:

```bash
# 방법 1: 더블클릭
index.html 파일을 더블클릭

# 방법 2: Python 서버 (있는 경우)
python -m http.server 8000

# 방법 3: VS Code Live Server 확장 사용
```

## 사용 방법

### 기본 사용법

- **다음 단어**: "다음 단어" 버튼 클릭
- **뒤집기**: "뒤집기" 버튼으로 번역 확인
- **언어 전환**: 우측 상단 🌐 버튼
- **단어 선택**: 하단 단어 목록 클릭

### 키보드 단축키

- `Space` 또는 `→`: 다음 단어
- `↑` 또는 `↓`: 카드 뒤집기
- `L`: 언어 전환

## 파일 구조

```
test_deploy/
├── index.html          # 메인 HTML 파일
├── style.css           # 스타일시트
├── script.js           # JavaScript 로직
├── vercel.json         # Vercel 설정
├── .railwayignore      # Railway 설정
├── README.md           # 한국어 README
└── README.en.md        # 영어 README
```

## 커스터마이징

### 단어 추가하기

[script.js](script.js) 파일의 `words` 배열에 추가:

```javascript
const words = [
  { korean: "안녕하세요", english: "Hello" },
  { korean: "새로운 단어", english: "New Word" }, // 여기에 추가
  // ...
];
```

### 색상 변경하기

[style.css](style.css) 파일의 그라디언트 수정:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* 원하는 색상으로 변경 */
```

## 배포 확인

배포 후 다음 사항을 확인하세요:

- ✅ 페이지가 정상적으로 로드됨
- ✅ 언어 전환이 작동함
- ✅ 다음 단어 버튼이 작동함
- ✅ 뒤집기 기능이 작동함
- ✅ 모바일에서도 잘 보임

## 문제 해결

### Vercel

- 배포가 실패하면: [vercel.json](vercel.json) 파일 확인
- 페이지가 안 보이면: 빌드 로그 확인

### Railway

- 배포가 안 되면: GitHub 연동 확인
- 500 에러: 정적 사이트 설정 확인

## 학생 실습 순서

1. **로컬 테스트**: index.html을 브라우저에서 열어 동작 확인
2. **GitHub 업로드**: 프로젝트를 GitHub에 push
3. **Vercel 배포**: Vercel에서 GitHub 저장소 연결
4. **Railway 배포**: Railway에서 같은 저장소 연결
5. **비교**: 두 플랫폼의 배포 과정과 결과 비교

## 확장 아이디어

- 📝 사용자가 직접 단어 추가 기능
- 🎯 퀴즈 모드 추가
- 📊 학습 진도 저장 (LocalStorage)
- 🔊 발음 듣기 기능 (Web Speech API)
- 🌙 다크 모드 토글
