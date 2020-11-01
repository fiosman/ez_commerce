class RemoveUserIdIndexFromCarts < ActiveRecord::Migration[6.0]
  def change
    remove_index :carts, :user_id
  end
end
