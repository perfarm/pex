import { FC } from 'react';
import { UserWebSocket } from '../UserWebSocket';
import { Props } from './types';

export const Layout: FC<Props> = ({ children }) => (
  <div>
    {children}
    <UserWebSocket />
  </div>
);
