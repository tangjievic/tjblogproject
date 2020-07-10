import React from 'react';
import { Tabs, Table,Tag,Space} from 'antd';
const { TabPane } = Tabs;

const CatePage:React.FC = (props)=>{
    return(
        <div>
            <Tabs defaultActiveKey="1" type="card" size='small'>
                <TabPane tab="栏目列表" key="1">
                    
                </TabPane>
                <TabPane tab="标签列表" key="2">
                    
                </TabPane>
            </Tabs>
        </div>
    )
}

export default CatePage