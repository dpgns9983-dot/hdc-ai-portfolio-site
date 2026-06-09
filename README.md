# HDC AI Portfolio Site

HDC AI 과정 프로젝트를 면접용으로 정리한 포트폴리오 웹사이트입니다.

## 구성

- 30초 자기소개
- 학습 흐름
- 대표 프로젝트 2개
- 미니 프로젝트 4개
- 프로젝트별 문제 해결 STAR 카드
- GitHub / Notion / PDF 연결 영역

## 로컬 실행

```powershell
npm install
npm run dev
```

## 빌드

```powershell
npm run build
```

## GitHub Pages 배포

이 저장소는 GitHub Actions로 `main` 브랜치에 push될 때 자동 배포되도록 설정되어 있습니다.

1. GitHub에서 새 public repository를 만듭니다.
2. 로컬 저장소에 remote를 연결합니다.
3. `main` 브랜치로 push합니다.
4. GitHub repository의 `Settings > Pages`에서 `Source`를 `GitHub Actions`로 설정합니다.

예상 주소 형식:

```text
https://깃허브아이디.github.io/저장소이름/
```

## 공개 전 확인

- GitHub 링크, PDF 링크, 이메일을 실제 정보로 교체하기
- API 키, 개인정보, 강의 원본 자료가 포함되지 않았는지 확인하기
- 프로젝트 이미지가 공개 가능한 자료인지 확인하기
