class Api::CategoriesController < ApplicationController
  def create
    @category = Category.new(category_params)

    if @category.save
      render :show
    else
      render json: @category.errors.full_messages, status: 422
    end
  end

  def destroy
    @category = Category.find(params[:id])

    if @category
      @category.destroy
      render :show
    else
      render json: ["Uh oh, something went wrong here!"], status: 401
    end
  end

  def index
    @categories = Category.all
    render :index
  end

  private

  def category_params
    params.require(:category).permit(:tagging)
  end
end
