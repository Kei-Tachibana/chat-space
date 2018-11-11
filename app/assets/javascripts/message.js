$(function() {
  function appendMessage(message) {
    let messageHTML = "";
    let imageHTML = "";
    if (message.body) {
      messageHTML += message.body;
      console.log(messageHTML);
    }
    if (message.image) {
      imageHTML += `<img src=${message.image}>`
      console.log(imageHTML);
    }
    let html = `<div class="upper-message">
                  <div class="upper-message__user-name">
                      ${message.name}
                  </div>
                  <div class="upper-message__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="lower-message">
                  <p class="lower-message__content">
                    ${messageHTML}
                  </p>
                  ${imageHTML}
                </div>`
    return html;
}

  $('.message-form').on ('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let href = $(this).attr('action');
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      appendMessage(data);
      $('.message-list').animate( { scrollTop: $('.message-list')[0].scrollHeight } );
    })
    .fail(function(){
      alert("Server Connection Error");
    });
  });
});
