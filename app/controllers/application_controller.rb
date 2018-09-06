class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #未ログイン時にログインページへ遷移
  before_action :authenticate_user!, except: :index
  before_action :configure_permitted_parameters, if: :devise_controller?


  def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname])
  end
end
