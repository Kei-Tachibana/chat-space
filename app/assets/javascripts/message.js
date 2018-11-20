$(function() {

  let $list = $(".message-list");

  function buildHTML(message) {
    let imageHTML = "";
    if (message.image) {
      imageHTML += `<img src="${message.image}">`;
    }
    let messageHTML = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.time}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.text}
                    </p>
                      ${imageHTML}
                  </div>
                </div>`;
    return messageHTML;
  }

  function displayMessage(message) {
        let html = buildHTML(message)
        $list.append(html)
        $list.animate({scrollTop: $list[0].scrollHeight});
  };

  $(".message-form").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    $.ajax({
      url: $(this).attr("action"),
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      if (data == null) {
        return false;
      } else {
        displayMessage(data);
        $(".message-form")[0].reset();
      }
    })
    .fail(function(){
      alert("Server Connection Error");
    })
    .always(function(){
      $(".form__submit").prop("disabled", false);
    })
  });

  $(function(){
    setInterval(autoReload, 5000);
  });

  function autoReload() {
    let newMessageId = $(".message").last().data("message-id");

    if (location.pathname.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.pathname,
        type: "GET",
        data: { id: newMessageId },
        dataType: "json"
      })
      .done(function(json) {
        json.messages.forEach(function(message) {
          if (message.id > newMessageId) {
            displayMessage(message);
          };
        });
      })
      .fail(function() {
        alert("Server Connection Error");
      })
    };
  };
});
