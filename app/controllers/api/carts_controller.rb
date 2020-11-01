class Api::CartsController < ApplicationController
  def show
    @cart = current_cart
    render :show
  end

  def destroy
  end
end
