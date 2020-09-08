class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    @user = User.find(current_user.id)
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
