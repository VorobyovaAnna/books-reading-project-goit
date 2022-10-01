import React from 'react';
import {
  AuthorInput,
  Box,
  FormItem,
  StyledBox,
  StyledButton,
  StyledForm,
  StyledInput,
  TitleInput,
  Wrapper,
} from './LibraryForm.styled';

import useForm from './useForm';

const LibraryForm = () => {
  const { form, onFinish, Fields, yupSync, isLoading } = useForm();

  return (
    <StyledForm
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
    >
      <Wrapper>
        <FormItem
          name={Fields.title.name}
          label={Fields.title.label}
          rules={[yupSync]}
        >
          <TitleInput placeholder="..." />
        </FormItem>
        <Box>
          <FormItem
            name={Fields.author.name}
            label={Fields.author.label}
            rules={[yupSync]}
          >
            <AuthorInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.publication.name}
            label={Fields.publication.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem
            name={Fields.pages.name}
            label={Fields.pages.label}
            rules={[yupSync]}
          >
            <StyledInput placeholder="..." />
          </FormItem>
        </Box>
      </Wrapper>
      <StyledBox>
        <StyledButton disabled={isLoading} htmlType="submit">
          Додати
        </StyledButton>
      </StyledBox>
    </StyledForm>
  );
};

export default LibraryForm;
