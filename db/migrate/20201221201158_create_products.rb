class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.integer :category_id, null: false
      t.text :body, null: false
      t.decimal :price, precision: 8, scale: 2, null: false
      t.string :title, null: false

      t.timestamps
    end
  end
end
