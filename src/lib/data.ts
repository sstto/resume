import { type ResumeData } from "./types";
import { 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  Globe, 
  Database 
} from "lucide-react";

export const resumeData: ResumeData = {
  name: "김철수",
  nameEn: "Chul-soo Kim",
  title: "Full-Stack Developer",
  about: "복잡한 문제를 단순하고 우아한 코드로 해결하는 것을 즐기는 5년차 개발자입니다. 사용자 중심의 UI와 견고한 인프라 사이의 완벽한 균형을 찾기 위해 노력합니다.",
  experiences: [
    {
      company: "테크 이노베이션 (Tech Innovation)",
      role: "Senior Software Engineer",
      period: "2021 - 현재",
      description: [
        "마이크로서비스 아키텍처 도입을 통해 시스템 가용성 30% 향상",
        "React 기반 대규모 대시보드 성능 최적화 (LCP 2.5s -> 1.2s)",
        "팀 내 코드 리뷰 문화 정착 및 신입 개발자 멘토링"
      ]
    },
    {
      company: "스타트업 에이전시 (Startup Agency)",
      role: "Web Developer",
      period: "2019 - 2021",
      description: [
        "10개 이상의 클라이언트 프로젝트 성공적 런칭",
        "Headless CMS를 활용한 콘텐츠 관리 시스템 구축",
        "모바일 퍼스트 반응형 웹 디자인 구현"
      ]
    }
  ],
  projects: [
    {
      title: "AI 기반 스마트 플래너",
      description: "사용자의 습관을 분석하여 맞춤형 하루 일과를 제안하는 AI 애플리케이션",
      tags: ["Next.js", "OpenAI API", "PostgreSQL", "Tailwind"],
      link: "https://planner.example.com",
      github: "https://github.com/example/planner"
    },
    {
      title: "실시간 협업 화이트보드",
      description: "WebSocket을 활용하여 여러 사용자가 동시에 그림을 그리고 메모를 공유하는 툴",
      tags: ["TypeScript", "Socket.io", "Canvas API"],
      github: "https://github.com/example/whiteboard"
    }
  ],
  education: [
    {
      school: "한국대학교",
      degree: "컴퓨터공학 학사",
      period: "2015 - 2019"
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
