"use strict";function getTimeRemaining(a){var b=Date.parse(a)-Date.parse(new Date),c=Math.floor(b/1e3%60),d=Math.floor(b/1e3/60%60),e=Math.floor(b/36e5%24),f=Math.floor(b/864e5);return{total:b,days:f,hours:e,minutes:d,seconds:c}}function initializeClock(a,b){function c(){var a=getTimeRemaining(b);e.innerHTML=a.days,f.innerHTML=("0"+a.hours).slice(-2),g.innerHTML=("0"+a.minutes).slice(-2),h.innerHTML=("0"+a.seconds).slice(-2),a.total<=0&&clearInterval(i)}var d=document.getElementById(a),e=d.querySelector(".days"),f=d.querySelector(".hours"),g=d.querySelector(".minutes"),h=d.querySelector(".seconds");c();var i=setInterval(c,1e3)}function initMap(){var a=[{stylers:[{hue:"#455A64"},{saturation:-75}]}],b=new google.maps.StyledMapType(a,{name:"Styled Map"}),c={lat:42.960324,lng:-85.667779},d={zoom:15,center:c,draggable:!1,scrollwheel:!1,scaleControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.LEFT_BOTTOM},streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_BOTTOM},mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,"map_style"]}},e=document.getElementById("map-text"),f=new google.maps.Map(document.getElementById("map"),d);new google.maps.Marker({position:c,map:f,title:"Google I/O"});f.mapTypes.set("map_style",b),f.setMapTypeId("map_style"),f.controls[google.maps.ControlPosition.LEFT_TOP].push(e)}angular.module("gdgWebappApp",["ngMaterial","ngRoute"]).controller("AppCtrl",["$scope","$document","$location","$window","$timeout","$interval","$mdSidenav","$anchorScroll",function(a,b,c,d,e,f,g,h){function i(){a.selectedIndex=a.selectedIndex+1,5===a.selectedIndex&&(a.selectedIndex=0)}a.go=function(a){c.path(a)},a.open=function(a){d.open(a)},a.scrollToTop=function(){d.scrollTo(0,0)},a.gotoElement=function(a){c.hash(a),h()},f(i,1e4),angular.element(d).bind("scroll",function(){var b=angular.element(document.querySelector(".gdg-Header")),c=angular.element(document.querySelector(".gdg-Toolbar")),d=c.scrollTop(),e=c.offset().top,f=c.outerHeight(),g=b.prop("offsetHeight");e+=f/2;var h=.9-(d-e+g)/g;c.css({opacity:h}),h>"1"?c.css({opacity:1}):"0">h&&c.css({opacity:0}),a.$apply()})}]).config(["$routeProvider","$mdThemingProvider",function(a,b){b.definePalette("gdgPalette",{50:"ECEFF1",100:"CFD8DC",200:"B0BEC5",300:"90A4AE",400:"78909C",500:"607D8B",600:"546E7A",700:"455A64",800:"37474F",900:"263238",A100:"FFFFFF",A200:"FFFFFF",A400:"FFFFFF",A700:"FFFFFF",contrastDefaultColor:"light"}),b.theme("default").primaryPalette("gdgPalette",{"default":"300","hue-1":"50","hue-2":"50","hue-3":"50"}).accentPalette("gdgPalette",{"default":"700","hue-1":"A100","hue-2":"A100","hue-3":"A100"})}]);var deadline=new Date(2016,4,18,7,59,59);initializeClock("clock",deadline);