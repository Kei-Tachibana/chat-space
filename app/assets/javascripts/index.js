$(function(){
  let userList = $("#user-search-result");

  function appendUser(user){
    let body = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">add</a>
                </div>`;
    userList.append(body);
  }

  function buildHTML(id, name){
    let html = `<div class="chat-group-user clearfix js-chat-member" id="chat-group-user-8">
                  <input name="group[user_ids][]" type="hidden" value="${id}">
                  <p class="chat-group-user__name">${name}</p>
                  <a class="user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn">delete</a>
                </div>`;
    return html;
  }

  $("#user-search-field").on("keyup", function(){
    let input = $(this).val();
    $.ajax({
      url: "/users",
      type: "GET",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users){
      userList.empty();
      if (users !== null) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
    })
    .fail(function(){
      alert("ユーザー検索に失敗しました");
    })
  });

  //jqueryで動的に作成したDOMに対してイベントを生成する
  $(document).on("click", ".chat-group-user__btn--add", function(){
    let userId = $(this).attr("data-user-id");
    let userName = $(this).attr("data-user-name");
    let html = buildHTML(userId, userName);
    $("#chat-group-users").append(html);
  });
  $(document).on("click", ".js-remove-btn", function(){
    $(".js-chat-member").remove();
  });
});
