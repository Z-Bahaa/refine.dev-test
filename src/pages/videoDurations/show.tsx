// src/pages/videoDurations/show.jsx
import { DateField, MarkdownField, Show, TextField, } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography, Image } from "antd";

const { Title } = Typography;

export const VideoDurationShow = () => {
  // Fetch data for a specific record (based on ID)
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  // Render details of the record
  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Image"}</Title>
      <Image src={record?.imageUrl}/>
      <Title level={5}>{"Order"}</Title>
      <TextField value={record?.order} />
      <Title level={5}>{"Value"}</Title>
      <TextField value={record?.value} />
      <Title level={5}>{"Price"}</Title>
      <TextField value={record?.price?.amount + record?.price?.currency} />
    </Show>
  );
};
