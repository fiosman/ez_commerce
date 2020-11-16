class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?, :current_cart
  protect_from_forgery unless: -> { request.format.json? }

  rescue_from CanCan::AccessDenied do |exception|
    render json: ["You do not have the permissions to perform this action."], status: 403
  end

  before_action :current_cart, except: :log_in!

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

  def current_cart
    if logged_in?
      @current_cart = current_user.cart
    else
      if session[:cart_token]
        @current_cart = Cart.find_by(cart_token: session[:cart_token])
      else
        @current_cart = Cart.create
        session[:cart_token] = @current_cart.cart_token
      end
    end
  end
end
