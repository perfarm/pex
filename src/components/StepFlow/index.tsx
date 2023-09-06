import { FC, memo } from 'react';
import { Check } from '~/components/Icons/Check';
import { Item, List, MarkFlow, Root } from './style';
import { Props } from './types';

const listStepsOfOrder = [
  {
    label: '1',
    active: false,
    stepIndex: 1,
  },
  {
    label: '2',
    active: false,
    stepIndex: 2,
  },
  {
    label: <Check color="white" size={18} />,
    active: false,
    stepIndex: 3,
  },
];

const RootStepFlow: FC<Props> = ({ step }) => (
  <Root>
    <List>
      {listStepsOfOrder.map(({ label, stepIndex }, index) => {
        return (
          <Item key={`step-flow-${index}`} active={stepIndex <= step}>
            <MarkFlow>{label}</MarkFlow>
          </Item>
        );
      })}
    </List>
  </Root>
);

export const StepFlow = memo(RootStepFlow);
