import { FC } from 'react';

import { Info } from '~/components/Icons';
import { Tooltip } from '~/components/Tooltip';

import { Icon, OptionalDescription, Root } from './style';
import { Props } from './type';

export const LabelField: FC<Props> = ({
  children,
  className,
  elementId,
  optionalDescription = '(opcional)',
  required,
  size,
  tooltipDescription,
  tooltipIcon = <Info size="22px" />,
}) => (
  <Root className={className} htmlFor={elementId} size={size}>
    {children}
    {!required && <OptionalDescription>{optionalDescription}</OptionalDescription>}
    {tooltipIcon && tooltipDescription && (
      <Icon>
        <Tooltip description={tooltipDescription}>{tooltipIcon}</Tooltip>
      </Icon>
    )}
  </Root>
);
