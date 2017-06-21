(function () {
    //Load Stylesheet
    // var root = './';
    var root = 'https://rawgit.com/kachanovskyi/toyotacr-widget/master/';
    // var accessToken = "afc2e32efdff44819a7cbc62e58009ca";
    // var baseUrl = "https://api.api.ai/v1/";

    var head = document.getElementsByTagName('head')[0];

    var stylesheet = document.createElement('link');
    stylesheet.type = 'text/css';
    stylesheet.rel = 'stylesheet';
    stylesheet.href = root + 'css/widget.css';
    head.appendChild(stylesheet);

    var icons = document.createElement('link');
    icons.type = 'text/css';
    icons.rel = 'stylesheet';
    icons.href = 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css';
    head.appendChild(icons);

    setTimeout(function () {
        (window.jQuery && init()) || loadScript("https://code.jquery.com/jquery-3.1.1.min.js", init);
    }, 1000);

    function loadScript(url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    function init() {
        var $ = window.jQuery;

        var chatId = sessionStorage.getItem("toyotaCRchatID");
            // settings = {},
            // script = $('#anychat-script');

        // settings.overlay = script.data('overlay');

        var anchor = $('<div>')
            .attr('id', 'anychat-container')
            .appendTo($('body'));

        var chatbot = $('<div>')
            .addClass('chatbot')
            .appendTo(anchor);

        // var btnBg = '<?xml version="1.0" encoding="UTF-8"?> <svg width="97px" height="92px" viewBox="0 0 100 64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 41 (35326) - http://www.bohemiancoding.com/sketch --> <title>Shape@2x</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Purple" transform="translate(-40.000000, -59.000000)" fill="#FFFFFF"> <path d="M120.33158,106.506104 C122.536403,118.160168 122.536403,118.475143 112.142238,120.364991 C94.818629,123.514738 77.4950204,122.884788 60.4863865,118.790117 C45.0526262,115.010421 39.6980562,106.821079 40.0130309,88.8675207 C40.3280056,74.3786845 46.9424744,65.8743675 61.7462853,62.4096458 C67.4158299,61.149747 73.0853746,60.5197976 78.7549192,59.8898482 C82.2196409,59.5748735 85.6843626,59.5748735 85.6843626,64.6144687 C85.6843626,69.0241145 85.0544132,72.1738616 79.6998433,72.4888363 C73.715324,73.1187857 67.7308046,74.3786845 62.06126,75.6385833 C54.1868925,77.5284315 52.612019,83.8279255 52.612019,90.7573689 C52.612019,98.0017871 54.5018672,103.986306 62.06126,106.191129 C67.4158299,107.766003 72.7703999,108.710927 78.1249698,109.025902 C85.0544132,109.655851 92.2988313,109.655851 99.2282748,109.025902 C106.472693,109.025902 113.087162,107.766003 120.33158,106.506104 Z M92.613806,71.2289375 C87.9437905,70.2701404 87.9969092,60.9193879 92.613806,60 C97.2307028,59.0806121 116.551883,62.7246205 127.261023,66.5043169 C135.450365,69.3390892 139.860011,76.5835074 139.860011,85.7177737 C140.174986,95.4819895 139.860011,105.246205 139.860011,114.695446 C139.860011,118.790117 138.915087,121.939864 133.875492,121.939864 C128.835897,121.939864 127.261023,118.475143 127.261023,114.065497 L127.261023,92.0172677 C127.261023,80.3632038 123.796301,76.2685327 112.142238,74.0637098 C105.842744,72.803811 97.2838216,72.1877345 92.613806,71.2289375 Z" id="Shape"></path> </g> </g> </svg>';

        var launcher = $('<div>')
            .addClass('anychat-launcher')
            .addClass('anychat-effect')
            .append('<i class="zmdi zmdi-comment-text"></i>')
            // .css('background-image', 'url(data:image/svg+xml,' + escape(btnBg) + ')')
            // .css('background-color', settings.color)
            .appendTo(anchor);

        var ua = navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        var Android = !!ua.match(/Android/i);
        var Mobile = !!ua.match(/Mobi/i);
        var Mac = !!ua.match(/Macintosh/i);

        // $.get(settings.tags.page);


        //Add overlay
        // if (settings.overlay && !Mobile) {

            // alert(1);


        // } else {

            // alert(2);

            var $w = $(window);

            var launcherCont = {};
            // chatIconHeight = 60,
            // iconHeight = 60;
            var chatTop = 548,
                chatBottom = 44,
                chatWidth = 333;
            launcherCont.bottom = 3;
            launcherCont.right = 16;
            launcherCont.width = 333;
            launcherCont.height = 20;

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // chatbot.find('.group-title.anychat-chatbot').css('z-index', '-1');
                chatTop = $w.height();
                // iconHeight = Math.floor(($w.height() - chatIconHeight - (chatIconHeight - iconHeight)) / (numberOfApps));

                // if (iconHeight > 70) {
                //     iconHeight = 70;
                // }

                chatWidth = $w.width();
                launcherCont.width = chatWidth - 2 * launcherCont.right;
                // $('.anychat-chat-icon').css('right', launcherCont.right).css('width', launcherCont.width).css('height', iconHeight);

                // $('.anychat-chat-icon img').css('height', iconHeight).css('width', iconHeight);
            } else {

            }

            launcher.click(function () {
                // chatWindowShow();

                var chatHeight = (chatTop);

                var messageContainer = $('<div class="message-container">')
                    .css('width', launcherCont.width)
                    .css('height', chatHeight)
                    // .css('background', 'url("' + root + '/images/background.png")')
                    .css('background-size', '100%');

                if ($('#chat-window').length === 0) {
                    var chatWindow = $('<div id="chat-window">')
                        .css('height', chatHeight)
                        .css('top', -chatHeight)
                        .css('width', launcherCont.width)
                        .css('position', 'absolute')
                        .css('right', launcherCont.right)
                        .css('display', 'none')
                        .css('z-index', '10001')
                        .append(messageContainer)
                        .append(
                            $('<div class="chat-top">')
                                .css('bottom', chatHeight - chatBottom)
                                .append(
                                    $('<div class="close-btn">')
                                    // .append($('<p class="heading">').text("remember, you can always go back to the main screen to chat with a human"))
                                )
                        )
                        .append(
                            $('<div class="chat-bottom">')
                                .css('width', launcherCont.width)
                                .css('height', chatBottom)
                                .append(
                                    $('<input type="text" placeholder="type message">')
                                        .attr('id', 'chatInput')
                                        .addClass('black-placeholder')
                                        .css('padding', '0 0.75em')
                                        .keypress(function (event) {
                                            if (event.which === 13) {
                                                event.preventDefault();
                                                send();
                                            }
                                        })
                                )
                                .append(
                                    $('<a class="send-message">').append('<i class="zmdi zmdi-mail-send"></i>')
                                        .css('float', 'right')
                                        .css('border-bottom', 'none')
                                        .click(send)
                                )
                        )
                        .appendTo(chatbot);

                    $('.close-btn').on("click", chatWindowClose);

                    $('<div class="message-outer bot">')
                        .css('visibility', 'hidden')
                        .css('margin-bottom', '0')
                        .append(
                            $('<div class="chat-message bot purple">').text("I'm hidden:)")
                        )
                        .prependTo($('#chat-window').find('.message-container'));
                    // botWrote = true;
                }

                if(sessionStorage.getItem("toyotaCRchatID") === null) {
                    messageContainer
                        .append(
                            $('<div class="start-screen">')
                                .append(
                                    $('<div class="start-text">').text("Hola, Soy el ToyotaBot. Si tiene alguna duda, estoy aquí para ayudarle!")
                                )
                                .append(
                                    $('<a class="start-btn">').text("Iniciar Chat")
                                        .on("click", chatInit)
                                )
                        )
                } else {
                    chatInit();
                }

                // launcher.toggleClass('anychat-launcher-active');
                chatWindowShow();

            });
        // }



        function chatWindowShow() {
            $('#chat-window').show().addClass('expanded');
            // $('#chat-window').show("slide", { direction: "down" }, 1000).addClass('expanded');

            // $('.chat-close').show();

            $("#chatInput").val('');
        }

        function chatWindowClose(callback) {
            $('#chat-window').hide().removeClass('expanded');
            // $('#chat-window').slideUp("fast", callback).removeClass('expanded');
            $('.chat-close').hide();
        }

        // function chatToggle() {
        //     if (chatShow) {
        //         chatShow = false;
        //         chatWindowClose(function () {
        //             anychatIcon.animate({
        //                 bottom: anychatIconBottom
        //             }, 150)
        //         });
        //     } else {
        //         chatShow = true;
        //         anychatIconBottom = parseInt(anychatIcon.css('bottom'), 10);
        //
        //         // anychatIcon.animate({
        //         //     bottom: chatTop
        //         // }, 150, chatWindowShow);
        //     }
        // }


        function setResponse(val) {
            // var response = JSON.parse(val);
            // var response = "some value";


            if( sessionStorage.getItem("toyotaCRchatID") === null ) {
                sessionStorage.setItem("toyotaCRchatID", val.chatId.id);
            }

            var container = $('<div class="message-outer bot">');
            var message = $('<div class="chat-message bot">');

            var counter = 1;


            if ( val.messages !== null ) {

                container
                    .append(
                        $('<div class="chat-message bot">').text(val.messages[0].text)
                    );

                var printInterval = setInterval(function () {

                    if ( (counter < val.messages.length) && (val.messages[counter].text !== null) ) {

                        container
                            .append(
                                $('<div class="chat-message bot">').text(val.messages[counter].text)
                            );

                        counter++;

                    }

                    if ( (counter === val.messages.length) && (val.buttons !== null) ) {

                        val.buttons.forEach(function (entry) {

                            container
                                .append(
                                    $('<div class="chat-message button">')
                                        .text(entry.title)
                                        .attr('payload', entry.payload)
                                        .click(function () {
                                            send("btn", $(this));
                                        })
                                );

                        });

                        clearInterval(printInterval);

                    }

                }, 999);

                container.prependTo($('#chat-window').find('.message-container'));

            }


            chatScrollBottom();
        }

        function chatInit() {

            var data = {
                chatId: {
                    id: chatId
                },
                button: {
                    payload: "GET_STARTED"
                }
            };

            $.ajax({
                type: "POST",
                url: './data/response.json',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: data,

                success: function (data) {
                    sessionStorage.setItem("toyotaCRchatID", data.chatId.id);
                    setResponse(data);

                    $('.start-screen').fadeOut("fast");
                },
                error: function () {
                    console.log("Internal Server Error. Not possible to get chat id.");
                }
            });

            console.log(data);
        }

        function send(param, elem) {

            var text = $("#chatInput").val();
            var data = {
                chatId: {
                    id: chatId
                }
            };

            if (param === "btn") {
                // text = elem.text().replace(" ", "_");
                text = elem.text();
                data.button = {
                    payload: elem.attr('payload')
                }
            } else {
                data.message = {
                    text: text
                };
            }

            if (text.length && text !== " ") {

                console.log("data to send: " + JSON.stringify(data));

                $("#chatInput").val('');
                $.ajax({
                    type: "POST",
                    // url: baseUrl + "query?v=20150910",
                    url: './data/response.json',
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    // headers: {
                    //     "Authorization": "Bearer " + accessToken
                    // },
                    data: data,

                    success: function (data) {
                        setResponse(data);
                    },
                    error: function () {
                        console.log("Internal Server Error");
                    }
                });

                var message = $('<div class="chat-message user">');

                // if (botWrote) {
                    $('<div class="message-outer user">')
                        .prependTo($('#chat-window')
                            .find('.message-container'));
                // }

                message
                    .text(text)
                    .appendTo(
                        $('#chat-window').find('.message-container').find('.message-outer.user')[0]
                    );

                // chatScrollBottom();
            } else {
                $("#chatInput").val('').focus();
            }
            chatScrollBottom();

        }

        function chatScrollBottom() {
            $(".message-container").animate({scrollTop: $('.message-container').prop("scrollHeight")}, 0);
        }

        window.initializeShopchat = init;
        return true;
    }
})();
