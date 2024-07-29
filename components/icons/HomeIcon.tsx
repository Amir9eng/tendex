import { BottomTabProps } from '@/utils/types';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const HomeIcon = (props: BottomTabProps) => (
  <Svg width={18} height={17} fill="none" {...props}>
    <Path
      stroke={props.focused || '#71719D'}
      strokeWidth={1.125}
      d="m6.75 15.976-.188-2.632a2.444 2.444 0 1 1 4.875 0l-.188 2.632"
    />
    <Path
      stroke={props.focused || '#71719D'}
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="M1.764 9.386c-.265-1.723-.398-2.584-.072-3.348.326-.764 1.049-1.286 2.494-2.331l1.08-.78C7.064 1.626 7.963.976 9 .976s1.936.65 3.734 1.95l1.08.78c1.445 1.045 2.168 1.567 2.494 2.331.326.764.193 1.625-.072 3.348l-.225 1.47c-.376 2.442-.563 3.663-1.44 4.392-.875.728-2.156.728-4.717.728H8.146c-2.561 0-3.842 0-4.718-.729-.876-.728-1.063-1.95-1.439-4.392l-.225-1.469Z"
    />
  </Svg>
);
export default HomeIcon;
