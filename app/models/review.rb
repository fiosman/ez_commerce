class Review < ApplicationRecord
  validates_presence_of :body, :user_id, :product_id, :rating

  belongs_to :user
  belongs_to :product
end
