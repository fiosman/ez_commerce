class RemoveProductIdIndexFromLineItems < ActiveRecord::Migration[6.0]
  def change
    remove_index :line_items, :product_id
  end
end
