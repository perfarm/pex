import React, { FC, useCallback, useMemo } from 'react';

import { SelectComponentsConfig } from 'react-select/dist/declarations/src/components';

import { InputRoot } from '~/components/InputRoot';

import { AngleDown, Close, IconContainer, RemoveMultiValueIconContainer, SelectRoot } from './style';
import { Props } from './type';

const components: SelectComponentsConfig<any, any, any> = {
  // eslint-disable-next-line react/prop-types
  ClearIndicator: ({ clearValue }) => (
    <IconContainer onClick={clearValue}>
      <Close />
    </IconContainer>
  ),
  DropdownIndicator: () => (
    <IconContainer>
      <AngleDown />
    </IconContainer>
  ),
  // eslint-disable-next-line react/prop-types
  MultiValueRemove: ({ innerProps: { onClick } }) => (
    <RemoveMultiValueIconContainer onClick={onClick}>
      <Close color="white" />
    </RemoveMultiValueIconContainer>
  ),
};

export const Select: FC<Props> = (props) => {
  const id = useMemo(() => `select-${props.name}`, [props.name]);

  const noOptionsMessage = useCallback(
    () => props.noOptionsMessage || 'Nenhuma opção encontrada',
    [props.noOptionsMessage]
  );

  return (
    <InputRoot {...props} elementId={id}>
      <SelectRoot
        autoFocus={props.autoFocus}
        components={components}
        id={id}
        isDisabled={props.disabled}
        isLoading={props.isLoading}
        isMulti={props.isMulti}
        isSearchable={props.isSearchable}
        menuIsOpen={props.menuIsOpen}
        name={props.name}
        noOptionsMessage={noOptionsMessage}
        onChange={props.onChange}
        onMenuClose={props.onMenuClose}
        onMenuOpen={props.onMenuOpen}
        options={props.options}
        placeholder={props.placeholder}
        value={props.value}
      />
    </InputRoot>
  );
};
