import { IconKey } from './icons';

export const tabs = [
  { name: 'index', title: 'home', icon: 'home' },
  { name: 'journal', title: 'journal', icon: 'book' },
  { name: 'add', title: 'add', icon: 'plus' },
  { name: 'stats', title: 'stats', icon: 'chart' },
  { name: 'more', title: 'more', icon: 'settings' },
] satisfies {
  name: string;
  title: string;
  icon: IconKey;
}[];
