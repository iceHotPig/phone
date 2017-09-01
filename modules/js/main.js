define('modules/js/main', function(require, exports, module) {

  //guidance
  'use strict';
  
  var guidance = {
  	init: function init() {
  		require(['modules/js/jquery','modules/js/swiper'], function ($, swiper) {
  			$(document).ready(function () {
  				var mySwiper = new Swiper('.swiper-container', {
  					autoplay: 2000, //可选选项，自动滑动
  					pagination: '.swiper-pagination',
  					paginationType: 'fraction'
  				});
  			});
  		});
  	}
  };
  
  //wait
  var wait = {
  	init: function init() {
  		require(['modules/js/jquery','modules/js/echarts'], function ($, echarts) {
  			$(document).ready(function () {
  				var myChart = echarts.init(document.getElementById('wait'));
  				// app.title = '环形图';
  				var options = {
  					tooltip: {
  						trigger: 'item',
  						formatter: "{a} <br/>{b}: {c} ({d}%)"
  					},
  					legend: {
  						orient: 'vertical',
  						x: 'left'
  					},
  					series: [{
  						name: '排队等待',
  						type: 'pie',
  						radius: ['60%', '70%'],
  						color: ['#0f0', '#6d89dd'],
  						avoidLabelOverlap: true,
  						label: {
  							normal: {
  								show: true,
  								position: 'center',
  								textStyle: {
  									fontSize: '20',
  									color: 'white'
  								}
  							},
  							emphasis: {
  								show: true,
  								textStyle: {
  									fontSize: '30',
  									fontWeight: 'bold'
  								}
  							}
  						},
  						labelLine: {
  							normal: {
  								show: false
  							}
  						},
  						data: [{ value: 38, name: '还有38位' }, { value: 62, name: '请耐心等待' }]
  					}]
  				};
  				myChart.setOption(options);
  			});
  		});
  	}
  };
  
  //index
  // var index = {
  //   init:function(){
  //   	$(document).ready(function(){
  //   		require(['jquery','bscroll'],function($,bscroll){
  //   			var iindex = $('oindex');
  //   			var  scroll = new BScroll(wrapper);
  //   		})
  //   	})
  //   }
  // }
  
  exports.guidance = guidance;
  exports.wait = wait;
  // exports.index = index;

});
