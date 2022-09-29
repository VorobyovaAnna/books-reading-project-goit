import React from 'react';
import LibraryForm from './LibraryForm/LibraryForm';
import MobileTable from './MobileTable/MobileTable';
import Table from './Table/Table';
import ReadTable from './ReadTable/ReadTable';
import { tableData } from './Table/data';
import { tableData2 } from './Table/data';
import { tableData3 } from './ReadTable/data';
import { useMatchMedia } from 'hooks';
import Container from 'components/Container';
import { StyledButton, StyledSection } from './LibraryComponent.styled';
import { useNavigate } from 'react-router-dom';

const LibraryComponent = () => {
  const { isMobile } = useMatchMedia();
  const navigate = useNavigate();

  console.log(isMobile);
  return (
    <Container>
      <StyledSection>
        <LibraryForm />
        {isMobile ? (
          <>
            <MobileTable title={'Прочитано'} status={false} data={tableData3} />
            <MobileTable title={'Читаю'} status={true} data={tableData} />
            <MobileTable
              title={'Маю намір прочитати'}
              status={false}
              data={tableData2}
            />
          </>
        ) : (
          <>
            <ReadTable title={'Прочитано'} status={false} data={tableData3} />
            <Table title={'Читаю'} status={true} data={tableData} />
            <Table
              title={'Маю намір прочитати'}
              status={false}
              data={tableData2}
            />
          </>
        )}
        <StyledButton
          type="primary"
          onClick={() => {
            navigate('/training');
          }}
        >
          Моє тренування
        </StyledButton>
      </StyledSection>
    </Container>
  );
};

export default LibraryComponent;
