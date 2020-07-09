import React from 'react';
import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;

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
                    Content of card tab 1
                </TabPane>
                <TabPane tab="文章写作" key="2">
                    Content of card tab 2
                </TabPane>
            </Tabs>
          </div>
        );
      }
}
export default ArtList