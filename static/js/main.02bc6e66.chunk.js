(this["webpackJsonpnews-feed"]=this["webpackJsonpnews-feed"]||[]).push([[0],{53:function(e,n,t){e.exports=t(74)},58:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(11),i=t.n(r),s=(t(58),t(25)),l=t(42),c=t(43),u=t(48),m=t(47),f=t(18),p=t(101),d=t(4),h=t(110),g=t(103),w=t(104),b=t(105),v=t(106),E=t(108),j=t(109),O=t(107),_=t(32),y=t(30),I=t(46),M=t.n(I),F=t(45),C=t.n(F),k=Object(p.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:y.a[500]}}}));function x(e){var n=!1,t=!1;Object.keys(e.news.fileInfo).length>0&&(e.news.fileInfo.isImage?n=!0:t=!0);var a=k(),r=o.a.useState(!1),i=Object(s.a)(r,2),l=i[0],c=i[1],u=e.news.description.length-1;return o.a.createElement(h.a,{className:a.root},o.a.createElement(g.a,{avatar:o.a.createElement(j.a,{"aria-label":"recipe",className:a.avatar},"?"),action:o.a.createElement(O.a,{"aria-label":"settings"},o.a.createElement(C.a,null)),title:e.news.title,subheader:e.news.date}),n?o.a.createElement(w.a,{className:a.media,image:e.news.fileInfo.public_url,title:e.news.fileInfo.filename}):o.a.createElement("div",null),t?o.a.createElement(w.a,{component:"iframe",title:e.news.fileInfo.filename,src:e.news.fileInfo.public_url}):o.a.createElement("div",null),o.a.createElement(b.a,null,o.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},Object.keys(e.news.description).map((function(n){return function(e,n){return n==u?o.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},e):o.a.createElement(_.a,{variant:"body2",color:"textSecondary",component:"p"},o.a.createElement("b",null,e))}(e.news.description[n],n)})))),o.a.createElement(v.a,{disableSpacing:!0},o.a.createElement(O.a,{className:Object(d.a)(a.expand,Object(f.a)({},a.expandOpen,l)),onClick:function(){c(!l)},"aria-expanded":l,"aria-label":"show more"},o.a.createElement(M.a,null))),o.a.createElement(E.a,{in:l,timeout:"auto",unmountOnExit:!0},o.a.createElement(b.a,null,o.a.createElement(_.a,{paragraph:!0}),Object.keys(e.news.violations).map((function(n){return Object.keys(e.news.violations[n]).map((function(t){return function(e,n){return 0==n?o.a.createElement(_.a,{paragraph:!0},o.a.createElement("b",null,e)):o.a.createElement(_.a,{paragraph:!0},e)}(e.news.violations[n][t],t)}))})),o.a.createElement(_.a,null))))}var q=o.a.memo((function(e){return o.a.createElement("div",null,Object.keys(e.news).map((function(n){return o.a.createElement(x,{news:e.news[n]})})))}),(function(e,n){return e.news===n.news})),S=t(35),D=t.n(S);D.a.initializeApp({apiKey:"AIzaSyCCAhvWFvwuxDUXZ4aV-FhB_Dj-lp_frCw",authDomain:"electionsmonitor-5d008.firebaseapp.com",databaseURL:"https://electionsmonitor-5d008.firebaseio.com",projectId:"electionsmonitor-5d008",storageBucket:"electionsmonitor-5d008.appspot.com",messagingSenderId:"145410178875",appId:"1:145410178875:web:6cf434df68d3c65062811e",measurementId:"G-EXC8T9QXES"});var K,N=D.a,R=(K={"2. \u041e\u0431\u0449\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f / \u0416\u0430\u043b\u043f\u044b \u044d\u0441\u043a\u0435\u0440\u0442\u04af\u04af\u043b\u04e9\u0440:":"\u041e\u0431\u0449\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f","3. \u041e\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f / \u0416\u0430\u043b\u043f\u044b \u043c\u0430\u0430\u043b\u044b\u043c\u0430\u0442?":"\u041e\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043d\u0438\u044f","4. \u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435 / \u0423\u0447\u0430\u0441\u0442\u043e\u043a\u0442\u043e\u0433\u0443 \u043c\u044b\u0439\u0437\u0430\u043c \u0431\u0443\u0437\u0443\u0443\u043b\u0430\u0440":"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435","1. \u041a\u0430\u043a\u043e\u0435 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u0432\u044b \u0443\u0432\u0438\u0434\u0435\u043b\u0438 / \u041a\u0430\u043d\u0434\u0430\u0439 \u043c\u044b\u0439\u0437\u0430\u043c \u0431\u0443\u0437\u0443\u0443\u043d\u0443 \u0431\u0430\u0439\u043a\u0430\u043f \u043a\u0430\u043b\u0434\u044b\u04a3\u044b\u0437?":"\u0411\u044b\u043b\u0438 \u0437\u0430\u043c\u0435\u0447\u0435\u043d\u044b \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f","1. \u042f \u043d\u0430\u0445\u043e\u0436\u0443\u0441\u044c \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435 \u043d\u043e\u043c\u0435\u0440 / \u041c\u0435\u043d \u043d\u043e\u043c\u0435\u0440 __ \u0443\u0447\u0430\u0441\u0442\u043e\u0433\u0443\u043d\u0434\u0430\u043c\u044b\u043d:":"\u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u0438\u0431\u044b\u043b \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043e\u043a","3. \u041e\u0431\u0449\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f / \u0416\u0430\u043b\u043f\u044b \u044d\u0441\u043a\u0435\u0440\u0442\u04af\u04af\u043b\u04e9\u0440:":"\u041e\u0431\u0449\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f","6. \u0428\u0430\u0433\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u043b\u0438 \u0431\u044b\u0442\u044c \u0441\u0434\u0435\u043b\u0430\u043d\u044b \u0434\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0443\u0440\u043d / \u0423\u0440\u043d\u0430\u043b\u0430\u0440 \u0430\u0447\u044b\u043b\u0430 \u0442\u0443\u0440\u0433\u0430\u043d\u0433\u0430 \u0447\u0435\u0439\u0438\u043d\u043a\u0438 \u043a\u0430\u0434\u0430\u043c\u0434\u0430\u0440":"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u0434\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0443\u0440\u043d","7. \u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u043b\u0438\u0446\u0430 \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c / \u0410\u0442\u043a\u0430\u043c\u0438\u043d\u0435\u0440\u043b\u0435\u0440 \u0436\u0430\u043d\u0430 \u0430\u0447\u044b\u043a-\u0430\u0439\u043a\u044b\u043d\u0434\u044b\u043a":"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0434\u0441\u0447\u0435\u0442\u0430 \u0433\u043e\u043b\u043e\u0441\u043e\u0432","1. \u042f \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u0435\u043c \u0438 \u0432\u044b\u0448\u0435\u043b \u0438\u0437 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 \u0432 (\u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f) / \u041c\u0435\u043d \u0431\u0430\u0439\u043a\u043e\u043e\u0447\u0443 \u043a\u0430\u0442\u0430\u0440\u044b \u0438\u0448\u0442\u0435\u043f \u0431\u04af\u0442\u0442\u04af\u043c \u0436\u0430\u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043e\u043a\u0442\u043e\u043d \u0447\u044b\u043a\u0442\u044b\u043c (\u0441\u0430\u0430\u0442\u044b):":"\u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b \u0440\u0430\u0431\u043e\u0442\u0443 \u0438 \u043f\u043e\u043a\u0438\u043d\u0443\u043b \u0443\u0447\u0430\u0441\u0442\u043e\u043a","1. \u042f \u043f\u0440\u0438\u0448\u0451\u043b \u0434\u043e\u043c\u043e\u0439 \u0438 \u0441\u043e \u043c\u043d\u043e\u0439 \u0432\u0441\u0451 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 / \u041c\u0435\u043d \u04af\u0439\u0433\u04e9 \u043a\u0435\u043b\u0434\u0438\u043c, \u0431\u0430\u0430\u0440\u0434\u044b\u0433\u044b \u0436\u0430\u043a\u0448\u044b:":"\u041d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u0438\u0448\u0435\u043b \u0434\u043e\u043c\u043e\u0439 \u0441 \u043d\u0438\u043c \u0432\u0441\u0435 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435?","3. \u041a\u0430\u043a\u0438\u0435 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u0431\u044b\u043b\u0438 \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435 / \u0423\u0447\u0430\u0441\u0442\u043a\u0430\u0434\u0430 \u043a\u0430\u043d\u0434\u0430\u0439 \u044d\u0440\u0435\u0436\u0435 \u0431\u0443\u0437\u0443\u0443\u043b\u0430\u0440 \u0431\u0430\u0439\u043a\u0430\u043b\u0434\u044b?":"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435","4. \u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u0432\u043d\u0435 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 / \u0423\u0447\u0430\u0441\u0442\u043a\u0430\u043d\u044b\u043d \u0441\u044b\u0440\u0442\u044b\u043d\u0434\u0430\u0433\u044b \u044d\u0440\u0435\u0436\u0435 \u0431\u0443\u0437\u0443\u0443\u043b\u0430\u0440":"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u0432\u043d\u0435 \u0443\u0447\u0430\u0441\u0442\u043a\u0430","5. \u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435 / \u0423\u0447\u0430\u0441\u0442\u043a\u0430\u0434\u0430\u0433\u044b \u0448\u0430\u0439\u043b\u043e\u043e \u0442\u0430\u0440\u0442\u0438\u0431\u0438":"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u044b \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u0433\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u044f","6. \u0414\u0440\u0443\u0433\u0438\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u0438 \u0438 \u0438\u0437\u0431\u0438\u0440\u0430\u0442\u0435\u043b\u0438 \u0441\u043e\u043e\u0431\u0449\u0438\u043b\u0438 \u0432\u0430\u043c \u043e \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u043d\u0435 \u0432\u0438\u0434\u0435\u043b\u0438. \u041a\u0440\u0430\u0442\u043a\u043e \u043e\u043f\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043e \u043e\u043d\u0438 \u0441\u043a\u0430\u0437\u0430\u043b\u0438 / \u0411\u0430\u0448\u043a\u0430 \u0431\u0430\u0439\u043a\u043e\u043e\u0447\u0443\u043b\u0430\u0440 \u0436\u0430\u043d\u0430 \u0448\u0430\u0439\u043b\u043e\u043e\u0447\u0443\u043b\u0430\u0440\u0434\u0430\u043d \u043a\u0438\u043c\u0434\u0438\u0440 \u0431\u0438\u0440\u04e9\u04e9 \u0441\u0438\u0437 \u043a\u04e9\u0440\u0431\u04e9\u0433\u04e9\u043d \u044d\u0440\u0435\u0436\u0435 \u0431\u0443\u0437\u0443\u0443\u043b\u0430\u0440 \u0436\u04e9\u043d\u04af\u043d\u0434\u04e9 \u043a\u0430\u0431\u0430\u0440\u043b\u0430\u0448\u0442\u044b\u0431\u044b? \u042d\u043c\u043d\u0435 \u0434\u0435\u043f \u0430\u0439\u0442\u043a\u0430\u043d\u044b\u043d \u043a\u044b\u0441\u043a\u0430\u0447\u0430 \u0441\u04af\u0440\u04e9\u0442\u0442\u04e9\u043f \u0431\u0435\u0440\u0438\u04a3\u0438\u0437:":"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043e\u0437\u0432\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u0435\u043b\u044f\u043c\u0438","7. \u0415\u0441\u043b\u0438 \u0431\u044b\u043b\u043e \u0434\u0440\u0443\u0433\u043e\u0435 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435, \u043a\u043e\u0440\u043e\u0442\u043a\u043e \u043e\u043f\u0438\u0448\u0438\u0442\u0435 / \u0411\u0430\u0448\u043a\u0430 \u044d\u0440\u0435\u0436\u0435 \u0431\u0443\u0437\u0443\u0443 \u0431\u043e\u043b\u0441\u043e, \u0430\u043d\u044b \u043a\u044b\u0441\u043a\u0430\u0447\u0430 \u0441\u04af\u0440\u04e9\u0442\u0442\u04e9\u04a3\u04af\u0437:":"\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435"},Object(f.a)(K,"3. \u041e\u0431\u0449\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f / \u0416\u0430\u043b\u043f\u044b \u044d\u0441\u043a\u0435\u0440\u0442\u04af\u04af\u043b\u04e9\u0440:","\u041e\u0431\u0449\u0438\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u044f"),Object(f.a)(K,"4. \u0412\u0441\u0435 \u043b\u0438 \u0431\u044b\u043b\u043e \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435 \u0438\u0437 \u043d\u0438\u0436\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0433\u043e / \u0422\u04e9\u043c\u04e9\u043d\u0434\u04e9\u0433\u04af \u043d\u0435\u0440\u0441\u0435\u043b\u0435\u0440\u0434\u0438\u043d \u0431\u0430\u0430\u0440\u0434\u044b\u0433\u044b \u0443\u0447\u0430\u0441\u0442\u043e\u043a\u0442\u043e \u0431\u0430\u0440\u0431\u044b?","\u041d\u0435\u0443\u043a\u043e\u043c\u043b\u0435\u043a\u0442\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0443\u0447\u0430\u0441\u0442\u043e\u043a"),Object(f.a)(K,"5. \u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 / \u0423\u0447\u0430\u0441\u0442\u043e\u043a \u0430\u0447\u044b\u043b\u044b\u043f \u0436\u0430\u0442\u043a\u0430\u043d \u0443\u0447\u0443\u0440\u0434\u0430\u0433\u044b \u0441\u0430\u043a\u0442\u0430\u043b\u0430 \u0442\u0443\u0440\u0433\u0430\u043d \u0442\u0430\u043b\u0430\u043f\u0442\u0430\u0440","\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043a\u0430"),Object(f.a)(K,"6. \u0411\u044b\u043b\u0438 \u043b\u0438 \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u043b\u044e\u0434\u0438 \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043a\u0430 / \u0423\u0447\u0430\u0441\u0442\u043e\u043a \u0430\u0447\u044b\u043b\u044b\u043f \u0436\u0430\u0442\u043a\u0430\u043d\u0434\u0430 \u0447\u043e\u043e\u0447\u0443\u043d \u0430\u0434\u043c\u0430\u0434\u0430\u0440 \u0431\u0430\u0440 \u0431\u0435\u043b\u0435?","\u041f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u043b\u044e\u0434\u0438 \u043f\u0440\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0438 \u0443\u0447\u0430\u0441\u0442\u043a\u0430"),K),B=function(e){return e in R?R[e]:e.slice(3)},J=N.firestore(),W=function(e){Object(u.a)(t,e);var n=Object(m.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=n.call(this,e)).loadJsonForms=function(){["https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_afternoon.json","https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_emergency.json","https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_enter.json","https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_evening.json","https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_exit.json","https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_home.json","https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_mobile.json","https://raw.githubusercontent.com/KloopMedia/ElectionsMonitoringFormsConfig/master/final_form_morning.json"].forEach((function(e){fetch(e).then((function(e){return e.json()})).then((function(n){a.jsonForms[e]=n})).catch((function(e){console.error(e)}))})),console.log(a.jsonForms)},a.generateNewsData=function(e,n){var t={},o=[],r=[],i={};if(e.hasOwnProperty("fileId")){t.title="\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435: ?",t.date=new Date(1e3*e.date.seconds).toString(),i.public_url=e.public_url,i.filename=e.filename;["jpg","jpeg","png"].includes(e.filename.split(".")[-1])?i.isImage=!0:i.isImage=!1,t.violations=o,t.description=r,t.fileInfo=i,a.news[e.fileId]=t}else t.title="\u041d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u043d\u0430 \u0443\u0447\u0430\u0441\u0442\u043a\u0435: ?",t.date=new Date(1e3*e.timestamp.seconds).toString(),Object.entries(e.answers).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],i=t[1];if(console.log(i),null!==i&&void 0!==i){var l=[];if("multiradio"==n.questions[a].type){var c=n.questions[a].title;l.push(c.slice(3)),r.push(B(c));var u=n.questions[a].subquestion,m=n.questions[a].answer;Object.entries(i).forEach((function(e){var n=Object(s.a)(e,2),t=n[0],a=n[1],o=u[t].q+" \u043e\u0442\u0432\u0435\u0442: "+m[a];l.push(o)})),o.push(l)}else if("input"==n.questions[a].type||"time"==n.questions[a].type){var f=n.questions[a].title;l.push(f.slice(3)),r.push(B(f)),l.push(i),o.push(l)}else if("radio"==n.questions[a].type){var p=n.questions[a].title;l.push(p.slice(3)),r.push(B(p));var d=n.questions[a].answer;l.push(d[i]),o.push(l)}}else console.log("ERROR")})),r.push("(\u0440\u0430\u0437\u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u043f\u043e\u0441\u0442 \u0434\u043b\u044f \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430)"),t.violations=o,t.description=r,t.fileInfo=i,a.news[e.responseId]=t},a.state={},a.jsonForms={},a.news={},a}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.loadJsonForms(),J.collection("feed").get().then((function(n){n.forEach((function(n){console.log(n.id,"=>",n.data());var t=n.data();if(t.hasOwnProperty("form_url")){if(0==e.jsonForms.hasOwnProperty(t.form_url))return console.log("OLD FROM!!!"),void console.log(t.form_url);var a=e.jsonForms[t.form_url];e.generateNewsData(t,a)}})),e.state.news!==e.news&&e.setState({news:e.news})}))}},{key:"render",value:function(){var e=!0;return void 0===this.state.news&&(e=!1),o.a.createElement("div",null,e?o.a.createElement(q,{news:this.state.news}):o.a.createElement("div",null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[53,1,2]]]);
//# sourceMappingURL=main.02bc6e66.chunk.js.map