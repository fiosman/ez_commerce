class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

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