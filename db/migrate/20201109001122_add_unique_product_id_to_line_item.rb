class AddUniqueProductIdToLineItem < ActiveRecord::Migration[6.0]
  def change
    add_index :line_items, :product_id, unique: true
  end
end
