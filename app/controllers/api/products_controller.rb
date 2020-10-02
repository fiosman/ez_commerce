class Api::ProductsController < ApplicationController
  def create
    @product = Product.new(product_params)

    if @product.save
      render :show
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  def update
    @product = Product.find(params[:product][:id])

    if @product.update(product_params)
      render :show
    else
      render json: @product.errors.full_messages, status: 401
    end
  end

  # def show
  #   @product = Product.find(params[:product][:id])
  #   render :show
  # end

  def index
    @products = Product.all.includes(:category)
    render :index
  end

  def destroy
    @product = Product.find(params[:product][:id])

    if @product
      @product.destroy
      render json: {}
    else
      render json: ["Something went wrong here..."]
    end
  end

  private

  def product_params
    params.require(:product).permit(:title, :body, :price, :category_id)
  end
end
