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

const RootStepFlow: FC<Props> = ({ step, stepOk }) => (
  <Root>
    <List>
      {listStepsOfOrder.map(({ label, stepIndex }, index) => {
        const active = stepIndex <= step;

        return (
          <Item key={`step-flow-${index}`} active={active}>
            <MarkFlow>{active && stepOk ? <Check color="white" size={18} /> : label}</MarkFlow>
          </Item>
        );
      })}
    </List>
  </Root>
);

export const StepFlow = memo(RootStepFlow);
