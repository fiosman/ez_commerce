# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  cart_token :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
# Indexes
#
#  index_carts_on_user_id  (user_id) UNIQUE
#
class Cart < ApplicationRecord
  belongs_to :user, optional: true
  has_many :line_items, dependent: :destroy

  after_initialize :set_cart_token
  validates_presence_of :cart_token
  validates_uniqueness_of :user_id

  def add_item(product_params)
    current_item = self.line_items.find_by(product_id: product_params[:line_item][:product_id])
    if current_item
      current_item.quantity += product_params[:line_item][:quantity]
      current_item.save
    else
      new_item = self.line_items.create(product_id: product_params[:line_item][:product_id])
    end
  end

  private

  def set_cart_token
    self.cart_token ||= SecureRandom::hex(8)
  end
end
