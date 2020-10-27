class CreateLineItems < ActiveRecord::Migration[6.0]
  def change
    create_table :line_items do |t|
      t.integer :cart_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, default: 1

      t.timestamps
    end
  end
end
