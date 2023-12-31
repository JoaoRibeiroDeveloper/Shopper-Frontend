export interface ITheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    white: string;
    mediumGray: string;
    strongGray: string;
    mediumDark: string;
  };
  font: {
    family: {
      default: string;
      secondary: string;
    };
    sizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  };
  media: {
    lteMedium: string;
  };
  spacings: {
    xsmall: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    huge: string;
    xhuge: string;
  };
}
