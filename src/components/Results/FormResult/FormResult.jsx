import { Input } from 'antd';
import useDeleteTraining from 'hooks/useDeleteTraining';
import useTrainingFinished from 'hooks/useIsTrainingFinished';
import moment from 'moment';
import {
  Label,
  FormStyled,
  LabelList,
  DataPickerStyled,
  ButtonStyled,
} from './FormResult.styled';

const FormResult = ({ onSubmit, form, start, finish }) => {
  const { isTrainingFinished } = useTrainingFinished();
  const { deleteTraining } = useDeleteTraining();
  return (
    <FormStyled
      form={form}
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 10,
      }}
      layout="horizontal"
      onFinish={onSubmit}
    >
      <LabelList>
        <Label
          name="date"
          label="Дата"
          rules={[
            {
              required: true,
              message: 'Please input date!',
            },
          ]}
        >
          <DataPickerStyled
            size="110px"
            placeholder=""
            disabled={!!isTrainingFinished}
            disabledDate={current => {
              return (
                moment(current).isBefore(moment(start), 'day') ||
                moment(current).isAfter(moment(finish), 'day') ||
                moment(current).isBetween(
                  moment(),
                  moment(finish).add(1, 'day')
                )
              );
              //
            }}
          />
        </Label>
        <Label
          name="pages"
          label="К-сть сторінок"
          rules={[
            {
              required: true,
              message: 'Please input pages!',
            },
          ]}
        >
          <Input />
        </Label>
      </LabelList>
      {!isTrainingFinished ? (
        <ButtonStyled htmlType="submit">Button</ButtonStyled>
      ) : (
        <ButtonStyled onClick={deleteTraining}>
          Почати нове тренування
        </ButtonStyled>
      )}
    </FormStyled>
  );
};

export default FormResult;
