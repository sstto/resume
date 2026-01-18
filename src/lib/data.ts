import { type ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "심영인",
  nameEn: "Youngin Sim",
  title: "Software Engineer",
  about: "복잡한 문제를 단순하고 우아한 코드로 해결하는 것을 즐기는 5년차 개발자입니다. 사용자 중심의 UI와 견고한 인프라 사이의 완벽한 균형을 찾기 위해 노력합니다.",
  experiences: [
    {
      company: "네이버 (NAVER Corp.)",
      role: "Software Engineer",
      period: "2022.9 - 현재",
      description: [
        "광고 추천모델 서빙",
        "채팅플랫폼 중계 서버 개발 및 유지보수",
      ]
    },
    {
      company: "SAP",
      role: "Intern",
      period: "2022.12 - 2022.2",
      description: [
        "SAP HANA DB 성능 테스트 대시보드 개발",
      ]
    },
    {
      company: "공군 (Republic of Korea Air Force)",
      role: "군 복무",
      period: "2018.7 - 2020.6",
      description: [
      ]
    }
  ],
  projects: [
    // {
    //   title: "AI 기반 스마트 플래너",
    //   description: "사용자의 습관을 분석하여 맞춤형 하루 일과를 제안하는 AI 애플리케이션",
    //   tags: ["Next.js", "OpenAI API", "PostgreSQL", "Tailwind"],
    //   link: "https://planner.example.com",
    //   github: "https://github.com/example/planner"
    // },
    // {
    //   title: "실시간 협업 화이트보드",
    //   description: "WebSocket을 활용하여 여러 사용자가 동시에 그림을 그리고 메모를 공유하는 툴",
    //   tags: ["TypeScript", "Socket.io", "Canvas API"],
    //   github: "https://github.com/example/whiteboard"
    // }
  ],
  education: [
    {
      school: "서울대학교",
      degree: "지구환경과학 학사 & 컴퓨터공학 학사",
      period: "2016.3 - 2022.8"
    }
  ],
  skills: [
    { name: "React / Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" }
  ],
  hobbies: ["사진 촬영", "LP 수집", "클라이밍", "요리"]
};
