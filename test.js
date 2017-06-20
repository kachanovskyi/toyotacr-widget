switch (response.result.action) {
    case 'input.welcome':
        botWrote = true;
        // var quickContainer = $('<div class="quick-reply-container">'),
        //     quickInner = $('<div class="inner">').appendTo(quickContainer),
        //     quickBackground = $('<div class="background">').appendTo(quickContainer);
        // var quickIterator = 0,
        //     quickScroll = true;

        $('<div class="message-outer bot">')
            .append(
                $('<div class="chat-message bot">').text("Hi there")

            )
            .prependTo($('#chat-window').find('.message-container'));
        setTimeout(function () {
            $('<div>')
                .append(
                    $('<div class="chat-message bot">').text("How can I help you?")
                )
                .prependTo($('#chat-window').find('.message-container'));
        }, 999);
        // setTimeout(function () {
        //     quickContainer
        //         .prependTo($('.message-container'));
        // }, 999);

        // for (var x in settings.answers) {
        //     if (x === "Location" || x === "Hours" || x.includes("Fact")) {
        //         var quickReply = $('<div class="quick-reply">')
        //             .text(x.replace("_", " "))
        //             .on("click", function () {
        //                 send("quick", $(this));
        //             });
        //         $('<div class="color-dot">').prependTo(quickReply);
        //         quickReply.appendTo(quickInner);
        //     }
        // }
        //
        // var arrQuickWidth = 0;
        // $('.quick-reply').each(function () {
        //     arrQuickWidth += parseInt($(this).css('width'), 10);
        // });
        // if (arrQuickWidth > (parseInt(chatWidth, 10) - 2 * parseInt($('.quick-reply-container .btn-next').css('width'), 10))) {
        //     $('.quick-reply-container .btn-next, .quick-reply-container .btn-prev').each(function () {
        //         $(this).css('display', 'block');
        //     })
        // }

        break;
    // case 'BusinessName':
    //     botWrote = true;
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(settings.answers["BusinessName"])
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'Location':
    //     botWrote = true;
    //     var answer = {};
    //     answer.text = settings.answers["Location"].text;
    //     answer.url = settings.answers["Location"].url;
    //
    //     var curResponse = $('<div class="message-outer bot">')
    //         .append(
    //             message.text(answer.text)
    //         );
    //
    //     if (answer.url !== undefined && answer.url.length > 1 && answer.url && answer.url !== " ") {
    //         message.append(
    //             $('<a class="location-link">')
    //                 .attr('target', '_blank')
    //                 .attr('href', answer.url)
    //                 .text(' tap here to get directions')
    //         )
    //     }
    //
    //     curResponse.prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'Hours':
    //     botWrote = true;
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(settings.answers["Hours"])
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'Email':
    //     botWrote = true;
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(settings.answers["Email"])
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'Phone':
    //     botWrote = true;
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(settings.answers["Phone"])
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'Fact_1':
    //     botWrote = true;
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(aboutOptions[0])
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'Fact_2':
    //     botWrote = true;
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(aboutOptions[1])
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'Fact_3':
    //     botWrote = true;
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(aboutOptions[2])
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //     break;
    // case 'About':
    //     botWrote = true;
    //
    //     if((aboutOptions[0] === "About_1") && (aboutOptions[1] === "About_2") && (aboutOptions[2] === "About_3")) {
    //         messText = "Sorry, but I don't know anything about that";
    //         correctAnswer = false;
    //     } else {
    //         messText = aboutOptions[indexAboutUs];
    //     }
    //
    //     indexAboutUs++;
    //     if(indexAboutUs > 2) {
    //         indexAboutUs = 0;
    //     }
    //
    //     $('<div class="message-outer bot">')
    //         .append(
    //             message.text(messText)
    //         )
    //         .prependTo($('#chat-window').find('.message-container'));
    //
    //     break;
    default:
        botWrote = true;
        if (response.result.fulfillment.speech !== "") {
            $('<div class="message-outer bot">')
                .append(
                    message.text(response.result.fulfillment.speech)
                )
                .prependTo($('#chat-window').find('.message-container'));
        } else {
            $('<div class="message-outer bot">')
                .append(
                    message.text("I'm sorry, but I can't really understand you.")
                )
                .prependTo($('#chat-window').find('.message-container'));
        }
        break;
}