(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[939],{1040:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[entity]",function(){return t(9699)}])},309:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{xr:function(){return o},uc:function(){return s},hS:function(){return u},oP:function(){return c},Vd:function(){return E}});var a,i=[{year:"2020",total:74304064e3},{entity:"MAGA",value:1440407e3},{entity:"MCD",value:622959e3},{entity:"MINDEF",value:2702699e3},{entity:"MINEDUC",value:16522586425},{entity:"MEM",value:80992e3},{entity:"MINFIN",value:38124e4},{entity:"MINEX",value:577712e3},{entity:"MSPAS",value:7908657e3},{entity:"MINTRAB",value:797236e3},{entity:"USAC",value:1764252e3}].sort((function(e,n){if(e.value>n.value)return-1})),o=[["","% PRESUPUESTO",{role:"style"},{sourceColumn:0,role:"annotation",type:"string",calc:"stringify"}],["",i[2].value/i[0].total*100,"color: #737D89","2. ".concat(i[2].entity)],["",i[1].value/i[0].total*100,"color: #FEC97F","1. ".concat(i[1].entity)],["",i[3].value/i[0].total*100,"color: #F59A8E","3. ".concat(i[3].entity)]],s=[["","% PRESUPUESTO"]].concat(function(e){if(Array.isArray(e))return r(e)}(a=i.splice(4).map((function(e){var n=e.value/i[0].total*100;return[e.entity,{v:n,f:n.toString().substring(0,4)+" %"}]})))||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=[["","% EJECUTADO"],["MIDES",86],["MINFIN",73],["MSPAS",49],["MAGA",10],["MINEDUC",15],["MINGOB",30],["MINDEF",25],["CIV",1],["MCD",0]],c=[["","% EJECUTADO"],["018-COMPLEMENTO POR DIF. CAMBIARIO AL PERSONAL EN EL EXTERIOR",157.508725],["199-OTROS SERVICIOS",109.0115691],["151-ARRENDAMIENTO DE EDIFICIOS Y LOCALES",51.06189438],["451-TRANSFERENCIAS A LA ADMINISTRACI\xd3N CENTRAL",27.767911],["011-PERSONAL PERMANENTE",26.65507762]],E=[["TYPE","ENTITY","VALUE"],["MINEX",null,0],["01-ACTIVIDADES CENTRALES","MINEX",68259769],["11-SERVICIOS CONSULARES Y DE ATENCI\xd3N AL MIGRANTE","MINEX",211229231],["12-SERVICIOS DE POL\xcdTICA EXTERIOR","MINEX",229611507],["13-CONSERVACI\xd3N Y DEMARCACI\xd3N DE L\xcdMITES INTERNACIONALES DEL TERRITORIO NACIONAL","MINEX",14795190],["99-PARTIDAS NO ASIGNABLES A PROGRAMAS","MINEX",60876504]]},2853:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),a=t(7379);function i(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function o(){var e=i(["\n    width: auto;\n    height: inherit;\n    border-radius: 0.5rem;\n    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.6);\n"]);return o=function(){return e},e}function s(){var e=i(["\n    width: inherit;\n    padding: 0 0.5rem 1rem 0.5rem;\n    display: box;\n    justify-content: center;\n"]);return s=function(){return e},e}function u(){var e=i(["\n    padding: 1rem;\n"]);return u=function(){return e},e}var c=a.ZP.div(o()),E=a.ZP.div(s()),I=a.ZP.h1(u()),l=function(e){var n=e.title,t=(e.show,e.children);return(0,r.jsxs)(c,{children:[(0,r.jsx)(I,{children:n}),(0,r.jsx)(E,{children:t})]})}},9270:function(e,n,t){"use strict";t.d(n,{Q:function(){return r}});var r,a=t(5893),i=t(6887);!function(e){e.bar="ColumnChart",e.sidebar="Bar",e.table="Table",e.pie="PieChart",e.cube="TreeMap"}(r||(r={}));n.Z=function(e){var n=e.type,t=e.width,r=e.data,o=e.options;return(0,a.jsx)(i.kL,{chartType:n,width:t,height:"inherit",data:r,options:o})}},1573:function(e,n,t){"use strict";t.d(n,{Zs:function(){return r},Ot:function(){return a},Ep:function(){return i},OU:function(){return o},B3:function(){return s}});var r={bar:{groupWidth:"100%"},legend:{position:"none"},vAxis:{gridlines:{count:0},textPosition:"none"}},a={showRowNumber:!0,firstRowNumber:4,sort:!1,width:"100%"},i={width:"100%",sliceVisibilityThreshold:0,pieHole:.2,legend:{position:"left"},pieSliceText:"none",slices:{0:{color:"#8ED1FC",offset:.1},1:{color:"#F3B0C3"},2:{color:"#FFCCB6"},3:{color:"#FFFFB5"},4:{color:"#CBAACB"},5:{color:"#ABBEE6"}}},o={width:"100%",colors:["#FEC97F"],legend:{position:"none"},bars:"horizontal"},s={minColor:"#FFFFB5",midColor:"#F3B0C3",maxColor:"#8ED1FC",headerHeight:0,fontColor:"grey",showScale:!0}},6474:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(5893),a=t(1664),i=[[11130004,"MINISTERIO DE RELACIONES EXTERIORES","MINEX"],[11130005,"MINISTERIO DE GOBERNACI\xd3N","MINGOB"],[11130006,"MINISTERIO DE LA DEFENSA NACIONAL","MINDEF"],[11130007,"MINISTERIO DE FINANZAS P\xdaBLICAS","MINFIN"],[11130008,"MINISTERIO DE EDUCACI\xd3N","MINEDUC"],[11130009,"MINISTERIO DE SALUD P\xdaBLICA Y ASISTENCIA SOCIAL","MSPAS"],[11130010,"MINISTERIO DE TRABAJO Y PREVISI\xd3N SOCIAL","MINTRAB"],[11130011,"MINISTERIO DE ECONOM\xcdA","MINECO"],[11130012,"MINISTERIO DE AGRICULTURA, GANADER\xcdA Y ALIMENTACI\xd3N","MAGA"],[11130013,"MINISTERIO DE COMUNICACIONES, INFRAESTRUCTURA Y VIVIENDA","MCIV"],[11130014,"MINISTERIO DE ENERG\xcdA Y MINAS","MEM"],[11130015,"MINISTERIO DE CULTURA Y DEPORTES","MCD"],[11130017,"MINISTERIO DE AMBIENTE Y RECURSOS NATURALES","MARN"],[11130020,"MINISTERIO DE DESARROLLO SOCIAL","MIDES"],[11300006,"UNIVERSIDAD SAN CARLOS DE GUATEMALA","USAC"]],o=t(8484),s=t.n(o),u=i.map((function(e){return(0,r.jsx)(a.default,{href:"/".concat(e[2].toString().toLowerCase()),children:(0,r.jsx)("a",{className:s().aclass,children:e[2]})},e[0])})),c=function(){return(0,r.jsxs)("div",{className:s().navbar,children:[(0,r.jsxs)("div",{className:s().subnav,children:[(0,r.jsx)("div",{className:s().menu,children:(0,r.jsx)("a",{className:s().aclass,children:"MENU"})}),(0,r.jsxs)("div",{className:s().subnavcontent,children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:s().aclass,children:"HOME"})}),u]})]}),(0,r.jsxs)("div",{className:s().full,children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:s().aclass,children:"HOME"})}),u]})]})}},9699:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return O}});var r=t(5893),a=t(1163),i=t(6474),o=t(2853),s=t(9270),u=t(309),c=[["YEAR","MAGA","MCD","MINDEF","MINEDUC","MEM","MINFIN","MINEX","MSPAS","MINTRAB","USAC"],["2020",1440407e3,622959e3,2702699e3,16522586425,80992e3,38124e4,577712e3,7908657e3,797236e3,1764252e3],["2019",1440407e3,622959e3,2702699e3,16522586425,80992e3,38124e4,577712e3,7908657e3,797236e3,1764252e3],["2018",1085301224,559258e3,1908316e3,13937205078,80807100,359577187,442676e3,6897096196,664257e3,422e5],["2017",1085301224,559258e3,1908316e3,13937205078,80807100,359577187,442676e3,6897096196,664257e3,422e5],["2016",1264995615,445749326,2061647718,12892330703,70014770,317262379,399224512,5531691485,635838529,1889834139],["2015",1414e6,423735168,2100253199,12295590749,89956e3,332986894,402301e3,5647224460,634264100,1474512810]];var E=t(1573),I=1,l=2,A=3,N=4,S=5,d=6,f=7,M=8,C=9,R=10,O=function(){var e,n,t=(0,a.useRouter)().query.entity;switch(null===t||void 0===t?void 0:t.toString()){case"maga":e=I;break;case"mcd":e=l;break;case"mindef":e=A;break;case"mineduc":e=N;break;case"mem":e=S;break;case"minfin":e=d;break;case"minex":default:e=f;break;case"mspas":e=M;break;case"mintrab":e=C;break;case"usac":e=R}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(o.Z,{title:"\xbfSe le asigno mas Presupuesto?",children:(0,r.jsx)(s.Z,{data:(n=e,c.map((function(e){return[e[0],e[n]]}))),type:s.Q.sidebar,options:E.Zs})}),(0,r.jsx)(o.Z,{title:"\xbfEn que ejecutan sus ingresos?",children:(0,r.jsx)(s.Z,{data:u.oP,type:s.Q.pie,options:E.Ep})}),(0,r.jsx)(o.Z,{title:"\xbfQue importa mas para la entidad?",children:(0,r.jsx)(s.Z,{data:u.Vd,type:s.Q.cube,options:E.B3})})]})}},8484:function(e){e.exports={navbar:"navbar_navbar__9q1fQ",aclass:"navbar_aclass__9qQqD",subnav:"navbar_subnav__A3KlX",subnavbtn:"navbar_subnavbtn__GbkE_",subnavcontent:"navbar_subnavcontent__SJwT3",menu:"navbar_menu__5W5dG",full:"navbar_full__db_Fk"}},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,569,888,179],(function(){return n=1040,e(e.s=n);var n}));var n=e.O();_N_E=n}]);