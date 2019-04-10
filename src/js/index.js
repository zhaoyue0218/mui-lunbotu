require.config({
	paths:{
	"mui":"libs/mui.min"
	}
})
require(["mui"],function(mui){
	//获得slider插件对象
	var gallery = mui('.mui-slider');
	gallery.slider({
		interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
	});
})