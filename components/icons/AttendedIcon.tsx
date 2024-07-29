import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AttendedIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#2CDE6B"
      strokeWidth={1.2}
      d="M16.821 9.063a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"
    />
    <Path
      stroke="#2CDE6B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="m5.621 9.462 2 2 4.4-4.8"
    />
  </Svg>
);
export default AttendedIcon;
