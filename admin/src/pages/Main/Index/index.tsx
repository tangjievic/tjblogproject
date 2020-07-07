import './index.less';

import React from 'react';
import MainLayout from '../../../layouts/MainLayout'

interface MainIndex {

}

const MainIndex: React.FC<MainIndex> = (props) => {


    return (
        <MainLayout>
            <div style={{
                height:'1600px'
            }}></div>
        </MainLayout>
    )
}

export default MainIndex