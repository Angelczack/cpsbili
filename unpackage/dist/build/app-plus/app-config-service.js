
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/mobilelogin/mobilelogin","pages/reg/reg","pages/index/index","pages/shop/shop","pages/dongtai/dongtai","pages/my/my","pages/add/add","pages/setting/setting","pages/video/video","pages/demo/demo"],"window":{"enablePullDownRefresh":true,"onReachBottomDistance":50},"tabBar":{"selectedColor":"#ff9bb9","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"./static/tabbar/gitlab.png","selectedIconPath":"./static/tabbar/gitlab-select.png"},{"pagePath":"pages/shop/shop","text":"会员购","iconPath":"./static/tabbar/wind.png","selectedIconPath":"./static/tabbar/wind-select.png"},{"pagePath":"pages/add/add","text":"添加","iconPath":"./static/tabbar/add.png","selectedIconPath":"./static/tabbar/add.png"},{"pagePath":"pages/dongtai/dongtai","text":"动态","iconPath":"./static/tabbar/friend.png","selectedIconPath":"./static/tabbar/friend-select.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"./static/tabbar/tv.png","selectedIconPath":"./static/tabbar/tv-select.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"bilibili","compilerVersion":"3.8.4","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationStyle":"custom","animationType":"fade-in","background":"transparent","backgroundColor":"rgba(0,0,0,0)"}},{"path":"/pages/mobilelogin/mobilelogin","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/shop/shop","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/dongtai/dongtai","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/add/add","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/setting/setting","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/video/video","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/demo/demo","meta":{},"window":{"navigationStyle":"custom","enablePullDownRefresh":true}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
