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

const RootStepFlow: FC<Props> = ({ step, stepOk }) => {
  const renderLabel = (stepIndex: number, label: any) => {
    const current = stepIndex === step - 1;
    const active = stepIndex <= step;

    if (stepIndex < step) {
      return <Check color="white" size={18} />;
    }

    if (current && !stepOk) {
      return label;
    }

    if (current && stepOk) {
      return <Check color="white" size={18} />;
    }

    return active && stepOk ? <Check color="white" size={18} /> : label;
  };

  return (
    <Root>
      <List>
        {listStepsOfOrder.map(({ label, stepIndex }, index) => {
          const active = stepIndex <= step;

          return (
            <Item key={`step-flow-${index}`} active={active}>
              <MarkFlow>{renderLabel(stepIndex, label)}</MarkFlow>
            </Item>
          );
        })}
      </List>
    </Root>
  );
};

export const StepFlow = memo(RootStepFlow);
