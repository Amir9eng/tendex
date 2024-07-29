import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Modal } from 'react-native';

const ModalEl = ({
  children,
  visible = false,
  transparent = false,
  animate = false,
}: {
  children: ReactNode;
  visible: boolean;
  transparent?: boolean;
  animate?: boolean;
}) => {
  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType={animate ? 'slide' : 'none'}
    >
      <KeyboardAvoidingView className="flex-1">{children}</KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalEl;
