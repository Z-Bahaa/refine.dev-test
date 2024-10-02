// src/pages/videoDurations/edit.jsx
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const VideoDurationEdit = () => {
  const { formProps, saveButtonProps, formLoading } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
      <Form.Item label="Image URL" name="imageUrl">
        <Input />
      </Form.Item>
      <Form.Item label="Order" name="order">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Value" name="value">
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Price (Amount)" name={["price", "amount"]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item label="Currency" name={["price", "currency"]}>
        <Input />
      </Form.Item>
    </Form>
    </Edit>
    
  );
};
