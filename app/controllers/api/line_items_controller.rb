class Api::LineItemsController < ApplicationController
  def create
    @line_item = current_cart.line_items.new(line_item_params)

    if @line_item.save
      render :show
    else
      render json: @line_item.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def line_item_params
    params.require(:line_item).permit(:product_id, :quantity)
  end
end
