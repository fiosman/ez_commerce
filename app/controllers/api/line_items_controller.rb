class Api::LineItemsController < ApplicationController
  def create
  end

  def update
  end

  def destroy
  end

  private

  def line_item_params
    params.require(:line_item).permit(:product_id, :cart_id, :quantity)
  end
end
