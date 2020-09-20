import React from 'react';

interface LeftToolProps {

}

const leftTool:React.FC<LeftToolProps> =  (props)=>{
    return(
        <footer className="footer-wrrapper write_type">
            <ul className="footer-list"></ul>
            <div className="footer-desc">深圳柏林家政特别支持！！</div>
        </footer>
    )
}