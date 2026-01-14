export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  link?: string;
  citations: number;
}

export interface Award {
  id: string;
  name: string;
  level: string; // e.g., International, National
  year: number;
}

export interface Education {
  id: string;
  degree: string;
  major: string;
  university: string;
  advisor: string;
  yearStart: number;
  yearEnd: number | 'Present';
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface TravelLog {
  id: string;
  destination: string;
  date: string;
  imageUrl: string;
  summary: string;
  blogContent: string;
  galleryImages?: string[]; // New field for multiple photos
}

export interface CustomSection {
  id: string;
  title: string;
  content: string;
  link?: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  interests: string[];
  socials: {
    linkedin?: string;
    github?: string;
    googleScholar?: string;
    douyin?: string;
    email?: string;
  };
}