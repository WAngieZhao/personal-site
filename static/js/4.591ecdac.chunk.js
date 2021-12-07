(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[4],{44:function(t,e,i){t.exports=function(){"use strict";var t="millisecond",e="second",i="minute",n="hour",r="day",s="week",a="month",o="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,i){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(i)+t},m={s:f,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),n=Math.floor(i/60),r=i%60;return(e<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var n=12*(i.year()-e.year())+(i.month()-e.month()),r=e.clone().add(n,a),s=i-r<0,o=e.clone().add(n+(s?-1:1),a);return+(-(n+(i-r)/(s?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:u,w:s,d:r,D:c,h:n,m:i,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",p={};p[g]=d;var $=function(t){return t instanceof b},v=function(t,e,i){var n;if(!t)return g;if("string"==typeof t)p[t]&&(n=t),e&&(p[t]=e,n=t);else{var r=t.name;p[r]=t,n=r}return!i&&n&&(g=n),n||!i&&g},y=function(t,e){if($(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new b(i)},w=m;w.l=v,w.i=$,w.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function d(t){this.$L=v(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var r=n[2]-1||0,s=(n[7]||"0").substring(0,3);return i?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return w},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var i=y(t);return this.startOf(e)<=i&&i<=this.endOf(e)},f.isAfter=function(t,e){return y(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<y(t)},f.$g=function(t,e,i){return w.u(t)?this[e]:this.set(i,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var l=this,h=!!w.u(o)||o,d=w.p(t),f=function(t,e){var i=w.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?i:i.endOf(r)},m=function(t,e){return w.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},g=this.$W,p=this.$M,$=this.$D,v="set"+(this.$u?"UTC":"");switch(d){case u:return h?f(1,0):f(31,11);case a:return h?f(1,p):f(0,p+1);case s:var y=this.$locale().weekStart||0,b=(g<y?g+7:g)-y;return f(h?$-b:$+(6-b),p);case r:case c:return m(v+"Hours",0);case n:return m(v+"Minutes",1);case i:return m(v+"Seconds",2);case e:return m(v+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var l,h=w.p(s),d="set"+(this.$u?"UTC":""),f=(l={},l[r]=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[u]=d+"FullYear",l[n]=d+"Hours",l[i]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[h],m=h===r?this.$D+(o-this.$W):o;if(h===a||h===u){var g=this.clone().set(c,1);g.$d[f](m),g.init(),this.$d=g.set(c,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[w.p(t)]()},f.add=function(t,o){var c,l=this;t=Number(t);var h=w.p(o),d=function(e){var i=y(l);return w.w(i.date(i.date()+Math.round(e*t)),l)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===r)return d(1);if(h===s)return d(7);var f=(c={},c[i]=6e4,c[n]=36e5,c[e]=1e3,c)[h]||1,m=this.$d.getTime()+t*f;return w.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=w.z(this),r=this.$locale(),s=this.$H,a=this.$m,o=this.$M,u=r.weekdays,c=r.months,l=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},d=function(t){return w.s(s%12||12,t,"0")},f=r.meridiem||function(t,e,i){var n=t<12?"AM":"PM";return i?n.toLowerCase():n},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:w.s(o+1,2,"0"),MMM:l(r.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:l(r.weekdaysMin,this.$W,u,2),ddd:l(r.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:w.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:n};return i.replace(h,(function(t,e){return e||m[t]||n.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var h,d=w.p(c),f=y(t),m=6e4*(f.utcOffset()-this.utcOffset()),g=this-f,p=w.m(this,f);return p=(h={},h[u]=p/12,h[a]=p,h[o]=p/3,h[s]=(g-m)/6048e5,h[r]=(g-m)/864e5,h[n]=g/36e5,h[i]=g/6e4,h[e]=g/1e3,h)[d]||g,l?p:w.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),n=v(t,e,!0);return n&&(i.$L=n),i},f.clone=function(){return w.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),D=b.prototype;return y.prototype=D,[["$ms",t],["$s",e],["$m",i],["$H",n],["$W",r],["$M",a],["$y",u],["$D",c]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,b,y),t.$i=!0),y},y.locale=v,y.isDayjs=$,y.unix=function(t){return y(1e3*t)},y.en=p[g],y.Ls=p,y.p={},y}()},54:function(t,e,i){"use strict";i.r(e);var n=i(0),r=(i(1),i(5)),s=i(20),a=i(44),o=i.n(a),u=function(t){var e=t.data;return Object(n.jsx)("div",{className:"cell-container",children:Object(n.jsxs)("article",{className:"mini-post",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h3",{children:Object(n.jsx)("a",{href:e.link,children:e.title})}),Object(n.jsx)("time",{className:"published",children:o()(e.date).format("MMMM, YYYY")})]}),Object(n.jsx)("a",{href:e.link,className:"image",children:Object(n.jsx)("img",{src:"".concat("/personal-site").concat(e.image),alt:e.title})}),Object(n.jsx)("div",{className:"description",children:Object(n.jsx)("p",{children:e.desc})})]})})},c=[{title:"Water Occlusion Detection in Aerial LiDAR Point Clouds",subtitle:"2019 NYU CUSP Research Project with Dr. Debra F. Laefer",image:"/images/projects/Water.png",link:"https://github.com/WAngieZhao/Water-Occlusion-Detection-in-Aerial-LiDAR-Point-Clouds",date:"2019-06-01",desc:"Developed an algorithm that locates and extracts water occlusion outline by testing return time and horizontal distributions of the LIDAR points. Time gaps between points were used to locate the existence of occlusions, and water occlusion was specified by clustering and testing z-coordination standard deviation. The algorithm generated 90% of occlusions caused by water with different levels of outline complexity."},{title:"Aerial Lidar Data Restoration with Convolutional Neural Network",subtitle:"2020 NYU CUSP Research Project with Dr. Debra F. Laefer",link:"https://github.com/mihamerstan/D-FCN",image:"/images/projects/D-FCN.png",date:"2020-06-01",desc:"Altering the D-FCN (Directionally Constrained Fully Convolutional Neural Network For Airborne Lidar Point Cloud Classification) model to apply on high density aerial LIDAR data set with high accuracy. Planning on using output result to remove unwanted vehicles and restore road surface data. "},{title:"Solidary Cafe",subtitle:"girls.exe\u2019s Hack the Gap - Most Innovative Hack",link:"https://github.com/ziyanan/SolidarityCafe",image:"/images/projects/SolidarityCafe.png",date:"2021-06-01",desc:"SolidarityCafe is an online chat room app for women solidarity and support. Developed by women and designed for women. We would like to support mental health for women by providing a platform for women to seek and lend. help when they need someplace to confide their concerns and release their pressures and depressions. SolidarityCafe is coded with PHP, MySQL and javascript."},{title:"CourXive",subtitle:"Course project for CS-UY4523 Design Project",link:"https://github.com/ziyanan/CourXive",image:"/images/projects/CourXive.png",date:"2021-11-01",desc:"CourXive is a platform that offers online learning navigation including course comparison and recommendation. Developed by women and designed for women. We aim at integrating online courses and study materials from various learning websites. No matter you are a student at school, a professional, or an individual learner, there is no need to look around for your best fit on different learning websites separately."},{title:"Automatic 15 Puzzle Solver with A* Search",subtitle:"Coursework for CS-UY4613 Artificial Intelligence",image:"/images/projects/15Puzzle.png",link:"https://drive.google.com/drive/folders/1Vea8bndyIHnkz3_KTwmESJxWkCGrKo4y?usp=sharing",date:"2020-04-01",desc:"Implemented the A* Search Algorithm with Graph Search for solving the 15-puzzle problem. "},{title:"Automatic Futoshiki Solver with Back Tracking Algorithm",subtitle:"Coursework for CS-UY4613 Artificial Intelligence",image:"/images/projects/Futoshiki.png",link:"https://drive.google.com/drive/folders/1Ig963jA3xleC8g3iV-amZ4DoUEe4hwZO?usp=sharing",date:"2020-05-01",desc:"Designed and implemented a program to solve 6 \xd7 6 Futoshiki puzzles with Back Tracking Algorithm. "}];e.default=function(){return Object(n.jsx)(s.a,{title:"Projects",description:"Learn about Wangyue (Angie) Zhao's projects.",children:Object(n.jsxs)("article",{className:"post",id:"projects",children:[Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/projects",children:"Projects"})}),Object(n.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),c.map((function(t){return Object(n.jsx)(u,{data:t},t.title)}))]})})}}}]);
//# sourceMappingURL=4.591ecdac.chunk.js.map