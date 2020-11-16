class Api::CartsController < ApplicationController
  before_action :current_cart, only: :show

  def show
    @cart = @current_cart
    render :show
  end

  def destroy
  end
end
