import React from 'react';
import './App.css';
import Wetbtn,{ ButtonType,ButtonSize} from './components/btn/btn';
import { WetMenu,WetMenuItem} from './components/navmenu/menu';
function App() {
  return (
    <div className="App">
      <div style={{display:'none'}}>
        {/* <Wetbtn>我是普通按钮</Wetbtn>
        <Wetbtn disabled>我是普通禁用按钮</Wetbtn> */}
        <Wetbtn size={ButtonSize.Large} onClick={()=>{console.log('xxx')}}>我是超大按钮</Wetbtn>
        <Wetbtn>我是普通按钮</Wetbtn>
        <Wetbtn size={ButtonSize.Small}>我是小按钮</Wetbtn>
        <Wetbtn size={ButtonSize.Mini}>我在mini按钮</Wetbtn>
        <Wetbtn types={ButtonType.Primary}>我是普通按钮</Wetbtn>
        <Wetbtn types={ButtonType.Default}>我是普通按钮</Wetbtn>
        <Wetbtn types={ButtonType.Success}>我是普通按钮</Wetbtn>
        <Wetbtn types={ButtonType.Info}>我是普通按钮</Wetbtn>
        <Wetbtn types={ButtonType.Warn}>我是普通按钮</Wetbtn>
        <Wetbtn types={ButtonType.Risk}>我是普通按钮</Wetbtn>
      </div>
        {/* 导航展示 */}
      <div>
        <WetMenu defaultIndex={'1-4'}>
           <WetMenuItem index="1">sdafdsafds</WetMenuItem>
           <WetMenuItem index="1-3">dfdfd</WetMenuItem>
           <WetMenuItem disabled>eggeeeef</WetMenuItem>
           <WetMenuItem index="1-4">dfdfd</WetMenuItem>
        </WetMenu>
{/* 
        <WetMenu defaultIndex={0} mode={"vertical"}>
           <WetMenuItem index={0}>sdafdsafds</WetMenuItem>
           <WetMenuItem index={1}>dfdfd</WetMenuItem>
           <WetMenuItem index={2} disabled>eggeeeef</WetMenuItem>
        </WetMenu> */}
      </div>
    </div>
  );
}

export default App;
