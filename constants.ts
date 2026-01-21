import { Profile, Publication, Award, Education, NewsItem, TravelLog, Internship, CustomSection } from './types';

export const PROFILE: Profile = {
  name: "Mr. Yuhao Zheng",
  title: "Incoming Ph.D. Student in Computer Science",
  bio: "I am a passionate researcher focusing on the intersection of Mobile Computing and Edge Intelligence. Outside of the lab, I am an avid tennis player and a travel enthusiast seeking the beauty in both technology and nature.",
  interests: ["Mobile Computing", "Edge Computing", "Distributed Systems", "Tennis"],
  socials: {
    linkedin: "https://www.linkedin.com/in/yuhao-zheng-b99659363/",
    github: "https://github.com/ZhengYuhaoBUPT",
    googleScholar: "https://scholar.google.com/citations?user=teplhOcAAAAJ&hl=zh-CN",
    douyin: "https://douyin.com",
    email: "yuhao_zheng@bupt.edu.cn"
  }
};


// Add your custom sections here. Only you (the developer) can edit this file.
export const CUSTOM_CONTENT: CustomSection[] = [
  {
    id: "c2",
    title: "PetPal - My First APP",
    content: "Tired of using many different apps for my pet. I built PetPal, a pet-friendly app that simplifies pet care. It's designed to make pet care easy and fun, with features like pet tracking, health tracking, and social interaction.",
    link: "https://aipetpal.netlify.app/"
  },
  {
    id: "c1",
    title: "My Tennis Journey",
    content: "I started playing tennis in college. It teaches me resilience and strategy, similar to research. Every match is a new problem to solve, requiring quick adaptation and precise execution."
  }
];

export const NEWS: NewsItem[] = [
  {
    id: "n1",
    date: "2025-11-19",
    title: "Paper Accepted at IEEE TCOM",
    description: "Our paper titled 'Two-Timescales Optimization of Content Placement and Delivery in Satellite-Terrestrial Edge Computing Networks' has been accepted for presentation."
  }
  // {
  //   id: "n2",
  //   date: "2024-04-02",
  //   title: "Keynote Speaker at MobiCom Workshop",
  //   description: "Invited to speak about the future of decentralized edge learning."
  // },
  // {
  //   id: "n3",
  //   date: "2024-02-10",
  //   title: "Won Best Paper Award",
  //   description: "Received the Best Student Paper award at the International Conference on Wireless Systems."
  // }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "Two-Timescales Optimization of Content Placement and Delivery in Satellite-Terrestrial Edge Computing Networks",
    authors: ["Renchao Xie", "Yuhao Zheng", "Qinqin Tang", "Zeru Fang", "Tao Huang", "Zehui Xiong"],
    journal: "IEEE Transactions on Communications",
    year: 2025,
    link: "https://ieeexplore.ieee.org/document/11268475",
    citations: 0
  }
  // {
  //   id: "p2",
  //   title: "A Survey on 6G Wireless Networks",
  //   authors: ["Alex Chen", "Wei Zhang"],
  //   journal: "ACM Computing Surveys",
  //   year: 2022,
  //   link: "#",
  //   citations: 120
  // },
  // {
  //   id: "p3",
  //   title: "Energy Efficient Offloading in Mobile Edge Clouds",
  //   authors: ["Alex Chen", "Robert Johnson"],
  //   journal: "IEEE Internet of Things Journal",
  //   year: 2021,
  //   link: "#",
  //   citations: 89
  // }
];

export const EDUCATION: Education[] = [
  // {
  //   id: "e1",
  //   degree: "Ph.D.",
  //   major: "Computer Science",
  //   university: "Stanford University",
  //   advisor: "Prof. Andrea Goldsmith",
  //   yearStart: 2020,
  //   yearEnd: "Present"
  // },
  {
    id: "e1",
    degree: "M.S.",
    major: "Information and Telecommunication Engineering",
    university: "Beijing University of Posts and Telecommunications",
    advisor: "Prof. Renchao Xie",
    yearStart: 2023,
    yearEnd: "Present"
  },
  {
    id: "e2",
    degree: "B.S.",
    major: "Information and Telecommunication Engineering",
    university: "Beijing University of Posts and Telecommunications",
    advisor: "Prof. Renchao Xie",
    yearStart: 2019,
    yearEnd: 2023
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: "i3",
    role: "Research Intern",
    company: "Tsinghua University",
    location: "Beijing, China",
    start: "Jan 2026",
    end: "Now",
    description: "Conducted research on ..."
  },
  {
    id: "i2",
    role: "Visiting Student",
    company: "Chinese University of Hong Kong (Shenzhen)",
    location: "Shenzhen, China & Beijing, China",
    start: "Jul 2025",
    end: "Jan 2026",
    description: "Conducted research on edge AI."
  },
  {
    id: "i1",
    role: "Remote Research Intern",
    company: "Maynooth University",
    location: "Beijing, China",
    start: "May 2025",
    end: "Nov 2025",
    description: "Conducted research on satellite communications."
  }
];

export const AWARDS: Award[] = [
  // {
  //   id: "a1",
  //   name: "IEEE Communications Society Best Paper Award",
  //   level: "International",
  //   year: 2023
  // },
  // {
  //   id: "a2",
  //   name: "National Graduate Scholarship",
  //   level: "National",
  //   year: 2022
  // }
];

export const TRAVEL_LOGS: TravelLog[] = [
  {
    id: "korea",
    destination: "Seoul, Korea",
    date: "2025-03-21",
    imageUrl: "images/Korea/Seoul/seoul.JPG",
    galleryImages: ["images/Korea/Seoul/seoul-1.JPG", "images/Korea/Seoul/seoul-2.JPG", "images/Korea/Seoul/seoul-3.JPG", "images/Korea/Seoul/seoul-4.JPG", "images/Korea/Seoul/seoul-5.JPG", "images/Korea/Seoul/seoul-6.JPG", "images/Korea/Seoul/seoul-7.JPG"],
    summary: "Exploring the ancient temples and Spring Sun.",
    blogContent: `Seoul is the first city I visited outside China. The blend of ancient traditions and modern technology is fascinating. From the bustling streets of Myeongdong to the serene temples like Jogyesa, every corner of Seoul tells a story.`
  },
  {
    id: "guangzhou",
    destination: "Guangzhou, China",
    date: "2026-01-17",
    imageUrl: "images/China/Guangzhou/guangzhou.jpg",
    galleryImages: ["images/China/Guangzhou/guangzhou1.jpg", "images/China/Guangzhou/guangzhou2.jpg", "images/China/Guangzhou/guangzhou3.jpg", "images/China/Guangzhou/guangzhou4.jpg", "images/China/Guangzhou/guangzhou5.jpg", "images/China/Guangzhou/guangzhou6.jpg"],
    summary: "Savoring authentic Cantonese Dim Sum and exploring the majestic Sun Yat-sen Memorial Hall.",
    blogContent: `Guangzhou lives up to the reputation of 'Eating in Guangzhou' (食在广州). We started our days with the traditional 'Yum Cha' culture, enjoying delicate Shrimp Dumplings (Har Gow) and Steamed Vermicelli Rolls. The vibrant atmosphere of the tea houses is the heartbeat of this city.
    
    We also visited the Sun Yat-sen Memorial Hall. The grandeur of the octagonal architecture, with its signature blue tiles and red pillars, is breathtaking. Standing before the statue of Dr. Sun Yat-sen, surrounded by ancient banyan trees, provided a peaceful moment to reflect on the deep history embedded in this modern metropolis.`
  },
  // {
  //   id: "t3",
  //   destination: "Santorini, Greece",
  //   date: "2022-08-20",
  //   imageUrl: "images/santorini.JPG",
  //   galleryImages: ["images/santorini-1.JPG", "images/santorini-2.JPG"],
  //   summary: "Sunsets and blue domes.",
  //   blogContent: `Watching the sunset in Oia is a cliché for a reason—it's absolutely magical. The contrast of the white buildings against the deep blue Aegean Sea is unforgettable.
    
  //   We spent our days exploring the narrow streets, eating fresh seafood, and simply soaking in the sun. The volcanic beaches offered a unique landscape different from anywhere else I've been.`
  // }
];
