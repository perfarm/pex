import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  className?: string;
  subtitle?: string;
  title: string;
  step: number;
  handleBack?: () => void;
  handleNext: () => void;
  isBtnNextDisabled?: boolean;
  btnNextDescription: string | JSX.Element;
}
