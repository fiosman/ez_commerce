# class Cart < ApplicationRecord
#   belongs_to :user, optional: true
#   has_many :line_items, dependent: :destroy

#   attr_accessor :token

#   after_initialize :set_cart_token

#   def set_cart_token
#     @token = SecureRandom::hex(8)
#   end
# end
