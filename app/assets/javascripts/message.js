$(function() {
  function buildHTML(message) {
    let imageHTML = "";
    if (message.image) {
      imageHTML += `<img src="${message.image}">`;
    }
    let html = `<div class="message" data-id="${message.id}">
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
    return html;
  }

  $(".message-form").on("submit", function(e){
    e.preventDefault();
    let $list = $(".message-list")
    let formData = new FormData(this);
    $.ajax({
      url: $(".message-form").attr("action"),
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      if (data.text != null || data.image != null) {
        let newMessage = buildHTML(data)
        $list.append(newMessage)
        $list.animate({scrollTop: $list[0].scrollHeight});
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
});
