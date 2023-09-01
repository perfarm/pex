import Select from 'react-select';

import { styled } from '~/theme';

export { AngleDown, Close } from '~/components/Icons';

export const IconContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  paddingX: '$2',
});

export const RemoveMultiValueIconContainer = styled(IconContainer, {
  cursor: 'pointer',
  marginLeft: '$1',
});

export const SelectRoot = styled(Select, {
  border: 'none',
  fontSize: '$body5',
  outline: 'none',
  width: '100%',

  '& div[class*="-singleValue"], & div[class*="-Input"]': {
    color: '$gray',
  },

  '& div[class*="-placeholder"]': {
    color: '$gray',
  },

  '& div[class*="-multiValue"]': {
    backgroundColor: '$pastureGreen',
    borderRadius: '$2',
    padding: '4px 5px',
  },

  '& div[class*="-multiValue"] div': {
    color: '$white',
    padding: 0,
  },

  '& div[class*="-multiValue"] div[class*="-MultiValueRemove"]': {
    marginLeft: 3,
  },

  '& div[class*="-multiValue"] div[class*="-MultiValueRemove"]:hover': {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },

  '& div[class*="-IndicatorsContainer"]>div': {
    color: '$gray',
  },

  '& div[class*="-IndicatorsContainer"]>div:first-child': {
    cursor: 'pointer',
  },

  '& > span + div': {
    border: 'none',
    borderRadius: '$3',
    borderStyle: 'none',
    boxShadow: 'none',
    outline: 'none',
  },

  '& > div + div': {
    zIndex: '$modal',
  },

  '&:hover, &:focus, &:active': {
    '& > span + div': {
      borderRadius: '$3',
      borderStyle: 'none',
      boxShadow: 'none',
      outline: 'none',
    },
  },
});
