class Api::CartsController < ApplicationController
  before_action :current_cart

  def show
    @cart = @current_cart
    render :show
  end

  def destroy
  end
end
