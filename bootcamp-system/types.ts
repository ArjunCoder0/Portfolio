// TypeScript interfaces for Bootcamp System

export interface Note {
  id: string;
  title: string;
  content: string;
  type: 'video' | 'pdf' | 'text' | 'code' | 'quiz';
  duration?: number; // in minutes
  fileUrl?: string;
  isCompleted: boolean;
  createdAt: Date;
}

export interface Day {
  dayNumber: number;
  title: string;
  description: string;
  notes: Note[];
  isUnlocked: boolean;
  completedNotes: number;
  totalNotes: number;
}

export interface Bootcamp {
  id: string;
  title: string;
  description: string;
  totalDays: number;
  currentDay: number;
  days: Day[];
  startDate: Date;
  endDate: Date;
  progress: number; // percentage
}

export interface Student {
  id: string;
  name: string;
  email: string;
  enrolledBootcamps: string[];
  completedNotes: string[];
}
