import { IconKey } from './constants/icons';

declare global {
  interface TabIconProps {
    focused: boolean;
    icon: IconKey;
    color?: string;
  }
}

export {};
