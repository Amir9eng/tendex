import { NavigationProp } from '@react-navigation/native';
import { SvgProps } from 'react-native-svg';

export type RootStackParamList = {
  Login: undefined;
  TabNavigator: undefined;
  ResetPassword: undefined;
  Otp: undefined;
  ChangePassword: undefined;
  Signup: undefined;
  PersonalInfo: undefined;
  Success: undefined;
  VerifyEmail: undefined;
};

export type BottomTabParamsList = {
  Home: undefined;
  Calendar: undefined;
  News: undefined;
  Settings: undefined;
  QrCode: undefined;
};

export interface BottomTabProps extends SvgProps {
  focused?: string;
}

export type NavigationProps = NavigationProp<RootStackParamList>;
