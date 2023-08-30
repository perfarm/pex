import { FC } from "react";

import { LabelField } from "~/components/LabelField";

import { Content, Error, Icon, InputContent, Root } from "./style";
import { Props } from "./type";

export const InputRoot: FC<Props> = ({
  children,
  className,
  disabled,
  elementId = "input",
  errorDescription,
  hasError = false,
  icon,
  infoDescription,
  label,
  required = false,
  size,
}) => (
  <Root className={className} size={size}>
    {label && (
      <LabelField
        elementId={elementId}
        required={required}
        size={size}
        tooltipDescription={infoDescription}
      >
        {label}
      </LabelField>
    )}
    <Content>
      <InputContent disabled={disabled} hasError={hasError}>
        {icon && (
          <Icon htmlFor={elementId} size={size}>
            {icon}
          </Icon>
        )}
        {children}
      </InputContent>

      {hasError && !!errorDescription?.length && (
        <Error htmlFor={elementId} id={`${elementId}-error`}>
          {errorDescription}
        </Error>
      )}
    </Content>
  </Root>
);
