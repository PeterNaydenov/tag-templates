"use strict";function t(t){this.settings.debug&&console.error(t)}const e={TG_PRX:"{{",TG_SFX:"}}",TG_SIZE_P:2,TG_SIZE_S:2,DV:":",debug:!1};function n(t){return t.includes("\n")?t.trim().split("\n"):t.trim().split(" ")}function i(t,e){const n={};return t.join(" ").trim().replace(/(\s{3,})/gim,"|||").split("|||").forEach(((t,i)=>{let[r,s]=t.split(e);r=r.trim(),s=s.trim(),n[r]||(n[r]=s)})),n}function r(r,s){r.TG_PRX&&(r.TG_SIZE_P=r.TG_PRX.length),r.TG_SFX&&(r.TG_SIZE_S=r.TG_SFX.length);let l={...e,...r};return this.settings=l,this.addTemplate=function(t){return function(){let e=null,n=[],i=1,r=null;for(let t of arguments[0])""===t.replace(/^\n+|\n$/g,"").trim()&&(t=arguments[i],i++),e||(t=t.replace(/^\n+|\n$/g,"").trim(),r=t.split(" "),e=r.shift().trim()),!r&&t&&(r=t.split(" ")),n=n.concat(r),r=null;t[e]=this._chopTemplate(n.join(" ").trim())}}(s),this.showTemplateNames=function(t){return function(){return Object.keys(t)}}(s),this.render=function(t,e){return function(){let r=this,{TG_PRX:s,TG_SIZE_P:l,TG_SIZE_S:u,DV:o}=e,c=null,f=1,_=null,a={};for(let t of arguments[0])if(""===t.replace(/^\n+|\n$/g,"").trim()&&arguments[f]&&(t=arguments[f].trim(),f++),c)t&&n(t).map((t=>{t.match(/:$/)?(a[t.slice(0,-1).trim()]=arguments[f].trim(),f++):t&&(a=Object.assign({},i([t],o),a))}));else{t=t.replace(/^\n+|\n$/g,"").trim(),_=t.split(" "),c=_.shift().trim();let e=_.join(" ").trim();e.match(/:$/)?(a[e.slice(0,-1).trim()]=arguments[f].trim(),f++):a=Object.assign({},i(_,o),a)}return t.hasOwnProperty(c)?t[c].map((t=>{let e=t.indexOf(s),n=t.length;if(-1!=e){let e=t.substr(l,n-l-u);return a[e]?a[e]:void r._debugger(`Missing data for placeholder "${e}"`)}return t})).join(""):(r._debugger(`Missing template "${c}"`),null)}}(s,l),this.dataRender=function(t,e){return function(n,i){let r=this,{TG_PRX:s,TG_SIZE_P:l,TG_SIZE_S:u}=e;return t.hasOwnProperty(n)?t[n].map((t=>{let e=t.indexOf(s),n=t.length;if(-1!=e){let e=t.substr(l,n-l-u);return i[e]?i[e]:void r._debugger(`Missing data for placeholder "${e}"`)}return t})).join(""):(r._debugger(`Missing template "${n}"`),null)}}(s,l),this._chopTemplate=function(t){return function e(n){const{TG_PRX:i,TG_SFX:r,TG_SIZE_P:s,TG_SIZE_S:l}=t;let u,o,c,f=[];if("string"!=typeof n)return[void 0];if(0==n.length)return[];if(u=n.indexOf(i),0<u&&f.push(n.slice(0,u)),-1==u)return f.push(n),f;{if(c=n.indexOf(i,u+s),o=n.indexOf(r),-1==o)return[void 0];if(o<u)return[void 0];if(o+=l,-1!=c&&c<o)return[void 0];f.push(n.slice(u,o));let t=e(n.slice(o));return f.concat(t)}}}(l),this._debugger=t,this}module.exports=function(t={}){return new r(t,{})};
