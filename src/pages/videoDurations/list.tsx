// src/pages/videoDurations/list.jsx
import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export const VideoDurationList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
    // meta: {
    //   select: "*, categories(id,title)",
    // },
  });

  const { data: categoryData, isLoading: categoryIsLoading } = useMany({
    resource: "video_durations",
    ids:
      tableProps?.dataSource
        ?.map((item) => item?.categories?.id)
        .filter(Boolean) ?? [],
    queryOptions: {
      enabled: !!tableProps?.dataSource,
    },
  });

 

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column 
          dataIndex="imageUrl" 
          title="Image URL" 
          render={(value: any) => <img src={value} />}
        />
        <Table.Column dataIndex="order" title="Order" />
        <Table.Column dataIndex="value" title="Value" />
        <Table.Column dataIndex={["price", "amount"]} title="Price (Amount)" />
        <Table.Column dataIndex={["price", "currency"]} title="Currency" />
      
        
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
    
  );
};
