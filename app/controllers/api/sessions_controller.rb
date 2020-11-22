class Api::SessionsController < ApplicationController
  before_action :current_items, only: [:create]
  after_action :transfer_items, only: [:create]

  def create
    @user =
      User.find_by_credentials(
        params[:user][:username],
        params[:user][:password]
      )

    if @user
      log_in!(@user)
      render "api/users/show.json.jbuilder"
    else
      render json: ["Invalid username and/or password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render json: {}
    else
      render json: ["No one logged in!"], status: 404
    end
  end
end
