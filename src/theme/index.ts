import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

const perfarmBackground = '#eff4f2';

export const { config, createTheme, css, getCssText, globalCss, styled, theme } = createStitches({
  media: {
    lg: '(min-width: 1200px)',
    md: '(min-width: 900px)',
    sm: '(min-width: 600px)',
    xl: '(min-width: 1536px)',
    xs: '(min-width: 0px)',
  },
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',

      blackOpacity04: 'rgba(0, 0, 0, 0.04)',
      blackOpacity1: 'rgba(0, 0, 0, 0.1)',
      blackOpacity3: 'rgba(0, 0, 0, 0.3)',
      blackOpacity5: 'rgba(0, 0, 0, 0.5)',
      blackOpacity9: 'rgba(0, 0, 0, 0.9)',

      gray50: '#fafafa',
      gray100: '#f5f5f5',
      gray200: '#eeeeee',
      gray300: '#e0e0e0',
      gray400: '#bdbdbd',
      gray500: '#9e9e9e',
      gray600: '#757575',
      gray700: '#616161',
      gray800: '#424242',
      gray900: '#212121',

      perfarmBackground,
      perfarmLighterBlue: '#F0F8FF',

      darkGray: '#494949',
      gray: '#898989',
      lighterGray: '#F9F9F9',
      lightGray: '#EEEEEE',
      mediumGray: '#C4C4C4',

      pastureGreen: '#4BB066',
      pastureGreenDark: '#38844C',
      pastureGreenHover: '#449F5C',
      pastureGreenLight: '#D2EBD8',
      pastureGreenLighter: '#E4F3E8',
      pastureGreenWhitened: '#F6FBF7',

      warningRedAlert: '#F34E4E',
      warningRedDark: '#B63A3A',
      warningRedHover: '#DB4646',
      warningRedLight: '#FCD2D2',
      warningRedLighter: '#FDE5E5',
      warningRedWhitened: '#FEF6F6',

      resourceYellow: '#FFCC00',
      resourceYellowDark: '#DFA300',
      resourceYellowHover: '#EFB700',
      resourceYellowLight: '#FFF2BF',
      resourceYellowLighter: '#FFF8D9',
      resourceYellowWhitened: '#FFFDF2',
    },
    fonts: {
      montserrat: 'Montserrat',
    },
    fontSizes: {
      body1: '22px',
      body2: '20px',
      body3: '18px',
      body4: '16px',
      body5: '14px',
      body6: '12px',
      body7: '10px',
      description1: '30px',
      description2: '28px',
      description3: '26px',
      description4: '24px',
      display1: '176px',
      display2: '144px',
      display3: '120px',
      display4: '96px',
      headline1: '72px',
      headline2: '64px',
      headline3: '48px',
      headline4: '36px',
      headline5: '32px',
      headline6: '24px',
    },
    fontWeights: {
      bold: '700',
      extraBold: '800',
      extraLight: '200',
      light: '300',
      medium: '500',
      normal: '400',
      semiBold: '600',
      thin: '100',
    },
    letterSpacings: {
      body1: '0',
      body2: '0',
      body3: '0',
      body4: '0',
      body5: '0',
      body6: '0',
      body7: '0',
      description1: '-3%',
      description2: '-3%',
      description3: '-3%',
      description4: '-3%',
      display1: '-3%',
      display2: '-3%',
      display3: '-3%',
      display4: '-3%',
      headline1: '-3%',
      headline2: '-3%',
      headline3: '-3%',
      headline4: '-3%',
      headline5: '-3%',
      headline6: '-3%',
    },
    lineHeights: {
      body1: '27px',
      body2: '24px',
      body3: '22px',
      body4: '21px',
      body5: '17px',
      body6: '15px',
      body7: '12px',
      description1: '37px',
      description2: '34px',
      description3: '32px',
      description4: '29px',
      display1: '215px',
      display2: '176px',
      display3: '146px',
      display4: '117px',
      headline1: '88px',
      headline2: '78px',
      headline3: '59px',
      headline4: '44px',
      headline5: '39px',
      headline6: '29px',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '10px',
      4: '16px',
      5: '20px',
      round: '50%',
    },
    shadows: {
      1: '0 2px 4px 0px rgba(0, 0, 0, 0.2)',
      2: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
      perfarmBackground,
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
    },
    transitions: {
      easeInOut02: 'all 0.2s ease-in-out',
    },
    zIndices: {
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
  },
  utils: {
    fontX: (type: Stitches.PropertyValue<'fontSize'>) => ({
      fontSize: type,
      letterSpacings: type,
      lineHeight: type,
    }),
    hexToRgb: (color: Stitches.PropertyValue<'color'>): string => {
      let hex = (
        (color as any).startsWith('$')
          ? config.theme.colors[(color as any).replace('$', '') as unknown as keyof typeof config.theme.colors]
          : color
      ) as string;

      if (!hex || hex === 'none') {
        return '';
      }

      hex = hex.replace('#', '');

      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);

      return `${r}, ${g}, ${b}`;
    },
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value,
      marginTop: value,
    }),

    outlineColor: (color: Stitches.PropertyValue<'color'>) => {
      const rgb = config.utils.hexToRgb(color) as string;

      return {
        backgroundColor: `transparent`,
        border: `1px solid ${color as unknown as string}`,
        color: `${color as unknown as string}`,
        transition: 'background-color 0.1s',

        '&:hover': {
          backgroundColor: `rgba(${rgb}, 0.2)`,
          color,
        },

        '&:active': {
          backgroundColor: `rgba(${rgb}, 0.4)`,
        },
      };
    },
    textColor: (color: Stitches.PropertyValue<'color'>) => {
      const rgb = config.utils.hexToRgb(color) as string;

      return {
        backgroundColor: `transparent`,
        borderColor: 'transparent',
        color: `${color as unknown as string}`,

        '&:hover': {
          backgroundColor: `rgba(${rgb}, 0.2)`,
          color,
        },

        '&:active': {
          backgroundColor: `rgba(${rgb}, 0.4)`,
          transition: 'unset',
        },
      };
    },

    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingBottom: value,
      paddingTop: value,
    }),
  },
});
