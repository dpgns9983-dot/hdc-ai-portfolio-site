# GitHub Pages 배포 따라하기

현재 사이트는 GitHub Pages에 올릴 준비가 끝난 상태입니다.

## 1. GitHub에서 새 저장소 만들기

브라우저에서 아래 주소로 들어갑니다.

```text
https://github.com/new
```

추천 설정:

```text
Repository name: hdc-ai-portfolio-site
Public 선택
Add a README file 체크하지 않기
.gitignore 추가하지 않기
License 추가하지 않기
```

저장소를 만든 뒤 GitHub가 보여주는 주소는 보통 이런 형태입니다.

```text
https://github.com/깃허브아이디/hdc-ai-portfolio-site.git
```

## 2. 이 컴퓨터에서 GitHub 저장소 연결하기

아래 명령에서 `깃허브아이디` 부분만 본인 아이디로 바꿔서 PowerShell에 입력합니다.

```powershell
cd C:\Projects\hdc-ai-portfolio-site
git remote add origin https://github.com/깃허브아이디/hdc-ai-portfolio-site.git
git push -u origin main
```

로그인 창이 뜨면 GitHub 계정으로 로그인합니다.

## 3. GitHub Pages 켜기

GitHub 저장소 페이지에서 아래 순서로 들어갑니다.

```text
Settings > Pages
```

설정:

```text
Source: GitHub Actions
```

그 다음 저장소 상단의 `Actions` 탭에 들어가서 `Deploy portfolio to GitHub Pages`가 초록색 체크가 될 때까지 기다립니다.

## 4. 완성 주소

배포가 끝나면 주소는 보통 아래처럼 나옵니다.

```text
https://깃허브아이디.github.io/hdc-ai-portfolio-site/
```

이 주소는 내 컴퓨터 포트를 열지 않아도 다른 사람이 바로 들어갈 수 있는 공개 주소입니다.

## 5. 안 열릴 때 확인

- 저장소가 Public인지 확인
- `Settings > Pages`의 Source가 `GitHub Actions`인지 확인
- `Actions` 탭에서 실패한 작업이 있는지 확인
- 주소 끝에 `/hdc-ai-portfolio-site/`가 들어갔는지 확인
