import { MutableRefObject } from 'react';

import { GroupBase, Props as SelectProps } from 'react-select';

import { OwnProps as InputRootProps } from '~/components/InputRoot/type';

export interface Option<Value = string | number> {
  isDisabled?: boolean;
  label: string;
  value: Value;
}

export interface Props<Data = any> extends InputRootProps {
  autoFocus?: boolean;
  clearOnSelect?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  menuIsOpen?: boolean;
  name: string;
  noOptionsMessage?: string;
  onChange: SelectProps<Data, false, GroupBase<Data>>['onChange'];
  onMenuClose?: SelectProps<Data, false, GroupBase<Data>>['onMenuClose'];
  onMenuOpen?: SelectProps<Data, false, GroupBase<Data>>['onMenuOpen'];
  options: Option[];
  placeholder?: string;
  selectInputRef?: MutableRefObject<undefined>;
  value?: Option<Data>;
}
