class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :tagging, null: false

      t.timestamps
    end

    add_index :categories, :tagging, unique: true
  end
end
