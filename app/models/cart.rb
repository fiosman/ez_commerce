# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  token      :string           not null
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

  attr_accessor :token

  after_initialize :set_cart_token

  def set_cart_token
    @token = SecureRandom::hex(8)
  end
end
