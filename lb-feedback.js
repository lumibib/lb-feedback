function lbFeedback(options) {
    let _this = this;
    let defaultOptions = {
        title: "Help & feedback",
        width: "230",
        bottom_anchor: "33%",
        label: {
            help: "Help center",
            idea: "Suggest an idea",
            bug: "Report a bug",
            chat: "Chat"
        },
        title_color: "#ffffff",
        title_bg: "#222222",
        icon_color: "#ffffff",
        icon_bg: "#222222",
        color: "#222222",
        bg: "#dddddd",
        hover_color: "#ffffff",
        hover_bg: "#eeeeee",
        freshchat_token: null,
        freshdesk_widget_id: null
    };
    options = {
        ...defaultOptions,
        ...options
    };

    this.init = function () {
        const rootElement = document.createElement("div");
        rootElement.id = "lbf-root";
        document.body.insertBefore(rootElement, document.body.firstChild);
        const html = `
    <div class="lbf-button-wrapper">
        <div class="lbf-button-grid" id="lbf-grid">
            <div class="lbf-button-icon-out"><img alt="Urgent Message" id="lbf-icon" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20aria-labelledby='title'%20aria-describedby='desc'%20role='img'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EUrgent%20Message%3C/title%3E%3Cdesc%3EA%20line%20styled%20icon%20from%20Orion%20Icon%20Library.%3C/desc%3E%3Cpath%20data-name='layer2'%20fill='none'%20stroke='${encodeURIComponent(options.icon_color)}'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M2%208v40h18v11l12-11h30V8H2z'%20stroke-linejoin='round'%20stroke-linecap='round'%3E%3C/path%3E%3Cpath%20data-name='layer1'%20d='M34%2032a2%202%200%200%201-2%202%202.2%202.2%200%200%201-2-2l-1-15a2.8%202.8%200%200%201%203-3%202.7%202.7%200%200%201%203%203z'%20fill='none'%20stroke='${encodeURIComponent(options.icon_color)}'%20stroke-miterlimit='10'%20stroke-width='2'%20stroke-linejoin='round'%20stroke-linecap='round'%3E%3C/path%3E%3Ccircle%20data-name='layer1'%20cx='32'%20cy='40'%20r='2'%20fill='none'%20stroke='${encodeURIComponent(options.icon_color)}'%20stroke-miterlimit='10'%20stroke-width='2'%20stroke-linejoin='round'%20stroke-linecap='round'%3E%3C/circle%3E%3C/svg%3E" width="28"> <img alt="Close" id="lbf-close-icon" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20aria-labelledby='title'%20aria-describedby='desc'%20role='img'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EClose%3C/title%3E%3Cdesc%3EA%20line%20styled%20icon%20from%20Orion%20Icon%20Library.%3C/desc%3E%3Cpath%20data-name='layer1'%20fill='none'%20stroke='${encodeURIComponent(options.icon_color)}'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M41.999%2020.002l-22%2022m22%200L20%2020'%20stroke-linejoin='round'%20stroke-linecap='round'%3E%3C/path%3E%3C/svg%3E" style="display: none;" width="28"></div>
            <div class="lbf-button-title">
                ${options.title}
            </div>
            <div class="lbf-button-content">
                <a class="lbf-button-content-item" href="https://lumibib.tawk.help/" id="lbf-help-item" target="_blank">
                <div><img alt="Boat Wheel" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20aria-labelledby='title'%20aria-describedby='desc'%20role='img'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EBoat%20Wheel%3C/title%3E%3Cdesc%3EA%20line%20styled%20icon%20from%20Orion%20Icon%20Library.%3C/desc%3E%3Ccircle%20data-name='layer2'%20cx='32'%20cy='32'%20r='24'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3E%3C/circle%3E%3Ccircle%20data-name='layer1'%20cx='32'%20cy='32'%20r='8'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3E%3C/circle%3E%3Cpath%20data-name='layer1'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M10%2010l16.3%2016.4m11.3%2011.3L54%2054m-44%200l16.4-16.3m11.3-11.3L54%2010M2%2032h22m16%200h22M32%2062V40m0-16V2'%3E%3C/path%3E%3C/svg%3E" width="16"></div>
                <div>
                    ${options.label.help}
                </div></a> <a class="lbf-button-content-item" href="https://feedback.userreport.com/066d1d46-4132-4abe-8892-9331d342e0a3/" id="lbf-idea-item" target="_blank">
                <div><img alt="Star" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20aria-labelledby='title'%20aria-describedby='desc'%20role='img'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EStar%3C/title%3E%3Cdesc%3EA%20line%20styled%20icon%20from%20Orion%20Icon%20Library.%3C/desc%3E%3Cpath%20data-name='layer1'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M32%2047.2L13.5%2061l7.1-22.2L2%2025h23l7-22%207%2022h23L43.4%2038.8%2050.5%2061%2032%2047.2z'%20stroke-linejoin='round'%20stroke-linecap='round'%3E%3C/path%3E%3C/svg%3E" width="16"></div>
                <div>
                    ${options.label.idea}
                </div></a>
                <div class="lbf-button-content-item" id="lbf-bug-item">
                    <div><img alt="Error Bug" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20aria-labelledby='title'%20aria-describedby='desc'%20role='img'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EError%20Bug%3C/title%3E%3Cdesc%3EA%20line%20styled%20icon%20from%20Orion%20Icon%20Library.%3C/desc%3E%3Cpath%20data-name='layer2'%20d='M58%2018c0%205.2-3.5%207.4-8%208.2M62%2036H50m-1.2%208C54%2045.2%2059.9%2048%2060%2056M6%2018c0%205.2%203.5%207.4%208%208.2M2%2036h12m1.2%208C10%2045.2%204%2048%204%2056'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3E%3C/path%3E%3Cpath%20data-name='layer1'%20d='M18%2022.6v-2a8.6%208.6%200%200%201%208.6-8.6h10.8a8.6%208.6%200%200%201%208.6%208.6v1.9M24.2%2012.4a8%208%200%200%201%2015.7%200'%20fill='none'%20stroke='%23202020'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3E%3C/path%3E%3Cpath%20data-name='layer1'%20d='M43.3%2022H20.7a6.7%206.7%200%200%200-6.7%206.7v7.8c.1%2010.6%206%2019.3%2018%2021.5%2012-2.1%2017.9-11%2018-21.6v-7.7a6.7%206.7%200%200%200-6.7-6.7zM32%2022v36'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%3E%3C/path%3E%3C/svg%3E" width="16"></div>
                    <div>
                        ${options.label.bug}
                    </div>
                </div>
                <div class="lbf-button-content-item" id="lbf-chat-item">
                    <div><img alt="Comments" src="data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20aria-labelledby='title'%20aria-describedby='desc'%20role='img'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3EComments%3C/title%3E%3Cdesc%3EA%20line%20styled%20icon%20from%20Orion%20Icon%20Library.%3C/desc%3E%3Cpath%20data-name='layer2'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M28%2034v14h16.9L56%2059.1V48h6V26H52'%3E%3C/path%3E%3Cpath%20data-name='layer1'%20fill='none'%20stroke='${encodeURIComponent(options.color)}'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='2'%20d='M52%204H2v30h8v11l11.1-11H52V4z'%3E%3C/path%3E%3C/svg%3E" width="16"></div>
                    <div>
                        ${options.label.chat}
                    </div>
                </div>
            </div>
        </div>
    </div>
		`;

        rootElement.innerHTML = html;
        this.addScripts();
        this.addStyle();
        this.prepareEvents();
    };

    this.prepareEvents = function () {
        const elementIconOut = document.querySelector(".lbf-button-icon-out");
        const elementIdea = document.querySelector("#lbf-idea-item");
        const elementBug = document.querySelector("#lbf-bug-item");
        const elementChat = document.querySelector("#lbf-chat-item");

        elementIconOut.addEventListener("click", function () {
            _this.lbf_show_content();
        });
        elementBug.addEventListener("click", function () {
            _this.lbf_show_freshdesk_ticket();
        });
        elementChat.addEventListener("click", function () {
            _this.lbf_show_freshchat();
        });
    };

    this.lbf_show_content = function () {
        var o = document.getElementById("lbf-grid");
        var i = document.getElementById("lbf-icon");
        var c = document.getElementById("lbf-close-icon");
        if (o.classList.contains("visible")) {
            o.classList.remove("visible");
            c.style.display = "none";
            i.style.display = "inline-block";
        } else {
            o.classList.add("visible");
            c.style.display = "inline-block";
            i.style.display = "none";
        }
    };

    this.lbf_show_freshdesk_ticket = function () {
        FreshworksWidget("open");
    };

    this.lbf_show_freshchat = function () {
        window.fcWidget.open();
    };

    this.initFreshChat = function () {
        window.fcWidget.init({
            token: options.freshchat_token,
            host: "https://wchat.eu.freshchat.com",
            config: {
                headerProperty: {
                    hideChatButton: true
                }
            }
        });
    };

    this.initFreshworksWidget = function () {
        window.fwSettings = {
            widget_id: options.freshdesk_widget_id
        };
        !(function () {
            if ("function" != typeof window.FreshworksWidget) {
                var n = function () {
                    n.q.push(arguments);
                };
                (n.q = []), (window.FreshworksWidget = n);
            }
        })();
        FreshworksWidget("hide", "launcher");
    };

    this.addScripts = function () {
        var scriptFC;
        document.getElementById("freshchat-js-sdk") ?
            _this.initFreshChat() :
            (((scriptFC = document.createElement("script")).id = "freshchat-js-sdk"),
                (scriptFC.async = !0),
                (scriptFC.src = "https://wchat.eu.freshchat.com/js/widget.js"),
                (scriptFC.onload = _this.initFreshChat),
                document.head.appendChild(scriptFC));

        var scriptFW = document.createElement("script");
        scriptFW.async = !0;
        scriptFW.defer = !0;
        scriptFW.type = "text/javascript";
        scriptFW.src =
            "https://euc-widget.freshworks.com/widgets/" +
            options.freshdesk_widget_id +
            ".js";
        scriptFW.onload = _this.initFreshworksWidget();
        document.head.appendChild(scriptFW);
    };

    this.addStyle = function () {
        const css = `
.lbf-button-wrapper {
	position: fixed;
	z-index: 999;
	display: block;
	visibility: visible;
	pointer-events: all;
	bottom: ${options.bottom_anchor};
	right: 0px;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
		Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji,
		Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}
.lbf-button-grid {
	max-width: none !important;
	width: ${options.width}px;
	display: block;
	height: 44px;
	margin-right: ${-1 * options.width + 48}px;
	border-top-left-radius: 2px;
	border-bottom-left-radius: 2px;
	visibility: visible;
	transition: margin 1s;
}
.lbf-button-grid.visible {
	margin-right: 5px;
}

.lbf-button-grid {
	display: grid;
	grid-template-columns: 50px 3fr;
	grid-template-rows: 1fr 1fr;
	gap: 5px 5px;
	grid-template-areas:
		"lbf-button-icon-out lbf-button-title"
		". lbf-button-content";
}

.lbf-button-title {
	grid-area: lbf-button-title;
	background-color: ${options.title_bg};
	color: ${options.title_color};
	padding: 0.5rem 0.75rem;
}

.lbf-button-icon-out {
	grid-area: lbf-button-icon-out;
	background-color: ${options.icon_bg};
	text-align: center;
	vertical-align: middle;
  padding: 2px 0;
	cursor: pointer;
}
.lbf-button-icon-out img {
  text-align: center;
	vertical-align: middle;
  padding: 2px 0;
}

.lbf-button-content {
	grid-area: lbf-button-content;
	background-color: ${options.bg};
	color: ${options.color};
}

.lbf-button-content-item {
	padding: 0.3rem 0.75rem;
	cursor: pointer;

	display: grid;
	grid-template-columns: 1fr 4fr;
	grid-template-rows: 1fr;
	gap: 0px 0px;
	grid-template-areas: ". .";
}
.lbf-button-content-item:hover {
	background-color: ${options.hover_bg};
	color: ${options.hover_color};
}
.lbf-button-content-item a,
a.lbf-button-content-item{
	color: ${options.color};
	text-decoration: none;
}
.lbf-button-content-item a:hover,
a.lbf-button-content-item a:hover{
	color: ${options.hover_color};
}
.lbf-button-content-item div:first-child {
	text-align: center;
}
		`;

        const linkElement = document.createElement("link");
        linkElement.setAttribute("rel", "stylesheet");
        linkElement.setAttribute("type", "text/css");
        linkElement.setAttribute(
            "href",
            "data:text/css;charset=UTF-8," + encodeURIComponent(css)
        );
        document.head.appendChild(linkElement);
    };

    this.init();
}
