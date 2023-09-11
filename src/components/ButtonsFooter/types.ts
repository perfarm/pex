import { PropsWithChildren } from 'react';

type OnClick = React.MouseEventHandler<HTMLButtonElement>;

export interface Props extends PropsWithChildren {
  className?: string;
  hideBackBtn?: boolean;
  isLoading?: boolean;
  onClickNext: OnClick;
  onClickBack?: OnClick;
}
