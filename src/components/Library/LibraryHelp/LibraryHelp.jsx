import { Button } from 'antd';
import React from 'react';

const LibraryHelp = ({ onClose }) => {
  return (
    <div>
      <Button onClick={onClose}>close</Button>
    </div>
  );
};

export default LibraryHelp;
