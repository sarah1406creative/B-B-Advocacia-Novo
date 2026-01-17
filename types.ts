import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  date: string;
  text: string;
  rating: number;
}

export interface Lawyer {
  name: string;
  oab: string;
  role: string;
  experience?: string;
  imageUrl: string;
}