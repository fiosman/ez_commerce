class AddTitleToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :title, :string
  end
end
