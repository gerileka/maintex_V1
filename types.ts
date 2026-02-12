import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
