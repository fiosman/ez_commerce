class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.integer :rating, null: false, default: 1

      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :product_id
    add_index :reviews, :rating
  end
end
