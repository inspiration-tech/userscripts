// ==UserScript==
// @name     Счётчик для Безошибочного
// @version  1
// @grant    none
// @include  http://klavogonki.ru/*
// @include  https://klavogonki.ru/*
// ==/UserScript==

/**
 * TODO: список косяков:
 *
 * >> использует структуру HTML-документа для получения данных (в том числе id пользователя)
 * >> id пользователя берётся из картинки профиля в верхней панели
 * >> не сбрасывает данные при смене аккаунта
 * >> сменой даты считается 0:00 по московскому времени
 * >> не тестировал на кроссбраузерность
 * >> скрипт ломает кнопку "Скрытый текст"
 *
 */


window.EasyPopup=function(){var e,t={speed:150,styles:!1,replaceStyles:!1,mediaStyles:!1,templates:!0,allowBackgroundCallback:!0,allowCallbackOnEsc:!0,allowCallbackOnEnter:!0,minLoadingTime:0,loadingPic:!1,appendTo:!1,noScrollTop:!1,defaultAnimationShow:"easyPopupShow",defaultAnimationClose:"easyPopupClose",id:(+new Date+Math.floor(1e11*Math.random())).toString(36),hideOnIos:!1},A=this,o=arguments.length?arguments[0]:{},r="958c1d72380718e5f4b576299fb5ea0c",a=!1,i=function(e){var t="";for(var o in e)e.hasOwnProperty(o)&&(t+=o.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})+":"+(""!==e[o]?e[o]:'""')+";");return t},n=function(e,t){for(var o in t)if(t.hasOwnProperty(o))if(!1!==t[o=o.trim().replace(/\s+/g," ")])if(e.hasOwnProperty(o)){for(var a in t[o])t[o].hasOwnProperty(a)&&(e[o][a]=t[o][a]);for(var i in e[o])e[o].hasOwnProperty(i)&&!1===e[o][i]&&delete e[o][i]}else e[o]=t[o];else delete e[o];return e},l=function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)},x=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},L=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},O=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)};for(var s in t)t.hasOwnProperty(s)&&(this[s]=o.hasOwnProperty(s)?o[s]:t[s]);this.actionState=!1,this.isActive=!1,this.isLoading=!1,this.delayedLoading=null,this.closeAfterDelay=!1,this.defaultLoadingPic=this.loadingPic&&"string"==typeof this.loadingPic?this.loadingPic:"data:image/png;base64,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",this.scrollTop=null,e=document.querySelector('style[title="'+r+'"]'),o.hasOwnProperty("styleSheetTitle")&&o.styleSheetTitle===r&&(a=!0),!a&&e&&(e.innerHTML="");var c={message:'<div class="easy-popup" data-name="message"><div class="easy-popup__closer"><div></div><div></div></div><div class="easy-popup__heading"></div><div class="easy-popup__body"><div class="easy-popup__text"></div><div class="button_wrapper"><button class="closing_button" id="close_btn">ОК</button></div></div></div>',confirm:'<div class="easy-popup" data-name="confirm"><div class="easy-popup__closer"><div></div><div></div></div><div class="easy-popup__heading"></div><div class="easy-popup__body"><div class="easy-popup__text"></div><div class="button_wrapper"><button class="confirm_button">Принять</button><button class="closing_button">Отклонить</button></div></div></div>'};if("object"==typeof o.templates)for(var p in o.templates)o.templates.hasOwnProperty(p)&&(c[p]=o.templates[p]);if(l(function(){var e=A.appendTo?A.appendTo:"body",t=document.querySelector(e),o=document.querySelector(e+" > .easy-popup-tint");o?o.dataset.id=A.id:t.innerHTML+='<div class="easy-popup-tint" data-id="'+A.id+'"></div>';var a="";for(var i in c)if(c.hasOwnProperty(i))if(!1!==c[i])document.querySelectorAll('.easy-popup-tint[data-id="'+A.id+'"] .easy-popup[data-name="'+i+'"]').length||(a+=c[i]);else{delete c[i];var n=document.querySelectorAll('.easy-popup-tint[data-id="'+A.id+'"] .easy-popup[data-name="'+i+'"]');n.length&&Array.prototype.forEach.call(n,function(e){e.parentNode.removeChild(e)})}if(document.querySelector('.easy-popup-tint[data-id="'+A.id+'"] .easy-popup__loading')||(a+='<div class="easy-popup__loading"></div>'),document.querySelector('.easy-popup-tint[data-id="'+A.id+'"]').innerHTML+=a,Array.prototype.forEach.call(document.querySelectorAll(".easy-popup"),function(e){e.style.display="none"}),(-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPhone"))&&["object","string"].includes(typeof A.hideOnIos)){L(document.body,"easy-popup_ios"),L(document.querySelector("html"),"easy-popup_ios");var l="string"==typeof A.hideOnIos?A.hideOnIos.split(","):this.hideOnIos;document.querySelector("head").innerHTML+='<style title="'+r+'_overflow"></style>';var s=document.querySelector('style[title="'+r+'_overflow"]');l.forEach(function(e,t,o){s.innerHTML+=" .easy-popup_overflow "+e+" {display: none} "})}}),this.styles&&(!a||!e)){"object"!=typeof this.styles&&(this.styles={});var d={".easy-popup-tint":{position:"fixed",display:"none",width:"100%",height:"100vh !important",overflowY:"auto",overflowX:"hidden",background:"RGBA(0,0,0,0.7)",zIndex:1e4,left:0,right:0,top:0,bottom:0,textAlign:"center",verticalAlign:"middle"},".easy-popup_ios .easy-popup-tint":{position:"relative",height:"auto !important",pointerEvents:"auto"},".easy-popup-tint::after":{display:"inline-block",height:"100%",content:"",verticalAlign:"middle"},".easy-popup__loading":{visibility:"hidden",position:"fixed",width:"100vw",height:"100vh",zIndex:"-1",top:"0",left:"0",transition:"all 150ms",background:"url("+this.defaultLoadingPic+") center center / 50px no-repeat rgba(255, 255, 255, 0.7)"},".easy-popup-tint.is_loading .easy-popup__loading":{visibility:"visible",zIndex:"10001"},"body .easy-popup-tint":{WebkitOverflowScrolling:"touch",overflowScrolling:"touch"},".easy-popup":{position:"relative",display:"inline-block",background:"#fff",width:"calc(100% - 20px)",maxWidth:"550px",minHeight:"130px",margin:"50px 10px",borderRadius:"10px",verticalAlign:"middle",overflow:"hidden",boxShadow:"0 0 15px #fff",WebkitTransform:"translateZ(0px)"},".easy-popup__heading":{height:"43px",background:"#34991b",font:"bold 30px/45px Arial",color:"#fff",textAlign:"center",textTransform:"uppercase",padding:"0 17px",margin:"auto"},".easy-popup__body":{padding:"12px 17px 27px"},".easy-popup__closer":{position:"absolute",width:"25px",height:"25px",right:"5px",top:"8px",cursor:"pointer",transition:"all 280ms"},".easy-popup__closer > div":{position:"absolute",left:"11px",width:"3px",height:"25px",background:"#fff",borderRadius:"3px",transition:"all 280ms"},".easy-popup__closer > div:nth-child(1)":{WebkitTransform:"rotate(45deg)",transform:"rotate(45deg)"},".easy-popup__closer > div:nth-child(2)":{WebkitTransform:"rotate(-45deg)",transform:"rotate(-45deg)"},".easy-popup__closer:hover":{WebkitTransform:"scale3d(1.3, 1.3, 0.2)",transform:"scale3d(1.3, 1.3, 0.2)"},".easy-popup__closer:hover > div":{background:"#9cd1d4"},'.easy-popup button, .easy-popup input[type="submit"]':{display:"inline-block",margin:"auto",background:"#34991b",borderRadius:"6px",font:"bold 18px Tahoma",color:"#fff",height:"35px",padding:"0 35px",cursor:"pointer",transition:"all 250ms",border:"none"},'.easy-popup button:hover, .easy-popup input[type="submit"]:hover':{opacity:.7},".easy-popup__body .closing_button":{marginTop:"10px"},".easy-popup__text":{marginBottom:"16px",textAlign:"center"},".easy-popup .input_wrapper":{marginBottom:"10px"},".easy-popup .button_wrapper button":{display:"inline-block",marginLeft:"10px",marginRight:"10px"},".easy-popup-tint input, .easy-popup-tint button":{WebkitTransform:"translateZ(0px)"},"body.easy-popup_overflow, html.easy-popup_overflow":{overflow:"hidden !important",height:"100vh",width:"100%",position:"fixed"},"body.easy-popup_overflow.easy-popup_ios, html.easy-popup_overflow.easy-popup_ios":{height:"auto",position:"relative",pointerEvents:"none"}},u={"@keyframes easyPopupShow":{from:{opacity:0,transform:"scale3d(0.3, 0.3, 0.3)",WebkitTransform:"scale3d(0.3, 0.3, 0.3)"},to:{opacity:1}},"@-webkit-keyframes easyPopupShow":{from:{opacity:0,transform:"scale3d(0.3, 0.3, 0.3)",WebkitTransform:"scale3d(0.3, 0.3, 0.3)"},to:{opacity:1}},"@keyframes easyPopupClose":{from:{opacity:1},"90%":{opacity:0,transform:"scale3d(0.3, 0.3, 0.3)",WebkitTransform:"scale3d(0.3, 0.3, 0.3)"},to:{opacity:0}},"@-webkit-keyframes easyPopupClose":{from:{opacity:1},"90%":{opacity:0,transform:"scale3d(0.3, 0.3, 0.3)",WebkitTransform:"scale3d(0.3, 0.3, 0.3)"},to:{opacity:0}}};if(this.replaceStyles)for(var y in this.styles)this.styles.hasOwnProperty(y)&&(d[y]=this.styles[y]);else d=n(d,this.styles);if(!1!==this.mediaStyles)for(var h in"object"!=typeof this.mediaStyles&&(this.mediaStyles={}),this.mediaStyles)if(this.mediaStyles.hasOwnProperty(h))if(h=h.trim().replace(/\s+/g," "),!1!==this.mediaStyles[h])if(u.hasOwnProperty(h))if(this.replaceStyles)for(var m in this.mediaStyles[h])this.mediaStyles[h].hasOwnProperty(m)&&(u[h][m]=this.mediaStyles[h][m]);else u[h]=n(u[h],this.mediaStyles[h]);else u[h]=this.mediaStyles[h];else delete u[h];for(var f in e||(document.querySelector("head").innerHTML+='<style title="'+r+'"></style>',e=document.querySelector('style[title="'+r+'"]')),d)if(d.hasOwnProperty(f)){var b=i(d[f=f.trim().replace(/\s+/g," ")]);e.innerHTML+=f+"{"+b+"}"}if(!1!==this.mediaStyles)for(var v in u)if(u.hasOwnProperty(v)){var k="";for(var g in u[v]){if(u[v].hasOwnProperty(g))k+=(g=g.trim().replace(/\s+/g," "))+"{"+i(u[v][g])+"}"}e.innerHTML+=v+"{"+k+"}"}}this.show=function(){if(this.actionState)return this;var e=document.querySelector(":focus");e&&(window.a3e95e180cc04c9d85ffdd8ebecef047=e).blur();var t,o={title:"Ошибка",text:"Произошла ошибка всплывающего окна. Пожалуйста, обратитесь в обратную связь.",btnEvents:!0,name:"message",html:!1,closerCallback:function(){},closingBtnCallback:!1,confirmBtnCallback:function(){},backgroundClickCallback:!1,callbackOnEsc:!1,callbackOnEnter:!1,closingBtnText:!1,confirmBtnText:!1,animationShow:!1,animationClose:!1,speed:!1,closingSpeed:!1},arguments=arguments.length?arguments[0]:{},a=document.scrollingElement||document.documentElement;for(var i in o)o.hasOwnProperty(i)&&arguments.hasOwnProperty(i)&&(o[i]=arguments[i]);var n=!1!==o.closingSpeed?o.closingSpeed:this.speed,l=!1!==o.speed?o.speed:this.speed,s=document.querySelectorAll(".easy-popup.active");if(s.length){var r=n+"ms "+(o.animationClose&&"string"==typeof o.animationClose?o.animationClose:this.defaultAnimationClose)+" 1 linear";Array.prototype.forEach.call(s,function(e){x(e,"active"),e.style.WebkitAnimation=r,e.style.animation=r});function c(){Array.prototype.forEach.call(document.querySelectorAll(".easy-popup"),function(e){e.style.display="none"}),A.show(o)}return n?setTimeout(c,n):c(),this}if(!1===o.name){var p=document.querySelector('.easy-popup-tint[data-id="'+this.id+'"]');return p.style.display="block",L(p,"active"),this.isActive=!0,this}if(t=(t=(t=document.querySelector('.easy-popup-tint[data-id="'+this.id+'"] .easy-popup[data-name="'+o.name+'"]'))||document.querySelector('.easy-popup-tint[data-id="'+this.id+'"] .easy-popup[data-name="'+(o.name="message")+'"]'))||document.querySelector('.easy-popup-tint[data-id="'+this.id+'"] .easy-popup:first-child'),!1!==o.title){var d=t.querySelector(".easy-popup__heading");d&&(d.innerHTML=o.title)}if(o.html){var u=t.querySelector(".easy-popup__body");u&&(u.innerHTML=o.html)}else if(!1!==o.text){var y=t.querySelector(".easy-popup__text");y&&(y.innerHTML=o.text)}var h=t.querySelector(".closing_button"),m=t.querySelector(".confirm_button");h&&(!1!==o.closingBtnText?h.innerHTML=o.closingBtnText:"confirm"===o.name?h.innerHTML="Отклонить":"message"===o.name&&(h.innerHTML="ОК")),m&&(!1!==o.confirmBtnText?m.innerHTML=o.confirmBtnText:"confirm"===o.name&&(m.innerHTML="Подтвердить")),this.isActive||(this.scrollTop=a.scrollTop);var f=document.querySelector('.easy-popup-tint[data-id="'+this.id+'"]');if(f.style.display="block",L(f,"active"),this.isActive=!0,!this.noScrollTop){var b=document.querySelector("body"),v=document.querySelector("html"),k="easy-popup_overflow";L(v,k),L(b,k),-1===navigator.platform.indexOf("iPad")&&-1===navigator.platform.indexOf("iPhone")&&(b.scrollTop=this.scrollTop)}if(!O(t,"active")){t.style.display="inline-block",L(t,"active");var g=l+"ms "+(o.animationShow&&"string"==typeof o.animationShow?o.animationShow:this.defaultAnimationShow)+" 1 linear";t.style.WebkitAnimation=g,t.style.animation=g}var w=t.querySelector(".closing_button"),C=t.querySelector(".confirm_button"),S=t.querySelector(".easy-popup__closer");this.hasOwnProperty("keydownCallbackEsc")&&(document.removeEventListener("keydown",this.keydownCallbackEsc),delete this.keydownCallbackEsc),this.hasOwnProperty("keydownCallbackEnter")&&(document.removeEventListener("keydown",this.keydownCallbackEnter),delete this.keydownCallbackEnter),w&&this.hasOwnProperty("closingBtnCallback")&&(w.removeEventListener("click",this.closingBtnCallback),delete this.closingBtnCallback),C&&this.hasOwnProperty("confirmBtnCallback")&&(C.removeEventListener("click",this.confirmBtnCallback),delete this.confirmBtnCallback),f&&this.hasOwnProperty("tintCallback")&&(f.removeEventListener("click",this.tintCallback),delete this.tintCallback),S&&this.hasOwnProperty("closerCallbackMain")&&(S.removeEventListener("click",this.closerCallbackMain),delete this.closerCallbackMain),this.closerCallbackMain=function(){if("object"!=typeof o.closerCallback||!o.closerCallback.hasOwnProperty("closerOff")||!0!==o.closerCallback.closerOff){if(A.actionState)return!1;A.close()}"function"==typeof o.closerCallback?o.closerCallback():"object"==typeof o.closerCallback&&o.closerCallback.hasOwnProperty("callback")&&"function"==typeof o.closerCallback.callback&&o.closerCallback.callback(),this.removeEventListener("click",A.closerCallbackMain)},S&&S.addEventListener("click",this.closerCallbackMain),o.btnEvents&&(w&&(this.closingBtnCallback=o.closingBtnCallback?function e(){o.closingBtnCallback(),this.removeEventListener("click",e)}:this.closerCallbackMain,w.addEventListener("click",this.closingBtnCallback)),C&&(this.confirmBtnCallback=o.confirmBtnCallback?function e(){o.confirmBtnCallback(),this.removeEventListener("click",e)}:this.closerCallbackMain,C.addEventListener("click",this.confirmBtnCallback))),A.allowBackgroundCallback&&(this.tintCallback=function(){A.isLoading||document.querySelector('.easy-popup-tint[data-id="'+A.id+'"] .easy-popup:hover')||((o.backgroundClickCallback?o.backgroundClickCallback:A.closerCallbackMain)(),this.removeEventListener("click",A.tintCallback))},f.addEventListener("click",this.tintCallback)),this.actionState=!0;function E(){A.actionState=!1,A.allowCallbackOnEsc&&(A.keydownCallbackEsc=function(e){if(!A.isActive||A.isLoading)return document.removeEventListener("keydown",A.keydownCallbackEsc),!1;var t=e.hasOwnProperty("keyCode")?e.keyCode:e.which;A.allowCallbackOnEsc&&27===t&&((o.callbackOnEsc?o.callbackOnEsc:A.closerCallbackMain)(),document.removeEventListener("keydown",A.keydownCallbackEsc))},document.addEventListener("keydown",A.keydownCallbackEsc)),A.allowCallbackOnEnter&&(A.keydownCallbackEnter=function(e){if(!A.isActive||A.isLoading)return document.removeEventListener("keydown",A.keydownCallbackEnter),!1;var t=e.hasOwnProperty("keyCode")?e.keyCode:e.which;A.allowCallbackOnEnter&&13===t&&((o.callbackOnEnter?o.callbackOnEnter:o.confirmBtnCallback?o.confirmBtnCallback:A.closerCallbackMain)(),document.removeEventListener("keydown",A.keydownCallbackEnter))},document.addEventListener("keydown",A.keydownCallbackEnter))}return l?setTimeout(E,l):E(),this},this.close=function(){if(this.actionState)return this;var e={callback:!1,stopAfterCallback:!1,animationClose:!1,speed:!1},arguments=arguments.length?arguments[0]:{};for(var t in e)e.hasOwnProperty(t)&&arguments.hasOwnProperty(t)&&(e[t]=arguments[t]);if("function"==typeof e.callback&&e.callback(),!0===e.stopAfterCallback)return this;var o=!1!==e.speed?e.speed:this.speed,a=document.querySelectorAll(".easy-popup.active");if(a.length){var i=o+"ms "+(e.animationClose&&"string"==typeof e.animationClose?e.animationClose:this.defaultAnimationClose)+" 1 linear";Array.prototype.forEach.call(a,function(e){x(e,"active"),e.style.WebkitAnimation=i,e.style.animation=i});function n(){Array.prototype.forEach.call(document.querySelectorAll(".easy-popup"),function(e){e.style.display="none"})}o?setTimeout(n,o):n()}if(!this.noScrollTop){var l=document.scrollingElement||document.documentElement,s="easy-popup_overflow";x(document.querySelector("html"),s),x(document.querySelector("body"),s),document.querySelector("body").scrollTop=0,l.scrollTop=this.scrollTop}function r(){var e=document.querySelector('.easy-popup-tint[data-id="'+A.id+'"]');e.style.display="none",x(e,"active"),A.isActive=!1,"object"==typeof window.a3e95e180cc04c9d85ffdd8ebecef047&&(window.a3e95e180cc04c9d85ffdd8ebecef047.focus(),delete window.a3e95e180cc04c9d85ffdd8ebecef047),A.actionState=!1}return this.actionState=!0,o?setTimeout(r,o):r(),this},this.setLoading=function(){A.isLoading=!0,L(document.querySelector('.easy-popup-tint[data-id="'+this.id+'"]'),"is_loading");var e=1<arguments.length&&arguments[1]?arguments[1]:this.defaultLoadingPic;document.querySelector(".easy-popup__loading").style.backgroundImage='url("'+e+'")';function t(){A.delayedLoading=null,A.closeAfterDelay&&(A.closeAfterDelay=!1,A.unsetLoading())}var o=arguments.length&&!1!==arguments[0]&&null!==arguments[0]?arguments[0]:Math.max(this.minLoadingTime,this.speed);return o?this.delayedLoading=setTimeout(t,o):t(),this},this.unsetLoading=function(){return A.delayedLoading?A.closeAfterDelay=!0:(A.isLoading=!1,x(document.querySelector('.easy-popup-tint[data-id="'+this.id+'"]'),"is_loading")),this}};

    window.ToggleButtons = function(){

        // ПАРАМЕТРЫ ОБЪЕКТА ПО УМОЛЧАНИЮ
        this.defaults = {
            // скорость ползунка
            toggleSpeed: 180,
        };

        // СОСТОЯНИЯ
        this.conditions = {
            left: 1,
            right: 19
        };

        // КНОПКИ, ПРИСУТСТВУЮЩИЕ НА СТРАНИЦЕ
        this.elements = {};

        // КОЛБЕК ИЗМЕНЕНИЯ ПОЗИЦИИ КНОПКИ (ПЕРЕКЛЮЧЕНИЕ)
        this.changePosCallback = function(toggleButton){
            var paramText1 = toggleButton.parentNode.previousSibling,
                paramText2 = toggleButton.parentNode.nextSibling,
                conditionsArr = Object.keys(this.conditions),
                dataCondition = toggleButton.getAttribute('data-condition'),
                dataSetting = toggleButton.getAttribute('data-setting'),
                newCondition = conditionsArr[0] === dataCondition ? conditionsArr[1] : conditionsArr[0],
                newPosition = this.conditions[newCondition]+'px',
                switchSpeed = this.defaults.toggleSpeed;

            // кидаем ошибку, если нет нужного элемента в объекте элементов
            if (!this.elements.hasOwnProperty(dataSetting))
                throw new Error('Failed to find settings for the indicated switching button in the "elements" object!');

            // сюда попадаем, если второй аргумент задан и равен true (т.е. при первоначальном запуске)
            if (arguments.length > 1 && arguments[1] === true) {
                // перезаписываем три ключевые переменные нужными значениями
                newCondition = this.elements[dataSetting].initialPos;
                newPosition = this.conditions[newCondition]+'px';
                switchSpeed = 0;

                // затемняем неактивный текст в соответствии с положением переключателя
                var addClassElem = newCondition === 'left' ? paramText2 : paramText1;
                addClassElem.classList.add('param-text_dimmed');
            } else {
                // меняем прозрачность текста вокруг переключателя
                paramText1.classList.toggle('param-text_dimmed');
                paramText2.classList.toggle('param-text_dimmed');
            }

            // двигаем шарик в нужное положение с нужной скоростью
            toggleButton.querySelector('.ball').style.left = newPosition;

            // устанавливаем нужный data-атрибут
            toggleButton.dataset.condition = newCondition;
            // запускаем для соответствующего переключателя его собственный метод left или right
            this.elements[dataSetting][newCondition+'Callback'](dataSetting, switchSpeed);
        };

        // ГЕНЕРАЦИЯ HTML-КОДА КНОПКИ
        this.generateHTML = function(text1, text2, condition, setting, wrap = false) {
            var wrapStart = '',
                wrapEnd = '';

            if (!text1)
                text1 = '';
            if (!text2)
                text2 = '';

            if (wrap) {
                wrapStart = '<div class="switching-button-block">';
                wrapEnd = '</div>';
            }

            return  wrapStart +
                '<span class="param-text">'+text1+'</span>' +
                '<div class="switching-btn-wrapper">' +
                '<div class="switching-btn" data-condition="'+condition+'" data-setting="'+setting+'">' +
                '<div class="ball"></div>' +
                '</div>' +
                '</div>' +
                '<span class="param-text">'+text2+'</span>' +
                wrapEnd;
        };


        // ИНИЦИАЛИЗАЦИЯ

        var params = arguments.length ? arguments[0] : {};

        // перезаписываем дефолтные параметры при необходимости
        if (params.hasOwnProperty('settings')) {
            for (var param in params.settings) {
                if (!params.settings.hasOwnProperty(param))
                    continue;

                this.defaults[param] = params.settings[param];
            }
        }

        // добавляем элементы
        if (params.hasOwnProperty('elements')) {
            for (var elem in params.elements) {
                if (!params.elements.hasOwnProperty(elem))
                    continue;

                this.elements[elem] = params.elements[elem];
            }
        }

        var ToggleButtonsObject = this;

        // проходимся по всем переключателям и ставим каждый в нужное положение
        for (var prop in this.elements) {
            if (!this.elements.hasOwnProperty(prop))
                continue;

            if ([1,'1','left'].indexOf(this.elements[prop].initialPos) !== -1)
                this.elements[prop].initialPos = 'left';
            if ([2,'2','right'].indexOf(this.elements[prop].initialPos) !== -1)
                this.elements[prop].initialPos = 'right';

            if (this.elements[prop].hasOwnProperty('appendToSelector')) {
                var textLeft = this.elements[prop].hasOwnProperty('textLeft') ? this.elements[prop].textLeft : '',
                    textRight = this.elements[prop].hasOwnProperty('textRight') ? this.elements[prop].textRight : '',
                    wrap = this.elements[prop].hasOwnProperty('wrap') ? this.elements[prop].wrap : false;

                var test = ToggleButtonsObject.generateHTML(textLeft, textRight, this.elements[prop].initialPos, prop, wrap);

                document.querySelector(this.elements[prop].appendToSelector).lastChild.insertAdjacentHTML('afterend', test);
            }

            var switchingBtn = document.querySelector('.switching-btn[data-setting="'+prop+'"]');

            // и в конце вызвать коллбек
            ToggleButtonsObject.changePosCallback(switchingBtn, true);
        }

        var togglingButtons = document.querySelectorAll('.switching-btn');
        if (togglingButtons.length) {

            var toggleEventListener = function(e){
                document.removeEventListener('click', toggleEventListenerWrapper, false);

                ToggleButtonsObject.changePosCallback(this);

                var self = this;
                setTimeout(function(){
                    document.addEventListener('click', toggleEventListenerWrapper, false);
                }, ToggleButtonsObject.defaults.toggleSpeed);

                return false;
            };

            var toggleEventListenerWrapper = function(e){

                for (var target = e.target; target && target != this; target = target.parentNode) {
                    if (target.matches('.switching-btn')) {
                        toggleEventListener.call(target, e);
                        break;
                    }
                }
            };

            document.addEventListener('click', toggleEventListenerWrapper, false);
        }

        return this;
    };

    function documentReady(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    documentReady(function(){
        console.log('Counter started!');

        var getResultTemplate = function(kgData, plain) {
            var textSuffix = plain ? '' : 'Результат записан!<br>',
                currentDate = (new Date()).toLocaleString().split(',')[0];

            return '<div class="easy-popup__text" style="font-size: 18px;"><div style="text-transform: uppercase; font-weight: bold;font-size: 20px; color: rgb(71, 122, 138);">'+textSuffix+'Ваши текущие счетчики:</div><br><div style="display: inline-block;text-align: left;width: 60%;">' +
                '<div style="margin-bottom: 5px;"><span style="font-weight: bold">Дата:</span> '+currentDate+'</div>' +
                '<span style="font-weight: bold">Всего безошибочных:</span> '+kgData[currentDate].totalGames+'<br>' +
                '<span style="font-weight: bold">Всего успешных:</span> '+kgData[currentDate].totalSuccessful+'<br>' +
                '<span style="font-weight: bold">Всего провалено:</span> '+kgData[currentDate].totalFailed+'<br>' +
                '<span style="font-weight: bold">Успешных подряд:</span> '+kgData[currentDate].successRunning+'<br>' +
                '<span style="font-weight: bold">Последняя серия подряд:</span> '+kgData[currentDate].lastSuccessRunning+'<br>' +
                '</div></div>';
        };

        var easyPopup = new EasyPopup({
            styles: {
                '.easy-popup__heading': {
                    background: 'rgb(70, 146, 170)'
                },
                '.easy-popup button, .easy-popup input[type="submit"]': {
                    background: 'rgb(70, 146, 170)'
                }
            },
            mediaStyles: true,
            templates: {
                info: '<div class="easy-popup" data-name="info">' +
                    '<div class="easy-popup__closer">' +
                    '<div></div>' +
                    '<div></div>' +
                    '</div>' +
                    '<div class="easy-popup__heading"></div>' +
                    '<div class="easy-popup__body">' +
                    '<div class="easy-popup__text"></div>' +
                    '<div class="easy-popup__toggle-buttons">' +
                    '<div class="description-text">Окно после заезда: </div>' +
                    '</div>' +
                    '<div class="button_wrapper">' +
                    '<button class="closing_button" id="close_btn">ОК</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>',
            }
        });

        document.head.insertAdjacentHTML('beforeend', '<style>' +
            '._custom-kg-icon {' +
            'position: relative;' +
            'width: 34px;' +
            'height: 34px;' +
            'border-radius: 10px;' +
            'background-color: rgb(70, 146, 170);' +
            'color: #fff;' +
            'text-align: center;' +
            'cursor: pointer;' +
            'font-size: 15px;' +
            'margin: 5px 7px;' +
            'display: inline-block;' +
            'background: url(/img/gametype_signs.png) -101px -33px / 336px;' +
            '}' +
            '.custom_pointer {' +
            'cursor: pointer;' +
            '}' +
            /*'._custom-kg-icon:hover {' +
                'opacity: 0.7;' +
            '}' +*/

            '.switching-btn-wrapper {' +
            'display: inline-block;' +
            'width: 40px;' +
            'height: 12px;' +
            'padding: 0 2px;' +
            'box-sizing: content-box;' +
            'vertical-align: middle' +
            '}' +
            '.switching-btn {' +
            'position: relative;' +
            'width: 40px;' +
            'height: 12px;' +
            'border: 1px solid #ccc;' +
            'border-radius: 10px;' +
            'cursor: pointer;' +
            'box-sizing: border-box' +
            '}' +
            '.switching-btn span {' +
            'display: inline-block;' +
            'line-height: 20px;' +
            'text-transform: uppercase;' +
            'padding: 0 4px;' +
            '-webkit-user-select: none;' +
            '-moz-user-select: none;' +
            '-ms-user-select: none;' +
            'user-select: none' +
            '}' +
            '.switching-btn .on {' +
            'position: absolute;' +
            'left: 4px' +
            '}' +
            '.switching-btn .off {' +
            'position: absolute;' +
            'right: -3px' +
            '}' +
            '.switching-btn .ball {' +
            'position: absolute;' +
            'top: 1px;' +
            'left: 1px;' +
            'width: 18px;' +
            'height: 8px;' +
            'border-radius: 15px;' +
            'background: #0075a8;' +
            'transition: left 180ms;' +
            '}' +
            '.switching-btn:active .ball {' +
            'opacity: .7' +
            '}' +
            '.param-text {' +
            'position: relative;' +
            'top: -2px;' +
            'vertical-align: middle;' +
            'transition: opacity 180ms;' +
            '}' +
            '.param-text.param-text_fixed {' +
            'display: inline-block;' +
            'width: 98px;' +
            'padding-left: 10px' +
            '}' +
            '.param-text.param-text_dimmed {' +
            'opacity: .5' +
            '}' +
            '.easy-popup__toggle-buttons {' +
            'display: inline-block;' +
            'text-align: left;' +
            'width: 60%;' +
            'margin-bottom: 15px;' +
            '}' +
            '.easy-popup__toggle-buttons .description-text {' +
            'display: inline-block;' +
            'font-weight: bold;' +
            'font-size: 18px;' +
            '}' +
            '.easy-popup__toggle-buttons .switching-button-block {' +
            'display: inline-block;' +
            'font-size: 16px;' +
            'margin-left: 10px;' +
            '}' +
            '</style>');
        document.querySelector('#userpanel-level').insertAdjacentHTML('afterend', '<td class="user-dropdown _custom-kg-icon-js custom_pointer">\n' +
            '<div class="drop-btn">' +
            '<div class="_custom-kg-icon"></div>\n' +
            '</div>' +
            '</td>');

        var showPopupOption = localStorage.getItem('klavogonki_counter_show_popup');
        if (showPopupOption === null)
            showPopupOption = 'right';

        var buttonsObject = new ToggleButtons({
            settings: {
                // toggleSpeed: 200 // если нужно изменить скорость ползунка
            },
            elements: {
                tester: {
                    textLeft: 'выкл', // текст слева от кнопки
                    textRight: 'вкл', // текст справа от кнопки
                    appendToSelector: '.easy-popup__toggle-buttons', // селектор, в конец которого нужно вставить кнопку
                    initialPos: showPopupOption, // начальная позиция
                    wrap: true, // оборачивать в дополнительный div или нет

                    // коллбек, выполняющийся при перемещении ползунка влево
                    leftCallback: function(buttonName, toggleSpeed){
                        localStorage.setItem('klavogonki_counter_show_popup', 'left');
                    },
                    // коллбек, выполняющийся при перемещении ползунка вправо
                    rightCallback: function(){
                        localStorage.setItem('klavogonki_counter_show_popup', 'right');
                    }
                }
            }
        });

        document.querySelector('._custom-kg-icon-js').addEventListener('click', function(e){

            var kgData = JSON.parse(localStorage.getItem('klavogonki_counter'));

            easyPopup.show({
                name: 'info',
                title: 'Безошибочный: инфо',
                text: getResultTemplate(kgData, true)
            });

        }, false);

        var blurHandler = function(e){
            console.log('blur ok');
            var timeoutCounter = 0, // счётчик таймаутов после блёра
                timeoutCounterLimit = 100, // лимит таймаутов после блёра
                checkInterval = 100; // интервал проверок (постановки таймаутов) после блёра

            var blurCallback = function(){
                timeoutCounter++;

                var userID = document.querySelector('.user-block .user-dropdown.ng-scope .drop-btn .name img').getAttribute('src').split('/storage/avatars/')[1].split('_big.png')[0];

                var workingNode = document.querySelector('a.profile[href="/profile/'+userID+'/"]').parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
                    success = workingNode.querySelector('.rating').style.display !== 'none',
                    failed = workingNode.querySelector('.car .noerror-fail') !== null;

                if (!success && !failed) {

                    if (timeoutCounter <= timeoutCounterLimit)
                        setTimeout(blurCallback, checkInterval);
                    return false;
                }

                var kgData = JSON.parse(localStorage.getItem('klavogonki_counter')),
                    currentDate = (new Date()).toLocaleString().split(',')[0];

                if (kgData === null)
                    kgData = {};

                if (!kgData.hasOwnProperty(currentDate)) {
                    kgData[currentDate] = {
                        totalGames: 0,
                        totalSuccessful: 0,
                        totalFailed: 0,
                        successRunning: 0,
                        lastSuccessRunning: 0
                    };
                }

                kgData[currentDate].totalGames = parseInt(kgData[currentDate].totalGames) + 1;

                var popupParams = {
                    name: 'confirm',
                    confirmBtnText: 'Начать заново',
                    closingBtnText: 'Закрыть',
                    speed: 0,
                    confirmBtnCallback: function() {
                        var element = document.querySelector('#again [align="left"] a');

                        if (element === null)
                            element = document.querySelector('#again a[title="Горячая клавиша: Ctrl →"]');

                        eval(element.getAttribute('onclick'));
                    }
                };
                var showPopupOption = localStorage.getItem('klavogonki_counter_show_popup');
                if (success && !failed) {
                    console.log("success");
                    kgData[currentDate].totalSuccessful = parseInt(kgData[currentDate].totalSuccessful) + 1;
                    kgData[currentDate].successRunning = parseInt(kgData[currentDate].successRunning) + 1;

                    if (showPopupOption === 'right') {
                        popupParams.title = "Гонка пройдена!";
                        popupParams.text = getResultTemplate(kgData, false);
                        easyPopup.show(popupParams);
                    }
                } else if (failed && !success) {
                    console.log('failed');
                    kgData[currentDate].totalFailed = parseInt(kgData[currentDate].totalFailed) + 1;
                    if (parseInt(kgData[currentDate].successRunning) !== 0)
                        kgData[currentDate].lastSuccessRunning = kgData[currentDate].successRunning;

                    kgData[currentDate].successRunning = 0;

                    if (showPopupOption === 'right') {
                        popupParams.title = "Провал!";
                        popupParams.text = getResultTemplate(kgData, false);
                        easyPopup.show(popupParams);
                    }
                } else {
                    if (timeoutCounter <= timeoutCounterLimit)
                        setTimeout(blurCallback, checkInterval);

                    return false;
                }

                var kgJson = JSON.stringify(kgData, null, 2);
                localStorage.setItem('klavogonki_counter', kgJson);
            };

            setTimeout(blurCallback, checkInterval);

        };

        document.addEventListener('blur', function(e){
            if (document.querySelector('.gametype-sign.sign-noerror.active')) {
                for (var target = e.target; target && target != this; target = target.parentNode) {
                    if (target.matches('#inputtext')) {
                        blurHandler.call(target, e);
                        break;
                    }
                }
            }
        }, true);

    });
