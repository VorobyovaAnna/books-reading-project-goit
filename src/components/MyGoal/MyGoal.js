import { useState } from 'react';

import {
  NumberContainer,
  List,
  Item,
  Number,
  Text,
  Title,
  Section,
} from './MyGoal.styled';
import React from 'react';

const MyHeader = () => {
  const books = 0;
  const days = 0;
  const [booksLeft, setBooksleft] = useState(0);
  return (
    <>
      <Section>
        <Title>Моя мета прочитати</Title>
        <NumberContainer>
          <List>
            <Item>
              <Number>{books}</Number>
              <Text>Кількість книжок</Text>
            </Item>
            <Item>
              <Number>{days}</Number>
              <Text>Кількість днів</Text>
            </Item>
            {booksLeft !== 0 && (
              <Item>
                <Number>{booksLeft}</Number>
                <Text>Залишилось книжок</Text>
              </Item>
            )}
          </List>
        </NumberContainer>
      </Section>
    </>
  );
};

export default MyHeader;
