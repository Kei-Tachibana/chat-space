#supportディレクトリは手動で作成

module ControllerMacros
  def login(user)
    #routes.rb内のdeviseforのリソースをマッピングする処理
    #後述の[signin]などが使用できるようになる
    @request.env["devise.mapping"] = Devise.mappings[:user]
    #作成したユーザでのログイン処理
    sign_in user
  end
end
