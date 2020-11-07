class Api::LineItemsController < ApplicationController
  def create
    @line_item = current_cart.line_items.new(line_item_params)

    if @line_item.save
      render :show
    else
      render json: @line_item.errors.full_messages, status: 422
    end
  end

  def index
    @line_items = current_cart.line_items
    render :index
  end

  def update
    @line_item = LineItem.find(params[:id])

    if @line_item.update(line_item_params)
      render :show
    else
      render json: @line_item.errors.fulL_messages, status: 401
    end
  end

  def destroy
    @line_item = LineItem.find(params[:id])

    if @line_item
      @line_item.destroy
      render :show
    else
      render json: ["Something went wrong here..."]
    end
  end

  private

  def line_item_params
    params.require(:line_item).permit(:product_id, :quantity)
  end
end
