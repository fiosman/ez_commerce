class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?
  protect_from_forgery unless: -> { request.format.json? }

  def logged_in?
    return current_user ? true : false
  end

  def current_user
    return nil if !session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_in!(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end
end
