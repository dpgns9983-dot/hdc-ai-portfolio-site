import React, { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Code2,
  Coffee,
  Database,
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

const links = [
  { label: "Notion", value: "포트폴리오 초안", icon: NotebookText, href: notionUrl },
  { label: "GitHub", value: "작성 예정", icon: Github, href: "#" },
  { label: "PDF", value: "제출본 작성 예정", icon: FileText, href: "#" },
  { label: "Email", value: "작성 예정", icon: Mail, href: "mailto:" },
];

const careerCards = [
  {
    title: "HDC AI 과정",
    period: "2026",
    body: "Python 기초부터 데이터 분석, DB, ML/DL, Agent/RAG, 서비스 개발까지 이어지는 실무형 학습 흐름을 정리했습니다.",
    icon: BookOpen,
  },
  {
    title: "데이터 분석 기반",
    period: "Python / pandas / SQL",
    body: "공공데이터와 운영 데이터를 수집, 정제, 병합하고 대시보드나 노트북 형태의 결과물로 정리했습니다.",
    icon: BarChart3,
  },
  {
    title: "AI 서비스 연결",
    period: "Agent / RAG / Frontend",
    body: "AI 기능을 모델 실험에서 끝내지 않고 사용자가 따라갈 수 있는 화면 흐름과 서비스 시나리오로 연결했습니다.",
    icon: BrainCircuit,
  },
  {
    title: "최종 프로젝트",
    period: "진행 전",
    body: "아직 시작 전이므로 빈 placeholder로 남겨두고, 완성 후 대표 프로젝트 1순위로 교체할 예정입니다.",
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
    outcome: "공공 범죄 데이터를 기준이 맞는 탐색형 대시보드 흐름으로 정리",
    problem: "공공데이터의 기준과 표현 방식이 달라 바로 비교하기 어려웠습니다.",
    action: "요일별 데이터 구조를 정리하고, 서로 다른 기준을 연결하기 위해 매핑 테이블과 week 화면 흐름을 구성했습니다.",
    result: "데이터가 단순 표로 남지 않고 요일별 범죄 흐름을 탐색할 수 있는 대시보드 결과물로 정리되었습니다.",
    boundary: "별도 경찰/범죄 데이터 분석 프로젝트가 아니라 서울 범죄 통계 대시보드 안의 작업으로 설명합니다.",
    stack: ["Python", "pandas", "SQL", "Streamlit"],
    asset: "/assets/seoul-crime-dashboard.png",
    accent: "red",
    icon: ShieldCheck,
  },
  {
    id: "smart-mirror",
    title: "Smart Mirror AIoT",
    label: "대표 프로젝트 2",
    type: "AIoT Frontend",
    period: "2026",
    role: "React/Tauri 기반 PC1 프론트엔드와 사용자 운동 흐름 구성",
    outcome: "프로필 선택부터 기준 촬영, 운동 세션, 결과 확인까지 이어지는 PC1 서비스 흐름",
    problem: "PC1 화면, PC3 자세 분석 서버, PC2 RAG 코칭 서버가 나뉘어 있어 사용자가 따라갈 흐름이 복잡했습니다.",
    action: "화면 흐름을 7단계로 나누고, 프로필/기준 촬영/루틴/세션/결과 상태를 PC1 프론트에서 연결했습니다.",
    result: "흩어진 AIoT 기능이 사용자가 거울 앞에서 따라갈 수 있는 서비스 흐름으로 보이도록 정리되었습니다.",
    boundary: "직접 맡은 중심은 PC1 프론트엔드이며, 자세 분석 서버와 RAG 서버 전체를 혼자 구현했다고 말하지 않습니다.",
    stack: ["React", "Tauri", "TypeScript", "WebSocket"],
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
    outcome: "서로 다른 공공데이터를 월/날짜 기준으로 맞춰 상관관계를 탐색",
    problem: "자료 출처마다 날짜 단위와 컬럼 기준이 달라 한 번에 비교하기 어려웠습니다.",
    action: "데이터를 날짜와 월 기준으로 정리하고, 야외활동 및 건강 관련 지표와 함께 병합해 시각화했습니다.",
    result: "미세먼지뿐 아니라 기온 등 다른 요인이 야외활동 지표에 함께 영향을 줄 수 있음을 분석 흐름으로 설명했습니다.",
    boundary: "인과관계 증명이 아니라 공공데이터 기반 상관관계 분석으로 표현합니다.",
    stack: ["Python", "pandas", "Visualization"],
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
    outcome: "호텔 예약 흐름을 테이블 구조와 노트북 코드로 정리",
    problem: "호텔 운영 흐름을 코드로 표현하려면 어떤 정보를 테이블로 나눌지 먼저 정해야 했습니다.",
    action: "고객, 객실, 예약 정보를 분리하고 각 테이블의 컬럼과 연결 방식을 고민해 노트북과 SQLite DB로 구현했습니다.",
    result: "예약 관리 흐름을 데이터베이스 구조로 바꿔보며 DB 설계의 기본 흐름을 이해했습니다.",
    boundary: "실제 배포 서비스가 아니라 학습용 DB 설계 및 분석소스 프로젝트로 설명합니다.",
    stack: ["SQLite", "SQLAlchemy", "Jupyter"],
    asset: "/assets/hotel-table.jpg",
    accent: "navy",
    icon: Hotel,
  },
  {
    id: "subscription",
    title: "구독관리 에이전트",
    label: "미니 프로젝트 3",
    type: "Agent Service",
    period: "2026",
    role: "서비스 시나리오 점검, 시연 흐름 정리, 차별점 정리",
    outcome: "디스코드 기반 구독관리 에이전트의 사용 흐름과 화면 결과 정리",
    problem: "구독 서비스가 많아질수록 결제 주기, 비용, 사용 여부를 한곳에서 보기 어렵다는 문제가 있었습니다.",
    action: "디스코드에서 구독 정보를 확인하고 관리하는 시나리오를 정리하고, 시연 중 생길 수 있는 문제를 점검했습니다.",
    result: "에이전트가 사용자의 구독 관리 불편을 줄일 수 있다는 서비스 흐름을 발표와 화면으로 설명했습니다.",
    boundary: "백엔드와 LLM 처리 전체를 혼자 구현했다고 말하지 않고, 시연 흐름과 서비스 정리 역할을 중심으로 설명합니다.",
    stack: ["Agent", "Discord", "FastAPI"],
    asset: "/assets/subscription-dashboard.png",
    altAsset: "/assets/subscription-discord.png",
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
    outcome: "소규모 로스팅 업체의 품질 검수 문제를 가정한 이미지 판별 실험",
    problem: "소규모 로스팅 업체에서는 결점두나 로스팅 상태를 매번 사람이 확인해야 하는 부담이 있을 수 있습니다.",
    action: "결점두 판별과 EfficientNet-B0 기반 실험 흐름을 정리하고, 판별 결과를 대시보드로 확인하는 방향을 잡았습니다.",
    result: "이미지 기반 품질 검수 가능성을 실험하고, 실제 적용 전 필요한 데이터와 한계를 함께 정리했습니다.",
    boundary: "완성된 상용 모델이 아니라 제한된 데이터셋 기반의 가능성 검토 프로젝트로 설명합니다.",
    stack: ["Python", "EfficientNet", "Vision"],
    asset: "/assets/coffee-broken-01.jpg",
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
          <a href="#star">STAR</a>
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
              비전공자 관점에서 Python, DB, 대시보드, Agent/RAG, 프론트엔드 프로토타입을 학습했고,
              프로젝트마다 문제 정의, 내 역할, 결과물, 과장하면 안 되는 부분을 분리해 정리했습니다.
            </p>

            <div className="link-strip" aria-label="문서와 프로필 링크">
              {links.map(({ label, value, icon: Icon, href }) => (
                <a className="link-button" href={href} key={label}>
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
              <li>면접용 STAR 경험 카드와 프로젝트 근거 파일 정리 중</li>
            </ul>
          </aside>
        </section>

        <section className="career section" id="career">
          <SectionTitle
            title="Career"
            caption="과정과 경험을 면접관이 빠르게 읽을 수 있는 흐름으로 정리했습니다."
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
            caption="카드를 선택하면 문제, 역할, 결과 중심의 상세 내용이 바뀝니다."
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

        <section className="star section" id="star">
          <SectionTitle
            title="STAR"
            caption="선택한 프로젝트를 문제 해결 경험으로 말할 수 있게 분해했습니다."
          />
          <article className="star-panel">
            <div className="star-heading">
              <Sparkles size={22} />
              <div>
                <span>{selected.label}</span>
                <h3>{selected.title}</h3>
              </div>
            </div>
            <div className="star-grid">
              <ExperienceBlock title="문제" body={selected.problem} />
              <ExperienceBlock title="행동" body={selected.action} />
              <ExperienceBlock title="결과" body={selected.result} />
              <ExperienceBlock title="역할 경계" body={selected.boundary} />
            </div>
            <div className="interview-line">
              <strong>면접 한 줄</strong>
              <p>{selected.outcome}</p>
            </div>
          </article>
        </section>

        <section className="contact section" id="contact">
          <SectionTitle
            title="Next"
            caption="공개 전 마지막으로 채워야 하는 항목입니다."
          />
          <div className="todo-grid">
            <Todo icon={Github} title="GitHub 링크 연결" body="6개 프로젝트 README와 공개 가능한 코드만 정리한 뒤 연결합니다." />
            <Todo icon={BadgeCheck} title="보안 점검" body="API 키, 개인정보, 강의 원본, 대용량 원천 데이터가 공개되지 않게 확인합니다." />
            <Todo icon={FileText} title="PDF 제출본" body="웹사이트와 Notion 정리가 끝난 뒤 3~5페이지 PDF로 요약합니다." />
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
            <dt>내 역할</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>해결한 문제</dt>
            <dd>{project.problem}</dd>
          </div>
          <div>
            <dt>대표 결과물</dt>
            <dd>{project.result}</dd>
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

function ExperienceBlock({ title, body }) {
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
