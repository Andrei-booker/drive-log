import { IconKey } from './icons';

export const tabs = [
  { name: 'index', title: 'Home', icon: 'home' },
  { name: 'journal', title: 'Journal', icon: 'book' },
  { name: 'add', title: 'Add', icon: 'plus' },
  { name: 'stats', title: 'Stats', icon: 'chart' },
  { name: 'more', title: 'More', icon: 'settings' },
] satisfies {
  name: string;
  title: string;
  icon: IconKey;
}[];
