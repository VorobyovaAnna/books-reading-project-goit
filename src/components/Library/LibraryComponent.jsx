import LibraryForm from './LibraryForm/LibraryForm';
import MobileTable from './MobileTable/MobileTable';
import Table from './Table/Table';
import ReadTable from './ReadTable/ReadTable';
// import { tableData } from './Table/data';
// import { tableData2 } from './Table/data';
// import { tableData3 } from './ReadTable/data';
import Container from 'components/Container';
import { StyledButton, StyledSection } from './LibraryComponent.styled';

import useLibraryComponent from './useLibraryComponent';

const LibraryComponent = () => {
  const { isMobile, alreadyBooks, nowBooks, planBooks, navigate } =
    useLibraryComponent();

  console.log(alreadyBooks.length);

  return (
    <Container>
      <StyledSection>
        <LibraryForm />
        {isMobile ? (
          <>
            {!!alreadyBooks.length && (
              <MobileTable
                title={'Прочитано'}
                status={false}
                data={alreadyBooks}
              />
            )}
            {!!nowBooks.length && (
              <MobileTable title={'Читаю'} status={true} data={nowBooks} />
            )}
            {!!planBooks.length && (
              <MobileTable
                title={'Маю намір прочитати'}
                status={false}
                data={planBooks}
              />
            )}
          </>
        ) : (
          <>
            {!!alreadyBooks.length && (
              <ReadTable
                title={'Прочитано'}
                status={false}
                data={alreadyBooks}
              />
            )}

            {!!nowBooks.length && (
              <Table title={'Читаю'} status={true} data={nowBooks} />
            )}
            {!!planBooks.length && (
              <Table
                title={'Маю намір прочитати'}
                status={false}
                data={planBooks}
              />
            )}
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
