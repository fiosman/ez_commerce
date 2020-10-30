class ChangeCartTokenNull < ActiveRecord::Migration[6.0]
  def change
    change_column_null :carts, :cart_token, false
  end
end
