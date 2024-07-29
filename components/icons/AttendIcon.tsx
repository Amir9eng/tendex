import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const AttendIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#579FF4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.821 5.862v3.2l1.2 1.2"
    />
    <Path
      stroke="#579FF4"
      strokeWidth={1.2}
      d="M14.858 12.625c1.309.707 1.963 1.06 1.963 1.637s-.654.93-1.963 1.638l-.892.481c-1.005.543-1.508.814-1.75.617-.592-.483.33-1.73.558-2.173.23-.447.225-.686 0-1.126-.227-.441-1.15-1.689-.558-2.172.242-.198.745.074 1.75.617l.892.481Z"
    />
    <Path
      stroke="#579FF4"
      strokeLinecap="round"
      strokeWidth={1.2}
      d="M9.642 17.02a8 8 0 1 1 7.02-6.358"
    />
  </Svg>
);
export default AttendIcon;
