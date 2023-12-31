import { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {
  className?: string;
  subtitle?: string;
  title?: string;
  step: number;
  hideBackBtn?: boolean;
  handleBack?: () => void;
  handleNext: () => void;
  isBtnNextLoading?: boolean;
  btnNextDescription: string | JSX.Element;
}
