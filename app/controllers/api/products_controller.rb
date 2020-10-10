class Api::ProductsController < ApplicationController
  load_and_authorize_resource

  def create
    @product = Product.new(filtered_params)
    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = Product.find(params[:id])
    if @product.update(filtered_params)
      render :show
    else
      render json: @product.errors.full_messages, status: 401
    end
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def index
    @products = Product.all.includes(:category)
    render :index
  end

  def destroy
    @product = Product.find(params[:id])

    if @product
      @product.destroy
      render :show
    else
      render json: ["Something went wrong here..."]
    end
  end

  private

  def product_params
    params.require(:product).permit(:id, :title, :body, :price, :category_id, :image)
  end

  def filtered_params
    product_params[:image].blank? ? product_params.except(:image) : product_params
  end
end
