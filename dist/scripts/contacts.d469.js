!function(e){function n(n){for(var t,i,c=n[0],u=n[1],s=n[2],d=0,l=[];d<c.length;d++)i=c[d],r[i]&&l.push(r[i][0]),r[i]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);for(f&&f(n);l.length;)l.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],t=!0,c=1;c<o.length;c++){var u=o[c];0!==r[u]&&(t=!1)}t&&(a.splice(n--,1),e=i(i.s=o[0]))}return e}var t={},r={3:0},a=[];function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,n,o){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(o,t,function(n){return e[n]}.bind(null,t));return o},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var f=u;a.push([120,0]),o()}({0:function(e,n,o){e.exports=o.p+"images/fon/laptop-common-fon.0cd6.jpg"},1:function(e,n,o){e.exports=o.p+"images/fon/mobile-common-fon.32c2.jpg"},120:function(e,n,o){"use strict";o.r(n);o(5),o(6),o(7),o(9),o(2),o(8),o(121);var t=o(27),r=o.n(t),a=o(67),i=o.n(a);!function(){ymaps.ready(function(){var e=new ymaps.Map("yandex-map",{center:[59.9636,30.2732],zoom:16});e.behaviors.disable("scrollZoom");var n=new ymaps.Placemark([59.96428,30.2735],{},{iconLayout:"default#image",iconImageHref:r.a,iconImageSize:[80,80],iconImageOffset:[-60,-40],cursor:"auto"}),o=new ymaps.Polyline([[59.96428,30.2731],[59.964358,30.273876],[59.963719,30.274693],[59.96326,30.273519]],{},{strokeColor:"#8b887d",strokeWidth:2,strokeStyle:"dot"}),t=new ymaps.Polyline([[59.963882,30.275045],[59.963763,30.27464]],{},{strokeColor:"#8b887d",strokeWidth:2,strokeStyle:"dot"}),a=new ymaps.Polyline([[59.964196,30.274412],[59.96414,30.274154]],{},{strokeColor:"#8b887d",strokeWidth:2,strokeStyle:"dot"}),c=new ymaps.Placemark([59.9625,30.2743],{},{iconLayout:"default#image",iconImageHref:i.a,iconImageSize:[50,30],iconImageOffset:[-25,-30],cursor:"auto"});e.geoObjects.add(o).add(t).add(a).add(c).add(n)})}()},121:function(e,n,o){},2:function(e,n,o){"use strict";var t=o(0),r=o.n(t),a=o(1),i=o.n(a);o(3);document.addEventListener("DOMContentLoaded",function(){var e=window.matchMedia("(max-width: 991px)");function n(){if(e.matches){var n=new Image;n.src=i.a,n.onload=function(){setTimeout(function(){document.body.style.backgroundImage="url(".concat(n.src,")")},0)}}if(!e.matches){var o=new Image;o.src=r.a,o.onload=function(){setTimeout(function(){document.body.style.backgroundImage="url(".concat(o.src,")")},0)}}}e.addListener(n),n()})},3:function(e,n,o){},4:function(e,n){e.exports=jQuery},67:function(e,n,o){e.exports=o.p+"images/icons/evacuator.7681.png"}});