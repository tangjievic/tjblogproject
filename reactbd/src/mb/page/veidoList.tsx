import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Drawer } from 'antd';
import veidoData from '../../tool/veidolist';
import '../style/veidolist.less';
const VeidoList :React.FC = ()=>{
    let [veidodata,setVeidodata] = useState([])
    const [visible, setVisible] = useState(false);
    let history = useHistory();
    let goBack = ()=>{
        history.goBack()
    }
    let openDrawer = (params:number) =>{
        setVisible(true);
        switch(params){
            case 1 :
                setVeidodata((veidoData as any).weappMoel)
                break
            default:
                break;
        }
    };
    const onClose = () => {
        setVisible(false);
    };
    //渲染视频列表
    let renderViedoList = (list:any[]) =>{
        list = list.map((item:any,index:number)=>{
            return (
                <li className="list_item" key={index}>
                    <a className="item_link" href={item.url} target="_blank" rel="noopener noreferrer">
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </a>
                </li>
            )
        })
        return list
    }
    return (
        <div className="mb-main__view art_page">
            <header className="view_header">
                <div className="hd_box">
                    <div className="hd_back" onClick={goBack}></div>
                    <div className="hd_title">
                        学习视频
                    </div>
                </div>
            </header>

            <ul className="my-center list setting">
                <li className="item" onClick={()=>openDrawer(1)}>
                    <i className="icontext weapp"></i>
                    <div className="label">微信小程序组件开发</div>
                </li>
           </ul>
           <div className="footer-blog_desc">TANGJIE-BLOG</div>
           <Drawer
                title="视频列表"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <ul className="blog-veido__list">
                    {renderViedoList(veidodata)}
                </ul>
            </Drawer>
        </div>
    )
}

export default VeidoList