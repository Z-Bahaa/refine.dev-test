import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const VideoDurationCreate = () => {
  const { formProps, saveButtonProps } = useForm();



  return (
    <Create saveButtonProps={saveButtonProps}>
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
      {/* <Button {...saveButtonProps}>Save</Button> */}
    </Form> 
    </Create>
  );
};

