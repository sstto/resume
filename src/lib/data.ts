import { type ResumeData } from "./types";

export const resumeData: ResumeData = {
  name: "심영인",
  nameEn: "Youngin Sim",
  title: "Software Engineer",
  about: "안녕하세요! 주로 백엔드 개발과 클라우드 인프라에 관심이 많습니다. 새로운 기술을 배우고 문제를 해결하는 것을 즐기며, 협업을 통해 더 나은 결과물을 만들어내는 것을 중요하게 생각합니다.",
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
    { name: "Spring", level: "Intermediate" },
    { name: "Kotlin", level: "Intermediate" },
    { name: "Kotlin Coroutine", level: "Advanced" },
    // { name: "Python", level: "Intermediate" },
    // { name: "AWS", level: "Intermediate" },
    { name: "Kubernetes", level: "Intermediate" }
  ],
  hobbies: ["등산", "도서관"]
};
