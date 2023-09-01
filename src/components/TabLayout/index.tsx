import { FC } from 'react';
import { BottomTab } from '../BottomTab';
import { UserWebSocket } from '../UserWebSocket';
import { Props } from './types';

export const TabLayout: FC<Props> = ({ children }) => (
  <div>
    {children}
    <UserWebSocket />
    <BottomTab />
  </div>
);
