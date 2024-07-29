import { BottomTabProps } from '@/utils/types';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const CalendarIcon = (props: BottomTabProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <Path
      stroke={props.focused || '#71719D'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="M12.548.976v1.5m-9-1.5v1.5"
    />
    <Path
      stroke={props.focused || '#71719D'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.045 9.226h.006m-.006 3h.006m2.99-3h.007m-6 0h.007m-.007 3h.007"
    />
    <Path
      stroke={props.focused || '#71719D'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.125}
      d="M1.673 5.476h12.75M.923 8.659c0-3.268 0-4.902.939-5.918.94-1.015 2.45-1.015 5.473-1.015H8.76c3.023 0 4.535 0 5.474 1.015.939 1.016.939 2.65.939 5.918v.385c0 3.268 0 4.902-.94 5.917-.938 1.015-2.45 1.015-5.473 1.015H7.335c-3.022 0-4.534 0-5.473-1.015-.94-1.015-.94-2.65-.94-5.917v-.385ZM1.298 5.476h13.5"
    />
  </Svg>
);
export default CalendarIcon;
