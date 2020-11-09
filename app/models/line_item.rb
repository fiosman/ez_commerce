# == Schema Information
#
# Table name: line_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          default(1)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cart_id    :integer          not null
#  product_id :integer          not null
#
class LineItem < ApplicationRecord
  validates_uniqueness_of :product_id, scope: :cart_id, message: "is already in your cart!"
  belongs_to :cart
  belongs_to :product
end
