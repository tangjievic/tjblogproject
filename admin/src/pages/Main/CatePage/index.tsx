import React from 'react';
import './index.less';
import { Tabs, Button,Table,Tag,Space} from 'antd';
import AddTage from './AddTage';
import AddCate from './AddCate';
const { TabPane } = Tabs;

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text:string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags:any) => (
        <>
          {tags.map((tag:any) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text:string, record:any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  

const CatePage:React.FC = (props)=>{
    return(
        <div>
            <Tabs defaultActiveKey="1" type="card" size='small'>
                <TabPane tab="栏目列表" key="1">
                    <div>
                        <div className="cate_add-btnwarpper">
                           <Button>添加栏目</Button>
                        </div>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </TabPane>
                <TabPane tab="标签列表" key="2">
                    <div>
                        <div className="cate_add-btnwarpper">
                           <Button>添加列表</Button>
                        </div>
                        <Table columns={columns} dataSource={data} />
                    </div>
                </TabPane>
            </Tabs>
            <AddTage></AddTage>
            <AddCate></AddCate>
        </div>
    )
}

export default CatePage