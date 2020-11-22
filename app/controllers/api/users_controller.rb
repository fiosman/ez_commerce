class Api::UsersController < ApplicationController
  before_action :current_items, only: [:create]
  after_action :transfer_items, only: [:create]

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in!(@user)
      Cart.create!(user_id: @user.id)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:user][:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :username, :password)
  end
end
