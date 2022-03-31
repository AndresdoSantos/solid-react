import { ReactNode, useState } from 'react';
import Modal from 'react-modal';

interface IModalHolderProps {
  content: JSX.Element;
}

export function ModalHolder({ content }: IModalHolderProps) {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <button onClick={() => setVisibility(true)}>Show Modal</button>

      <Modal isOpen={visibility}>
        <div>{content}</div>
      </Modal>
    </>
  );
}
