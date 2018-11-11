class UsersController < ApplicationController

  def index
      @users = Users.where('name LIKE(?)' "%%").limit(5)
      respond_to do |format|
        format.html
        format.json
      end
  end

  def edit
  end

  def update
      if current_user.update(user_params)
          redirect_to :root
      else
          render :edit
      end
  end

  private
  def user_params
      params.require(:user).permit(:name, :email)
  end
end
