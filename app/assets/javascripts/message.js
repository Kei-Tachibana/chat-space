$(function(){
  function appendMessage(data) {
    //imageデータの有無で表示内容を分岐する
    if (data.image.url){
      let imageUrl = data.image.url;
      let html = `<div class="upper-message">
                    <div class="upper-message__user-name">
                        data.name
                    </div>
                    <div class="upper-message__date">
                      data.created_at.strftime("%Y/%m/%d %H:%M")
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      data.body
                    </p>
                    <img src="'imageUrl'" class="lower-message__image">
                  </div>`
    } else {
      let html = `<div class="upper-message">
                    <div class="upper-message__user-name">
                        data.name
                    </div>
                    <div class="upper-message__date">
                      data.created_at.strftime("%Y/%m/%d %H:%M")
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      data.body
                    </p>
                  </div>`
    }
    $('.message').append(html);
  };

  //フォームが送信されたときのイベント
  $('.form__submit').on ('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let href = window.location.href + '/messages'
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done (function(data){
      appendMessage(data);
      $(".message-list").scrollTop($(".message-list")[0].scrollHeight);
    })
    .fail (function(){
      alert("Server Connection Error")
    })
  })
})
