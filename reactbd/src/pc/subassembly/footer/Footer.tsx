import React from 'react';
import qq from './qq.jpg';
import weixin from './weixn.png';
import './footer.less';
const BlogFooter:React.FC =  ()=>{
    return(
        <footer className="footer-wrrapper write_type">
            <ul className="footer-list">
                <li className="list-item">
                    <ul className="ft_mymsg">
                        <li>
                            <img src={qq} alt="QQ二维码"></img>
                            <div className="alert">扫码加qq</div>
                        </li>
                        <li>
                            <img src={weixin} alt="微信二维码"></img>
                            <div className="alert">扫码加微信</div>
                        </li>
                    </ul>
                    <dl className="ft_dl">
                        <dt>QQ邮箱：</dt>
                        <dd>981955667@qq.com</dd>
                        <dt>LOL-ID：</dt>
                        <dd>断剑丨折翼不斩人(艾欧尼亚)</dd>
                        <dt>版权信息：</dt>
                        <dd>Copyright © 2018-2020 tangjie. 当前呈现版本 6.0.2</dd>
                    </dl>
                </li>
                <li className="list-item">
                    <div className="other-modle item-boder">
                        <div className="modle_wrrapper">
                            <h4>其他模块</h4>
                            <ul>
                                <li>
                                    <a href="https://github.com/Tencent/omi"  rel="noopener noreferrer" target="_blank">腾讯omi框架</a>
                                </li>
                                <li>
                                    <a href="https://github.com/tangjievic/tjblogproject"  rel="noopener noreferrer" target="_blank">github</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="list-item friendlink">
                    <div className="other-modle">
                        <div className="modle_wrrapper">
                            <h4>友情链接</h4>
                            <ul>
                                <li>
                                    <a href="https://www.szbolinjz.com"  rel="noopener noreferrer" target="_blank">深圳柏林家政</a>
                                </li>
                                <li>
                                    <a href="https://sszfu.com"  rel="noopener noreferrer" target="_blank">十三州府博客</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="footer-desc">深圳柏林家政特别支持！！</div>
        </footer>
    )
}

export default BlogFooter