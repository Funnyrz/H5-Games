﻿/**
 * @author Suker
 */
var callAdSceneInGame, closeAdSceneInGame;
(function() {
	var _topFrameDom, _bottomFrameDom;
    callAdSceneInGame=function(game_code){
        crossAjax({
            url:server.advUrl,
            data:{
                game_code:game_code
            },
            type:'post',
            dataType:'json',
            success:function(res){
                if(res.count>0){
                    var advJsArray=[];
                    for(var i=0;i<res.items.length;i++){
                        var adv=res.items[i];
                        if(adv.adv_position==0){
                            continue;
                        }
                        if(adv.adv_switch!=1){
                            if(advJsArray.indexOf(adv.adv_url)==-1||true){
                                advJsArray.push(adv.adv_url);
                            }
                            showAdv(adv.adv_position==1?0:1,adv);
                        }
                    }
                    advJsArray.forEach(function(url){
                        var script=document.createElement('script');
                        script.onload=function(){
                            (adsbygoogle = window.adsbygoogle || []).push({});
                        };
                        script.src=url+'?rand='+Math.random();
                        document.body.appendChild(script);
                    })
                }
            }
        });
    };
	//打开游戏内广告条
     function showAdv(style,advConfig) {
         var baseUrl=publicResourceLoader.getPath()+'resource/img/';
		switch (style) {
			case 0: //在上面显示广告条
			default:
				if (!_topFrameDom) {
					_topFrameDom = document.createElement('div');
					_topFrameDom.style.position = 'absolute';
					_topFrameDom.style.zIndex = 1000000;
					_topFrameDom.style.left = '0px';
					_topFrameDom.style.width = '100%';
					_topFrameDom.style.height = '50px';
					_topFrameDom.style.background = 'url('+baseUrl+'adSceneLogo2.png) no-repeat';
					_topFrameDom.style.Transition = '-webkit-transform 1s';
					_topFrameDom.style.WebkitTransition = '-webkit-transform 1s';
					_topFrameDom.style.MozTransition = '-moz-transform 1s';
					_topFrameDom.style.OTransition = '-o-transform 1s';
					_topFrameDom.style.MSTransition = '-ms-transform 1s';
					if (document.body) {
						document.body.appendChild(_topFrameDom);
						_topFrameDom.onmouseup = function(e) {
							if (e.target.id == 'closeBtnTop') {
								closeAdSceneInGame(0);
							}
						};
						_topFrameDom.ontouchend = _topFrameDom.onmouseup;
					}
				}

				_topFrameDom.style.top = '-50px';
				_topFrameDom.innerHTML = [
					'<div style="float:left;width:84%;height:50px;">',
					'	<!-- duopaoAdScene4 -->',
					'	<ins class="adsbygoogle"',
					'	     style="display:block;height:100%;"',
					'	     data-ad-client="'+advConfig.adv_client+'"',
					'	     data-ad-slot="'+advConfig.adv_slot+'"',
					'	     data-ad-format="auto"></ins>',
					'</div>',
					'<div style="float:left;width:16%;height:50px;text-align:right;"><input id="closeBtnTop" type="button" value="" style="width:50px;height:50px;background:url('+baseUrl+'closeBtn1.png);border:0px;outline:none;" /></div>'
				].join('');
				setTimeout(function() {
					_topFrameDom.style.Transform = 'translate3d(0px, 50px, 0px)';
					_topFrameDom.style.WebkitTransform = 'translate3d(0px, 50px, 0px)';
					_topFrameDom.style.MozTransform = 'translate3d(0px, 50px, 0px)';
					_topFrameDom.style.OTransform = 'translate3d(0px, 50px, 0px)';
					_topFrameDom.style.MSTransform = 'translate3d(0px, 50px, 0px)';
				}, 100);
				break;
			case 1: //在下面显示广告条
				if (!_bottomFrameDom) {
					_bottomFrameDom = document.createElement('div');
					_bottomFrameDom.style.position = 'absolute';
					_bottomFrameDom.style.zIndex = 1000000;
					_bottomFrameDom.style.left = '0px';
					_bottomFrameDom.style.width = '100%';
					_bottomFrameDom.style.height = '50px';
					_bottomFrameDom.style.background = 'url('+baseUrl+'adSceneLogo2.png) no-repeat';
					_bottomFrameDom.style.transition = '-webkit-transform 1s';
					_bottomFrameDom.style.WebkitTransition = '-webkit-transform 1s';
					_bottomFrameDom.style.MozTransition = '-moz-transform 1s';
					_bottomFrameDom.style.OTransition = '-o-transform 1s';
					_bottomFrameDom.style.MSTransition = '-ms-transform 1s';
					if (document.body) {
						document.body.appendChild(_bottomFrameDom);
						_bottomFrameDom.onmouseup = function(e) {
							if (e.target.id == 'closeBtnBottom') {
								closeAdSceneInGame(1);
							}
						};
						_bottomFrameDom.ontouchend = _bottomFrameDom.onmouseup;
					}
				}
				_bottomFrameDom.style.top = (window.innerHeight) + 'px';
				_bottomFrameDom.innerHTML = [
					'<div style="float:left;width:84%;height:50px;">',
					'	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>',
					'	<!-- duopaoAdScene5 -->',
					'	<ins class="adsbygoogle"',
					'	     style="display:block"',
					'	     data-ad-client="ca-pub-38682934rsfw1255151"',
					'	     data-ad-slot="50367fwsds2228"',
					'   	  data-ad-format="auto"></ins>',
					'	<script>',
					'	(adsbygoogle = window.adsbygoogle || []).push({});',
					'	</script>',
					'</div>',
					'<div style="float:left;width:16%;height:50px;text-align:right;"><input id="closeBtnBottom" type="button" value="" style="width:50px;height:50px;background:url('+baseUrl+'closeBtn1.png);border:0px;outline:none;" /></div>'
				].join('');
				setTimeout(function() {
					_bottomFrameDom.style.Transform = 'translate3d(0px, -50px, 0px)';
					_bottomFrameDom.style.WebkitTransform = 'translate3d(0px, -50px, 0px)';
					_bottomFrameDom.style.MozTransform = 'translate3d(0px, -50px, 0px)';
					_bottomFrameDom.style.OTransform = 'translate3d(0px, -50px, 0px)';
					_bottomFrameDom.style.MSTransform = 'translate3d(0px, -50px, 0px)';
				}, 100);
				break;
		}
	};
	
	//关闭
	closeAdSceneInGame = function(style) {
		switch (style) {
			case 0: //在上面显示广告条
			default:
				if (_topFrameDom) {
					if (document.body) {
						document.body.removeChild(_topFrameDom);
						_topFrameDom = null;
					}
				}
				break;
			case 1: //在下面显示广告条
				if (_bottomFrameDom) {
					if (document.body) {
						document.body.removeChild(_bottomFrameDom);
						_bottomFrameDom = null;
					}
				}
				break;
		}
	};
})();
