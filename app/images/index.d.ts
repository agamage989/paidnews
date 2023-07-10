declare module '*.jpg' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}

declare module '*.png' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
}

declare module '*.svg' {
    import {SvgProps} from 'react-native-svg';
    const content: React.StatelessComponent<SvgProps>;
    export default content;
  }