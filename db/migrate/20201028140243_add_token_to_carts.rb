class AddTokenToCarts < ActiveRecord::Migration[6.0]
  def change
    add_column :carts, :token, :string, null: false
  end
end
