import React from 'react';
import { Tabs, Table,Tag,Space} from 'antd';
import ArtWrittem from './ArtWrittem';
const { TabPane } = Tabs;

const columns:any = [
    {
      title: 'Full Name',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Age',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
      width: 150,
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
      width: 150,
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
      width: 150,
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
      width: 150,
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
      width: 150,
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  const data:any = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edrward ${i}`,
      age: 32,
      address: `London Park no. ${i}`,
    });
  }
class ArtList extends React.Component{
    state = { size: 'small' };
    onChange = (e:any) => {
        this.setState({ size: e.target.value });
    };
    render() {
        let size:any = this.state.size;
        return (
          <div>
            <Tabs defaultActiveKey="2" type="card" size={size}>
                <TabPane tab="文章列表" key="1">
                    <Table scroll={{ x: 1500 }} columns={columns} dataSource={data} />
                </TabPane>
                <TabPane tab="文章写作" key="2">
                    <ArtWrittem></ArtWrittem>
                </TabPane>
            </Tabs>
          </div>
        );
      }
}
export default ArtList