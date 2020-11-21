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
class Cart < ApplicationRecord
  belongs_to :user, optional: true
  has_many :line_items, dependent: :destroy

  after_initialize :set_cart_token
  validates_presence_of :cart_token

  def add_line_items(line_items)
    line_items.each do |line_item|
      self.line_items.create(line_item.attributes)
    end
  end

  private

  def set_cart_token
    self.cart_token ||= SecureRandom::hex(8)
  end
end
