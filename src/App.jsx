import React, { useMemo, useState } from "react";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Code2,
  Coffee,
  FileText,
  Github,
  Hotel,
  Mail,
  MapPinned,
  MonitorSmartphone,
  NotebookText,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const notionUrl = "https://app.notion.com/p/373072f1778b811384a0e164f79b91ab";
const githubUrl = "https://github.com/dpgns9983-dot";
const portfolioRepoUrl = "https://github.com/dpgns9983-dot/dpgns9983-dot.github.io";

const links = [
  { label: "Notion", value: "포트폴리오 v2", icon: NotebookText, href: notionUrl },
  { label: "GitHub", value: "dpgns9983-dot", icon: Github, href: githubUrl },
  { label: "Site Repo", value: "portfolio site", icon: Code2, href: portfolioRepoUrl },
  { label: "PDF", value: "작성 예정", icon: FileText, href: "#contact", pending: true },
  { label: "Email", value: "작성 예정", icon: Mail, href: "#contact", pending: true },
];

const careerCards = [
  {
    title: "HDC AI 과정",
    period: "2026",
    body: "Python 기초부터 데이터 분석, DB, ML/DL, Agent/RAG, 서비스 개발까지 이어지는 실무형 학습 흐름",
    icon: BookOpen,
  },
  {
    title: "데이터 분석 기반",
    period: "Python / pandas / SQL",
    body: "공공데이터와 운영 데이터 수집, 정제, 병합, 대시보드와 노트북 결과물 정리",
    icon: BarChart3,
  },
  {
    title: "AI 서비스 연결",
    period: "Agent / RAG / Frontend",
    body: "모델 실험에서 끝나지 않는 AI 기능, 사용자가 따라갈 수 있는 화면 흐름과 서비스 시나리오 연결",
    icon: BrainCircuit,
  },
  {
    title: "최종 프로젝트",
    period: "진행 전",
    body: "진행 전 상태, 완성 후 대표 프로젝트 1순위 교체 예정",
    icon: CalendarDays,
  },
];

const projects = [
  {
    id: "seoul-crime",
    title: "서울 범죄 통계 대시보드",
    label: "대표 프로젝트 1",
    type: "Data Dashboard",
    period: "2026",
    role: "요일별 데이터 전처리, week 화면 구성, 매핑 테이블 연결",
    outcome: "서울 범죄 통계와 실시간 혼잡도 데이터를 연결한 SafeNOVA 탐색형 대시보드",
    problem: "경찰 통계, 서울 지역 기준, 실시간 핫스팟 데이터의 지역명과 분석 단위 불일치",
    implementation: "mapping_fix.csv와 police_week_fix.csv 정리, SQLite 적재, ORM 연결, Streamlit multipage 화면 구성",
    result: "지역, 시간, 요일, 핫스팟 기준으로 안전 지표를 탐색하는 대시보드 흐름",
    artifacts: "1_preprocessing 노트북, 4_streamlit/pages/week.py, seed_all.py, crime_db.db, 대시보드 화면",
    lesson: "분석 결과보다 데이터 기준 통일과 화면 질문 흐름 설계가 먼저라는 점 확인",
    evidence: [
      "SafeNOVA README의 데이터 흐름: raw data -> preprocessing -> SQLite -> ORM -> Streamlit",
      "home, hotspot, region, time, week로 나뉜 Streamlit multipage 구조",
      "요일별 통계, 지역별 범죄, 시간대별 위험도 분석 노트북 근거",
    ],
    stack: ["Python", "pandas", "SQLite", "SQLAlchemy", "Streamlit"],
    asset: "assets/seoul-crime-dashboard.png",
    accent: "red",
    icon: ShieldCheck,
  },
  {
    id: "smart-mirror",
    title: "Smart Mirror AIoT",
    label: "대표 프로젝트 2",
    type: "AIoT Frontend",
    period: "2026",
    role: "PC1 프론트엔드 담당, 사용자 화면 흐름과 API 응답 표시 방식 정리",
    outcome: "PC3 자세 분석 결과와 PC2 AI 코칭 문구를 사용자가 이해하는 PC1 화면 흐름으로 연결",
    problem: "PC1 화면, PC3 자세 분석, PC2 AI 코칭이 각각 구현됐지만 사용자 흐름에서는 결과와 문구가 따로 보일 위험",
    implementation: "React/Tauri 기반 7단계 화면, WebSocket 실시간 상태 수신, 카메라 프레임 업로드, 결과 수신 재시도, 목데이터 기반 UI 검증",
    result: "프로필 선택부터 운동 결과 확인까지 이어지는 PC1 중심 엔드투엔드 시연 흐름",
    artifacts: "src/pages 7개 화면, SessionPage, ResultPage, api service, camera hook, Tauri installer script",
    lesson: "AI 서비스는 모델 성능뿐 아니라 응답 속도, 구현 환경, 사용자 흐름을 함께 고려해야 한다는 점 확인",
    evidence: [
      "README의 PC1, PC2, PC3 역할 분리와 PC1 화면 앱 구조",
      "SessionPage의 WebSocket 상태 수신, 프레임 업로드, pending_result 재시도 흐름",
      "ResultPage의 운동별 결과 카드, 코칭 메시지, 분석 근거 표시 구조",
    ],
    stack: ["React", "Tauri", "TypeScript", "WebSocket", "Vite"],
    asset: null,
    accent: "cyan",
    icon: MonitorSmartphone,
  },
  {
    id: "air-quality",
    title: "미세먼지와 서울 야외활동 분석",
    label: "미니 프로젝트 1",
    type: "Public Data Analysis",
    period: "2026",
    role: "미세먼지, 기온, 한강공원, 따릉이, 이비인후과 데이터 병합과 시각화",
    outcome: "서울 야외활동은 미세먼지보다 기온 영향이 더 크게 나타난다는 분석 흐름",
    problem: "기상, 대기오염, 한강공원, 공공자전거, 건강 데이터의 날짜 단위와 월 기준 차이",
    implementation: "문자열 날짜를 datetime으로 변환, 월 기준 병합, 결측치 처리, 상관관계와 지도 시각화",
    result: "기온은 야외활동 지표와 강한 양의 관계, 미세먼지는 건강 지표와 일부 관련 가능성",
    artifacts: "Jupyter Notebook, 계절별 이용자 수 그래프, 상관관계 히트맵, GeoJSON 지도 시각화, 발표 스크립트",
    lesson: "공공데이터 분석에서 결론보다 단위 통일, 변수 통제, 해석 범위 설정의 중요성 확인",
    evidence: [
      "기상청, 서울 열린데이터, 한강공원, 따릉이, 이비인후과 데이터 활용 메모",
      "월별 평균 미세먼지, 계절별 한강공원 이용자, 기온과 따릉이 이용 분석",
      "기온 영향이 더 크고 미세먼지와 활동 감소 관계는 약하다는 발표 결론",
    ],
    stack: ["Python", "pandas", "Matplotlib", "GeoJSON"],
    asset: null,
    accent: "green",
    icon: Activity,
  },
  {
    id: "hotel",
    title: "호텔 프로젝트",
    label: "미니 프로젝트 2",
    type: "DB Modeling",
    period: "2026",
    role: "고객, 객실, 예약 구조 분리와 SQLite/SQLAlchemy 기반 구현",
    outcome: "호텔 예약 흐름을 관계형 DB와 노트북 코드로 정리한 DB 모델링 실습",
    problem: "투숙객, 객실, 예약 정보를 하나의 흐름으로 관리하기 위한 테이블 분리와 관계 설계 필요",
    implementation: "User, Room, Reservation 모델 정의, ForeignKey와 relationship 연결, CRUD와 rollback 흐름 구현",
    result: "예약 관리 데이터의 입력, 조회, 수정, 삭제, Pandas 출력, Matplotlib 시각화 흐름",
    artifacts: "hotel 완료 노트북, RYN_HOTEL_fin.db, table.jpg, SQLAlchemy ORM 코드",
    lesson: "서비스 기능 구현 전 데이터 저장 단위와 테이블 관계 설계의 필요성 확인",
    evidence: [
      "호텔 예약 관리 시스템 만들기 노트북 목차",
      "User, Room, Reservation 모델과 1:N 관계 설계",
      "SQLite DB, Pandas 출력, 시각화, 수정/삭제 실습 결과",
    ],
    stack: ["SQLite", "SQLAlchemy", "Jupyter", "Pandas"],
    asset: "assets/hotel-table.jpg",
    accent: "navy",
    icon: Hotel,
  },
  {
    id: "subscription",
    title: "구독관리 에이전트",
    label: "미니 프로젝트 3",
    type: "Agent Service",
    period: "2026",
    role: "디스코드 봇 오류 재현, 멀티턴 상태 점검, rollback 흐름 개선 정리",
    outcome: "구독 등록, 수정, 삭제, 조회를 자연어로 처리하는 디스코드 기반 관리 에이전트",
    problem: "짧은 후속 입력에서 이전 서비스명이 잘못 유지되거나 rollback 의도가 정상 처리되지 않는 문제",
    implementation: "intent 분기, ConversationState 분리, slot filling 유지, rollback 우선 판정, JSON 기반 LLM 파싱 정리",
    result: "사용자 입력 흐름 안정화, 잘못된 서비스명으로 실행될 가능성 감소, 되돌린 항목 안내 메시지 강화",
    artifacts: "conversation.py, workflows/state.py, workflows/rollback.py, llm.py, Discord bot, Streamlit dashboard",
    lesson: "Agent 서비스는 모델 호출보다 대화 상태, 실패 복구, 사용자 안내 흐름이 핵심이라는 점 확인",
    evidence: [
      "디스코드 봇 수정 내용 정리 문서의 문제점과 개선 방향",
      "등록, 수정, 삭제, 조회 intent 분리와 follow-up 처리 구조",
      "FastAPI, SQLite, SQLAlchemy, Discord bot, Streamlit dashboard 연결 구조",
    ],
    stack: ["Agent", "Discord", "FastAPI", "SQLite", "OpenAI API"],
    asset: "assets/subscription-dashboard.png",
    altAsset: "assets/subscription-discord.png",
    accent: "purple",
    icon: Workflow,
  },
  {
    id: "coffee",
    title: "커피 원두 품질/로스팅 판별",
    label: "미니 프로젝트 4",
    type: "Computer Vision",
    period: "2026",
    role: "품질 검수 문제 정의, 이미지 기반 판별 가능성 실험, 대시보드 흐름 정리",
    outcome: "결점두와 로스팅 상태를 이미지로 판별하는 품질 검수 프로토타입",
    problem: "소규모 로스팅 업체의 수작업 검수 부담과 결점두·로스팅 상태 판별 기준 일관성 문제",
    implementation: "Roboflow 데이터 기반 YOLO 계열 결점두 탐지, EfficientNet-B0 로스팅 분류, Web UI 결과 확인 흐름 구성",
    result: "테스트 데이터 기준 로스팅 분류 성능 기록과 결점두 판별 결과 확인용 화면 구성",
    artifacts: "main.py, train_roast_cls.py, web_app.py, ONNX/PTH checkpoint, confusion matrix, 결과 이미지",
    lesson: "정확도 수치보다 데이터 범위, 현장 문제 정의, 실제 검수 흐름 연결의 중요성 확인",
    evidence: [
      "Coffee Defect Roboflow export와 YOLO 계열 탐지 실험 README",
      "EfficientNet-B0 기반 roast classification eval log",
      "결점두 탐지와 로스팅 분류를 나눈 Web UI 실행 흐름",
    ],
    stack: ["Python", "YOLO", "EfficientNet", "ONNX", "Web UI"],
    asset: "assets/coffee-broken-01.jpg",
    accent: "brown",
    icon: Coffee,
  },
];

const learningFlow = [
  "Python 기초",
  "데이터 분석",
  "DB/SQL",
  "ML/DL",
  "Agent/RAG",
  "서비스 개발",
];

function App() {
  const [selectedId, setSelectedId] = useState("smart-mirror");
  const selected = useMemo(
    () => projects.find((project) => project.id === selectedId) ?? projects[0],
    [selectedId],
  );

  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="HDC AI Portfolio 홈">
          HDC AI Portfolio
        </a>
        <nav aria-label="주요 섹션">
          <a href="#home">HOME</a>
          <a href="#career">CAREER</a>
          <a href="#projects">PROJECTS</a>
          <a href="#evidence">EVIDENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">HDC AI 과정 포트폴리오 2026</p>
            <h1>AI Service Developer</h1>
            <p className="hero-subtitle">
              데이터 분석과 AI 기능을 사용자가 이해할 수 있는 서비스 흐름으로 연결하는 개발자 지망생
            </p>
            <p className="hero-description">
              Python, DB, 대시보드, Agent/RAG, 프론트엔드 프로토타입 학습 기반
              프로젝트별 문제, 구현 내용, 결과물, 코드 근거 중심 정리
            </p>

            <div className="link-strip" aria-label="문서와 프로필 링크">
              {links.map(({ label, value, icon: Icon, href, pending }) => (
                <a
                  className={`link-button${pending ? " is-pending" : ""}`}
                  href={href}
                  key={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-disabled={pending ? "true" : undefined}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  <small>{value}</small>
                </a>
              ))}
            </div>
          </div>

          <aside className="hero-profile" aria-label="프로필 요약">
            <div className="profile-mark">AI</div>
            <div>
              <span>목표 직무</span>
              <strong>AI 서비스 개발자</strong>
            </div>
            <ul>
              <li>데이터 분석 결과를 화면과 서비스 흐름으로 정리</li>
              <li>PC1 프론트엔드, 대시보드, Agent 시나리오 경험</li>
              <li>프로젝트별 코드, 노트북, DB, 화면 근거 기반 정리</li>
            </ul>
          </aside>
        </section>

        <section className="career section" id="career">
          <SectionTitle
            title="Career"
            caption="학습 흐름과 프로젝트 경험을 빠르게 읽을 수 있는 구조"
          />
          <div className="career-grid">
            {careerCards.map(({ title, period, body, icon: Icon }) => (
              <article className="career-card" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <span>{period}</span>
                <p>{body}</p>
              </article>
            ))}
          </div>

          <div className="learning-flow" aria-label="학습 흐름">
            {learningFlow.map((item, index) => (
              <React.Fragment key={item}>
                <span>{item}</span>
                {index < learningFlow.length - 1 ? <i aria-hidden="true" /> : null}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <SectionTitle
            title="Selected Projects"
            caption="카드 선택 시 문제, 역할, 구현, 결과물 중심 상세 내용 표시"
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                active={project.id === selectedId}
                onSelect={() => setSelectedId(project.id)}
              />
            ))}
          </div>

          <ProjectDetail project={selected} />
        </section>

        <section className="evidence section" id="evidence">
          <SectionTitle
            title="Evidence"
            caption="선택 프로젝트에서 실제로 확인 가능한 코드, 문서, 화면 근거"
          />
          <article className="evidence-panel">
            <div className="evidence-heading">
              <Sparkles size={22} />
              <div>
                <span>{selected.label}</span>
                <h3>{selected.title}</h3>
              </div>
            </div>
            <div className="evidence-grid">
              <EvidenceBlock title="문제" body={selected.problem} />
              <EvidenceBlock title="내 역할" body={selected.role} />
              <EvidenceBlock title="구현 내용" body={selected.implementation} />
              <EvidenceBlock title="결과" body={selected.result} />
              <EvidenceBlock title="대표 결과물" body={selected.artifacts} />
              <EvidenceBlock title="배운 점" body={selected.lesson} />
            </div>
            <div className="evidence-list">
              <strong>확인 근거</strong>
              <ul>
                {selected.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section className="contact section" id="contact">
          <SectionTitle
            title="Next"
            caption="공개 전 마지막으로 채워야 하는 항목"
          />
          <div className="todo-grid">
            <Todo icon={Github} title="GitHub 링크 연결" body="6개 프로젝트 README와 공개 가능한 코드 정리 후 연결" />
            <Todo icon={BadgeCheck} title="보안 점검" body="API 키, 개인정보, 강의 원본, 대용량 원천 데이터 공개 제외 확인" />
            <Todo icon={FileText} title="PDF 제출본" body="웹사이트와 Notion 기반 3~5페이지 PDF 정리" />
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionTitle({ title, caption }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <p>{caption}</p>
    </div>
  );
}

function ProjectCard({ project, active, onSelect }) {
  const Icon = project.icon;

  return (
    <button
      className={`project-card accent-${project.accent}${active ? " is-active" : ""}`}
      type="button"
      onClick={onSelect}
    >
      <ProjectVisual project={project} compact />
      <div className="card-body">
        <span>{project.label}</span>
        <h3>{project.title}</h3>
        <p>{project.outcome}</p>
        <div className="card-footer">
          <Icon size={18} />
          <small>{project.type}</small>
        </div>
      </div>
    </button>
  );
}

function ProjectDetail({ project }) {
  return (
    <article className={`project-detail accent-${project.accent}`}>
      <div className="detail-copy">
        <span className="detail-label">{project.label}</span>
        <h3>{project.title}</h3>
        <p>{project.outcome}</p>
        <dl>
          <div>
            <dt>문제</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>내 역할</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>구현 내용</dt>
            <dd>{project.implementation}</dd>
          </div>
          <div>
            <dt>결과</dt>
            <dd>{project.result}</dd>
          </div>
          <div>
            <dt>대표 결과물</dt>
            <dd>{project.artifacts}</dd>
          </div>
          <div>
            <dt>배운 점</dt>
            <dd>{project.lesson}</dd>
          </div>
        </dl>
        <div className="stack-list">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <ProjectVisual project={project} />
    </article>
  );
}

function ProjectVisual({ project, compact = false }) {
  if (project.asset) {
    return (
      <div className={`project-visual image-visual${compact ? " compact" : ""}`}>
        <img src={project.asset} alt={`${project.title} 대표 화면`} />
        {project.altAsset ? <img src={project.altAsset} alt="" className="secondary-shot" /> : null}
      </div>
    );
  }

  if (project.id === "smart-mirror") {
    return (
      <div className={`project-visual mirror-visual${compact ? " compact" : ""}`}>
        <div className="mirror-screen">
          <div className="screen-top">
            <span>운동 1 / 2</span>
            <strong>스쿼트</strong>
          </div>
          <div className="count-ring">
            <b>0</b>
            <small>실시간 카운트</small>
          </div>
          <div className="screen-bottom">
            <span>프로필</span>
            <span>기준 촬영</span>
            <span>결과</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-visual chart-visual${compact ? " compact" : ""}`}>
      <div className="chart-card">
        <MapPinned size={26} />
        <div className="line-chart" />
        <div className="chart-tags">
          <span>PM10</span>
          <span>기온</span>
          <span>따릉이</span>
        </div>
      </div>
    </div>
  );
}

function EvidenceBlock({ title, body }) {
  return (
    <section>
      <h4>{title}</h4>
      <p>{body}</p>
    </section>
  );
}

function Todo({ icon: Icon, title, body }) {
  return (
    <article>
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default App;
