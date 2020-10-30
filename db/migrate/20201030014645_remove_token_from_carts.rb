class RemoveTokenFromCarts < ActiveRecord::Migration[6.0]
  def change
    remove_column :carts, :token
  end
end
