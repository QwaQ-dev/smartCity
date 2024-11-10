import{au as O,Y as Q,h as I,av as Y,ae as G,W as k,p as F,f as z,t as j,e as L,s as l,g as t,r as a,D as m,L as Z,U,at as K}from"./runtime.C1CtjVHv.js";import{a as E,t as R}from"./disclose-version.C_aPGYrQ.js";import{i as T}from"./legacy.C-QqN_N0.js";import{e as y}from"./store.BuITdcty.js";import{b as C}from"./paths.BeShcLTc.js";import{c as V,p as J}from"./index-client.DUsnsduU.js";function i(s,A,e,v){var r=s.__attributes??(s.__attributes={});I&&(r[A]=s.getAttribute(A),A==="src"||A==="srcset"||A==="href"&&s.nodeName==="LINK")||r[A]!==(r[A]=e)&&(A==="style"&&"__styles"in s&&(s.__styles={}),A==="loading"&&(s[O]=e),e==null?s.removeAttribute(A):typeof e!="string"&&H(s).includes(A)?s[A]=e:s.setAttribute(A,e))}var N=new Map;function H(s){var A=N.get(s.nodeName);if(A)return A;N.set(s.nodeName,A=[]);for(var e,v=Q(s),r=Element.prototype;r!==v;){e=Y(v);for(var o in e)e[o].set&&A.push(o);v=Q(v)}return A}function pA(s,A,e){var v=k(s,A);v&&v.set&&(s[A]=e,G(()=>{s[A]=null}))}function X(s){return function(...A){var e=A[0];return e.preventDefault(),s==null?void 0:s.apply(this,A)}}const D=""+new URL("../assets/logo.D1KqWqjD.png",import.meta.url).href,P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgBzZLRCYAwDERTcABH6Cg6iSO4ghvoCB3BDRzBEdoNxAniFSMWQaztTx8cgZC75CNERcPMDaQpFZg3PukoBRgHvik0pAqGGpQeqj/yDGZ3pdT83GI4nunyqSBAo+iXrb4/ynUOanGBoxh8MGRls/31F1lmCUg3S8AKLZzzzuVzAKesuWigEz5OAAAAAElFTkSuQmCC";var W=R('<div id="background" class="svelte-68r99t"></div> <div id="modal" class="svelte-68r99t"><div class="content svelte-68r99t"><div class="header svelte-68r99t"><h2 class="header-title svelte-68r99t">Оставить предложение</h2> <div class="rand svelte-68r99t"><p class="header-suptitle svelte-68r99t">Тут вы можете оставить публичное обращение, после модерации оно будет опубликовано. <br class="svelte-68r99t"> Его статус вы сможете увидеть на главной странице и страницах предложений</p> <button class="submit svelte-68r99t">Отправить предложение <img alt="" style="margin-left: 0.7vw;" class="svelte-68r99t"></button></div></div></div> <div class="forms svelte-68r99t"><form action="post" class="form1 svelte-68r99t"><div class="inp-name svelte-68r99t"><p class="name svelte-68r99t">Введите имя</p> <input type="text" class="input-name svelte-68r99t" placeholder="Введите имя"></div> <div class="inp-trubl svelte-68r99t"><p class="trubl svelte-68r99t">Укажите тип проблемы</p> <input type="text" class="input-trubl svelte-68r99t" placeholder="Введите проблему"></div> <div class="inp-iin svelte-68r99t"><p class="iin svelte-68r99t">Введите ИИН</p> <input type="text" class="input-iin svelte-68r99t" placeholder="Введите иин"></div> <div class="inp-zag svelte-68r99t"><p class="zag svelte-68r99t">Заголовок обращения</p> <input type="text" class="input-zag svelte-68r99t" placeholder="Заголовок обращения"></div></form> <form action="post" class="form2 svelte-68r99t"><div class="inp-surname svelte-68r99t"><p class="name svelte-68r99t">Введите фамилию</p> <input type="text" class="input-surname svelte-68r99t" placeholder="Введите фамилию"></div> <div class="inp-trubl svelte-68r99t"><p class="trubl svelte-68r99t">Укажите район города</p> <input type="text" class="input-trubl svelte-68r99t" placeholder="Укажите район города"></div> <div class="inp-number svelte-68r99t"><p class="number svelte-68r99t">Введите номер телефона</p> <input type="text" class="input-number svelte-68r99t" placeholder="Введите номер"></div> <div class="inp-text svelte-68r99t"><p class="text svelte-68r99t">Текст обращения</p> <textarea name="" id="" class="input-text svelte-68r99t"></textarea></div></form></div></div>',1);function q(s,A){F(A,!1);const e=V();let v=J(A,"isOpenModal",12);function r(){v(!1),e("closeModal",{isOpenModal:v()})}T();var o=W(),c=z(o),n=l(c,2),g=t(n),d=t(g),h=l(t(d),2),p=l(t(h),2),B=l(t(p));i(B,"src",P),a(p),a(h),a(d),a(g),m(2),a(n),j(()=>{i(c,"style",`--display: ${(v()?"block":"none")??""};`),i(n,"style",`--display: ${(v()?"block":"none")??""};`)}),y("click",c,r),y("click",p,X(r)),E(s,o),L()}var _=R('<header class="svelte-1csxbdt"><div class="logo svelte-1csxbdt"><a class="svelte-1csxbdt"><img alt="logo" class="logo-img svelte-1csxbdt"></a></div> <div class="nav svelte-1csxbdt"><a href="https://govtechbot.up.railway.app/" class="header-link svelte-1csxbdt">Чат с ИИ</a> <a class="header-link svelte-1csxbdt">Новости</a> <a href="https://soejongghan.github.io/GovMap/" class="header-link svelte-1csxbdt">Карта событий</a> <p class="header-link svelte-1csxbdt" style="cursor: pointer;">Предложения</p> <!> <a class="header-link svelte-1csxbdt">Вход/Регистрация</a> <select name="lang" id="lang" class="svelte-1csxbdt"><option class="svelte-1csxbdt">RU</option><option class="svelte-1csxbdt">ENG</option></select></div></header>');function gA(s){let A=K(!1);function e(){U(A,!0)}function v(){U(A,!1)}var r=_(),o=t(r),c=t(o);i(c,"href",`${C??""}/`);var n=t(c);i(n,"src",D),a(c),a(o);var g=l(o,2),d=l(t(g),2);i(d,"href",`${C??""}/news`);var h=l(d,4),p=l(h,2);q(p,{get isOpenModal(){return Z(A)},$$events:{closeModal:v}});var B=l(p,2);i(B,"href",`${C??""}/reg`);var b=l(B,2),u=t(b);u.value=(u.__value="ru")==null?"":"ru";var f=l(u);f.value=(f.__value="eng")==null?"":"eng",a(b),a(g),a(r),y("click",h,X(e)),E(s,r)}const $="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGsSURBVHgBzZQxSwNBEIXHaGMRCVhpdZWtAf/ApVfBRrDyBAtL0R9g7CyMWprOQhQEIRobK2Nv0NbKNBosxGgaG9H32AnZLJtcQlLkwcdxs3tvb2ZnV2RIFCgDUwjuwCf4s2BsNe7jkQ5jh2ATlEEJVEEdTOmiocbXQKUX84ZxDpy3mTMHsuAdZEDNnTDq+SgCezHGFDO5B+tgAtxKF3oB1/pnJAR58C2m3g9gwRrPazzlGiWc97SYjrixYjtgGRyIKdUkOAZJHWd23IvINR/zmFNlfc7ony+BgsauwCOYt4xZolmJ+XOm9ma9T+uzZMUqYjYvacXq4pFrXrMMqWd9RlYsUKoSI7csT/rkRpXVgKmzNZn2l5jDw+yK1ncs32k35jXLnMppBuwQZnUhrS0aiilRwTX3HaIs2AKL0qaWjvI6L+MOJDyTj8AvWJF4sWOY5Ylv0HdCf8A42BbTJR/iF0uUBZdg1zeh08XFm48btSGt7dnQvpiuYTkq0qMCMVcBNzOU5nEnZ2KOfFr6UGAt0LhPimocyQAU6AKvYi6tgRm7C5C+StFJKRkW/QMV8WFnL0aaxgAAAABJRU5ErkJggg==",AA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgB7ZbhVYNADMeDjwF0AzqBuEGdwBFsR3CCthPYDYQN7ASeG+gEsAFsEJNHWq9nuONaePZDf+/lHRzJ3Z9AAgBXLogEIkHEjIYnspwssy61ZIZslyRJDVNAm8/JPnAY7PcMY8F3HrG5y5tk7iwBOVmF51GdLEQy0OA4NNFCRECF41KR3caIKHAaXrX9Ei0LNFQQhyEryWprjjfMFd9ZsIRPyMI6cp2t66tloqFh6LOr6a5mEreiYS7zHJ/3xLQUc9e7InYNKYatxC0wjiOBN46OHOJoZcwgDq+I4SV0Hhl4RPwLqXPeBvxrsqVzzhTQlemevvJU90mVTXzwZ9q4k1L3h1h68b4DIr6O4u0T7NpqA36MdVyQgBK7z/ZC5nzlueeO4g7ZOMoEX6AFDfzWu4Z97VPGWSDGxtgCGO3FLGFaCnfijwhSyU41TAN32DIoQljCNKjrqiKkAjYwLhutsnpFiJD1iEI2sp5K6ovkQKoWPlzB6bzQOlufQ7Btyx1wCRqIw5A9hAQwKQxAOuIjf+qha0r3oDck9tuRvfc9/1Hh7orWjyvG/MReuWR+ANAg1g3oeGsVAAAAAElFTkSuQmCC",sA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG2SURBVHgB7ZfRcYMwDIZFrgOwQekEzQalG5AJQidINkg2SDcI3aCdoO4ETSeADWADVSriziElyA6+9iHfnc5g+dAPtmQDcOUfEZ1zImJMzYpsThaDH69kb1EUVeAKCdjhtGxcBewxDHutgBWGZa0RUeI0lGQZWU5WW/31mIAMp2NrPfe550vtuLOejjlMx8PA9UmcG/CjIXshM3LN5BIskfuUpwTa1O6nd3ypCEO2oLxv+v0UNKGWMyCVvgQUzMCNAwV/ZAE8r9im8ru0cylICx4HvvBiGllsiYzbDPjX4k9RuWhdv4ThNxUh24ExG/LHNM5AO20qXER8SJudGcMLLpfrLwggwg6k8TcQQMSttGZkXOe/hwAiMsV8G/Ez6sLnIoI/c7f5PEFbrGz43MDp+ZM9oKwRJyhSlFla42OuD9gefrq+peIZWzuuz8IssC1OCRctsoMULxazYz844rt35GwUlCsjZ0ECvp//FxEVuOG7637aN0cHXZnbGsJzZx98j9aE7IwGwlKMnrx5weF0R7w+JcomOEogIaVaQE9IgZeL4UMu15/BPSdSCvL9A6u8/ryu/CXfnuAETq3ry/gAAAAASUVORK5CYII=",eA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB7ZfvbYMwEMWPqgMwAiNkBEbIBukGtBOUbNAN0k4QOkHSCdoNTCeADa7PwR9oYhvb2FEi8ZOeQMY+P5/8D6KFhRsko0gwc45HBa0g+d5DDfSVZVlLPiBYAe2htUebNdSxHgGtyAc0eB4FeHWoX/I0nc3Io6YsH73XKs1bpLQ3xNjRNDKGzG57Vv6CuD8XtVGxNqS01NR1yYKNjYzzQG4U0AGNdlAxKi8pHJndD+0XdPLkMILTxIXeOIzaak8FT0k9mSNUyjkd2kl8MSfUKmgpDQ25mFB8Uhp+ycNEQ/HptXuCyQQqH/E4UlyMA7PtE1u6kgkrHL4PnCMoFB6W6zfPZ0Nz4OFoFxzOnmLA4QeV4P9nTbCB0ExY7xA+Bio235jSGlCdCw5DxDDgcpSbkEs6p7nIUbB/Fg6suXnNNSIn47vFTKc6rmKMfPK/Q3VS0HBZbU+NfP8jFu6JPyHnjtJbPThWAAAAAElFTkSuQmCC",tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFjSURBVHgB7ZaBbYMwEEU/KAPQCeoNmm5AN+gI6QYdoRtkhNAJOgKMkE4Qd4KwgfstDHKQQ7gYUCvxpK8DB+U+NvYdsLLyB0luPWCMyRhyykZFPbrrLPB47fRDnalv6pgkSQ0JNimVUwfqZKbh5P7vdYwBZaZLPGRI+XnTno8PNFM+J4p69wcuvgk6tOuYYX5qficP7U3qGdguZMCS+UviL4fUwBFxZCETCgI4nc8Mb5TGfWxDJsRLQSMFwwv1iQiiTDgjmtpBPisqZCKKmFmZzIQzohkKCJnMhGmO+z0vSwjZYAKYPGc4QLbDuqLmz4SGPLn/9goyOhOb0OBIA7Yi7nF/rdEhExoyvhBH99JdATNN83LGQnAndblTb9A6q7AMlX/T36JRx6+AYvBXLsuOKs08lG47X5AMmGkbXFvtntDsAqsxNaZteG25t01vZXWt4b3ZbV8xqNyl6iVtj+6Vlf/PL9SXff4uvdxXAAAAAElFTkSuQmCC",aA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgB7VXdcdNAEP4kJ8wAD9jDU95MBagEpwJMBVEHhgocKkiowFBBoAJCBUoH8gPBSYjnDE/MMNby7fnOXBRZI5HJQybZmfOdV7f73X37c8C9lNxId2Yk5ejjtkRBfhg5OjcifhBwULV3Npf9UyPDJn7ja8a8xRMgKwB18Injteo7wF557zcjSRxjvAXowXKOPbSR87l80JucGXnjdRdGvqhOb1x1OKXagQkZGTcCUkMHNCnpB5ZOUhbqeYjEx9PZZtZ+/u+goVyhMV4i0XmrY+lby04vOo6AY+4ehbcT0k0HOUEnv4HFI2CX6pMoxkFVUl0BY5ysoz9L/CxvpOP3nLqPC6TB/t2iwEd+S58ybr1etKDurX5jjMe1YF62O3hWoX6pP9E2THjjnedRSoB3BBwofZ4F/h9WxXgtml02zS8lDfWnlzJ0JZBtsiWVRhNJ19yn+49QJ4YnKSeIcq+ONNvqitsC/GqZ+i7N11Rp0eoBNPNwQ7kWs2WBr5y6644RMwthE6RZ/bQRpTLkX4WBP9xUsJr27uaTTS2tVjx1vjhdLLMQMCziYPbr5rFzzrX9GJ8UTuebc+7bE8e+B5+tWp3X500btG1FVVn4nT1TdRerg6RlO/8seVs0FddgxTlPyk7rbJ1NhjbimrDv6AdNHlKCjOwh29adA+yfBfGqyzwF8hSWbx+hhSitLMwRl4kzXnA60TX745TfhrJq5lNt0uyT0/8GC0D7nRiviGCd00lf9bIC+czn5vAFXwA8yJ2Xv5O4OerLfG4bAAAAAElFTkSuQmCC",lA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHvSURBVHgB7ZVPTsJAFMa/FuLCuKALNcZNvQHeQG4AJ1BPADegnABvANyAG8ANqCeQnQEXRRckJtDxe0ybDITSQWFj+JJmOu30/eb9mwInnXQkOebkPVIPHHwcR8Mbzxmnk6L5xgXaHMo4ghTQ5fC8FUyVjPtxHKOHP6jgoq7WbSILLJo5eod+0YW69JwW9tRbpEoXQCfOgIrcbWBeFYjHQPARqSb2hJ4DA35b5TTEEjVbMK48J4zX4W1YiMXpEzqCrpP+nDbiwsoRO7BIKtCAN6aR6iAHSmMD6K7oXXtO7c5zZlnr3V3GDHjInD9NIjWSUG6u46bKBrRF6BNy5OYtEPhZAudVllCKdyYU69AAFsoFizyGjAbvWe1DAYh3AmcEHhmJkbQM373YQq3BogTykEzTfHYd3QXSflUzEgcBT3RLrSALoMa8S2/7CbSSzmUzSehzVbSEBinklq3Gsc/nMo6v9Dykt+JFU2l4JXmeqZ0eT3X/BgJYAvemMeazb85ZhEHieUnyPvlSj78CS9/SQAO6jyvmnyVLCVz/CJbo7jr1toKlX6VveRvaQg241IJ0wExOPeaybgv2oY+8cL4nNJWkQFIDHa3qtjWbxWUecXJYRPQeB1GMz0wwd1cr8HeGA2sR4/XbXRXpSSf9Y/0A1DXZTzaCfOIAAAAASUVORK5CYII=";var vA=R('<div class="footer svelte-1oyuvbh"><div class="footer-logo svelte-1oyuvbh"><img alt="" class="footer-logo-img svelte-1oyuvbh"> <p class="place svelte-1oyuvbh">Город: Актобе</p> <p class="akim svelte-1oyuvbh">Аким: БЕКЕТ АЗАМАТ БАУЫРЖАНУЛЫ</p> <div class="link-icons svelte-1oyuvbh"><a href="/" class="svelte-1oyuvbh"><img alt="" class="svelte-1oyuvbh"></a> <a href="/" class="svelte-1oyuvbh"><img alt="" class="svelte-1oyuvbh"></a> <a href="/" class="svelte-1oyuvbh"><img alt="" class="svelte-1oyuvbh"></a> <a href="/" class="svelte-1oyuvbh"><img alt="" class="svelte-1oyuvbh"></a></div></div> <div class="footer-links svelte-1oyuvbh"><h2 class="links-title svelte-1oyuvbh">Городской Акимат</h2> <div class="address svelte-1oyuvbh"><img alt="" class="icons svelte-1oyuvbh"> <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%BE%D0%B7%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%D0%B0,+%D0%90%D0%BA%D1%82%D0%BE%D0%B1%D0%B5/@50.307242,57.1442447,17z/data=!3m1!4b1!4m6!3m5!1s0x41822220683a7a27:0xdf6f2a116df6d84f!8m2!3d50.3072386!4d57.1468196!16s%2Fg%2F11fmz1zz44?entry=ttu&amp;g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D" class="street svelte-1oyuvbh">Улица Козенкова 34/2, <br class="svelte-1oyuvbh"> Актобе</a></div> <div class="phone svelte-1oyuvbh"><img alt="" class="icons svelte-1oyuvbh"> <a href="+77776416088" class="phone-number svelte-1oyuvbh">8 (777) 641 6088</a></div> <div class="mail svelte-1oyuvbh"><img alt="" class="icons svelte-1oyuvbh"> <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" class="email svelte-1oyuvbh">qwaq.dev@gmail.com</a></div></div> <div class="footer-user svelte-1oyuvbh"><h2 class="user-title svelte-1oyuvbh">Откройте сайт с телефона</h2></div></div>');function hA(s){var A=vA(),e=t(A),v=t(e);i(v,"src",D);var r=l(v,6),o=t(r),c=t(o);i(c,"src",AA),a(o);var n=l(o,2),g=t(n);i(g,"src",sA),a(n);var d=l(n,2),h=t(d);i(h,"src",eA),a(d);var p=l(d,2),B=t(p);i(B,"src",tA),a(p),a(r),a(e);var b=l(e,2),u=l(t(b),2),f=t(u);i(f,"src",$),m(2),a(u);var w=l(u,2),x=t(w);i(x,"src",aA),m(2),a(w);var M=l(w,2),S=t(M);i(S,"src",lA),m(2),a(M),a(b),m(2),a(A),E(s,A)}export{hA as F,gA as H,pA as b,$ as m,i as s};
