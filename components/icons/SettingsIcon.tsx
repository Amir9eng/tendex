import { BottomTabProps } from '@/utils/types';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SettingsIcon = (props: BottomTabProps) => (
  <Svg width={17} height={16} fill="none" {...props}>
    <Path
      stroke={props.focused || '#74749F'}
      strokeWidth={1.125}
      d="M14.689 5.864c.605 1.042.907 1.563.907 2.136 0 .573-.302 1.094-.907 2.136l-1.443 2.487c-.602 1.038-.903 1.557-1.399 1.842-.495.285-1.096.285-2.298.285H6.643c-1.202 0-1.803 0-2.298-.285-.496-.285-.797-.804-1.4-1.842l-1.442-2.487C.898 9.094.596 8.573.596 8c0-.573.302-1.094.907-2.136l1.443-2.487c.602-1.038.903-1.557 1.398-1.842.496-.285 1.097-.285 2.299-.285h2.906c1.202 0 1.803 0 2.298.285.496.285.797.804 1.4 1.842l1.442 2.487Z"
    />
  </Svg>
);
export default SettingsIcon;
