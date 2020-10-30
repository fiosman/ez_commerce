class AddCartTokenToCarts < ActiveRecord::Migration[6.0]
  def change
    add_column :carts, :cart_token, :string
  end
end
