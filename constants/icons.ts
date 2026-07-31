import book from '@/assets/icons/book-open.svg';
import chart from '@/assets/icons/chart-no-axes-column.svg';
import home from '@/assets/icons/house.svg';
import plus from '@/assets/icons/plus.svg';
import settings from '@/assets/icons/settings.svg';

export const icons = {
  book,
  chart,
  home,
  plus,
  settings,
} as const;

export type IconKey = keyof typeof icons;
