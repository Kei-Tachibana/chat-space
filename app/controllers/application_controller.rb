class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #未ログイン時にログインページへ遷移
  before_action :authenticate_user!
end
