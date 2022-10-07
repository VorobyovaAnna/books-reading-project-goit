import { WellDoneModalStyled, Text, Button } from './WellDoneModal.styled';
import { ReactComponent as ThumbUpIcon } from 'images/svg/thumbUp.svg';
import useDeleteTraining from 'hooks/useDeleteTraining';
import { useEffect, useState } from 'react';

export default function WellDoneModal({ status, onClose }) {
  const { deleteTraining } = useDeleteTraining();

  const handleNewTraining = () => {
    deleteTraining();
    onClose();
  };

  return (
    <>
      (
      <WellDoneModalStyled>
        <ThumbUpIcon style={{ fill: '#A6ABB9' }} />
        <Text>
          {(status === 'all' || status === 'pages') &&
            'Ти молодчина! Ти успішно закінчив тренування!'}
          {status === 'date' &&
            'Ти молодчина, але потрібно швидше!  Наступного разу тобі все вдасться'}
        </Text>
        <Button type="button" onClick={handleNewTraining}>
          Нове тренування
        </Button>
      </WellDoneModalStyled>
      )
    </>
  );
}
