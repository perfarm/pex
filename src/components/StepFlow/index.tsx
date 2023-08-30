import { FC, memo } from "react";
import { Check } from "../Icons/Check";
import { Item, List, MarkFlow, Root } from "./style";
import { Props } from "./types";

const listStepsOfOrder = [
  {
    label: "1",
    route: "/register/perfil",
    active: true,
    stepIndex: 1,
  },
  {
    label: "2",
    route: "/register/production",
    active: false,
    stepIndex: 2,
  },
  {
    label: <Check color="white" size={18} />,
    route: "/register/complete",
    active: true,
    stepIndex: 3,
  },
];

const RootStepFlow: FC<Props> = ({ step }) => {
  return (
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
};

export const StepFlow = memo(RootStepFlow);
