$(function(){
  //messageを追加する
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

})
