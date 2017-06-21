(function () {
    //Load Stylesheet
    var root = './';
    // var root = 'https://rawgit.com/kachanovskyi/toyotacr-widget/master/';
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

        var anchor = $('<div>')
            .attr('id', 'widget-container')
            .appendTo($('body'));

        var chatbot = $('<div>')
            .addClass('chatbot')
            .appendTo(anchor);

        var launcher = $('<div>')
            .addClass('widget-launcher')
            .addClass('widget-effect')
            .append('<i class="zmdi zmdi-comment-text"></i>')
            // .css('background-image', 'url(data:image/svg+xml,' + escape(btnBg) + ')')
            // .css('background-color', settings.color)
            .appendTo(anchor);

        var ua = navigator.userAgent;
        var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
        var Android = !!ua.match(/Android/i);
        var Mobile = !!ua.match(/Mobi/i);
        var Mac = !!ua.match(/Macintosh/i);

        var $w = $(window);

        var launcherCont = {};
        var chatTop = 548,
            chatBottom = 44,
            chatWidth = 333;
        launcherCont.bottom = 3;
        launcherCont.right = 16;
        launcherCont.width = 333;
        launcherCont.height = 20;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            chatTop = $w.height();
            chatWidth = $w.width();
            launcherCont.width = chatWidth;
        }

        launcher.click(function () {

            var chatHeight = (chatTop);

            var messageContainer = $('<div class="message-container">')
                .css('width', launcherCont.width)
                .css('height', chatHeight)
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
            }

            if (sessionStorage.getItem("toyotaCRchatID") === null) {
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
            } else if ($($('.message-container')[0]).children().length < 2) {
                chatInit();
            }

            chatWindowShow();

        });


        function chatWindowShow() {
            $('#chat-window').show().addClass('expanded');
            $("#chatInput").val('');
        }

        function chatWindowClose() {
            $('#chat-window').hide().removeClass('expanded');
            $('.chat-close').hide();
        }

        function setResponse(val) {

            if (sessionStorage.getItem("toyotaCRchatID") === null) {
                sessionStorage.setItem("toyotaCRchatID", val.chatId.id);
            }

            var container = $('<div class="message-outer bot">');
            var message = $('<div class="chat-message bot">');

            var counter = 1;


            if (val.messages !== null) {

                container
                    .append(
                        $('<div class="chat-message bot">').text(val.messages[0].text)
                    );

                var printInterval = setInterval(function () {

                    if ((counter < val.messages.length) && (val.messages[counter].text !== null)) {

                        container
                            .append(
                                $('<div class="chat-message bot">').text(val.messages[counter].text)
                            );

                        counter++;

                    }

                    if ((counter === val.messages.length) && (val.buttons !== null)) {

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
                data: JSON.stringify(data),

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
                    data: JSON.stringify(data),

                    success: function (data) {
                        setResponse(data);
                    },
                    error: function () {
                        console.log("Internal Server Error");
                    }
                });

                var message = $('<div class="chat-message user">');

                $('<div class="message-outer user">')
                    .prependTo($('#chat-window')
                        .find('.message-container'));

                message
                    .text(text)
                    .appendTo(
                        $('#chat-window').find('.message-container').find('.message-outer.user')[0]
                    );

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
