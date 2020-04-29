import './mindex.less'
import '../../../static/fonts/iconfont/iconfont.css'
import '../../components/plugins/slidershow/index'
import sliderNav from '../../components/elements/headernav/index'
$(function () {
    $('.shutter').shutter({
      shutterW: '100%', // 容器宽度
      shutterH: '200', // 容器高度
      isAutoPlay: true, // 是否自动播放
      playInterval: 3000, // 自动播放时间
      curDisplay: 3, // 当前显示页
      fullPage: false // 是否全屏展示
    });
});
sliderNav();