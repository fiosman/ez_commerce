class Api::CategoriesController < ApplicationController
  def create
    @category = Category.new(category_params)

    if @category.save
      render :show
    else
      render json: @category.errors.full_messsages, status: 422
    end
  end

  def destroy
    @category = Category.find(params[:category][:id])

    if @category
      @category.destroy
      render json: {}
    else
      render json: ["Uh oh, something went wrong here!"], status: 401
    end
  end

  def index
    @categories = Category.all
    render :show
  end

  private

  def category_params
    params.require(:category).permit(:tagging)
  end
end
