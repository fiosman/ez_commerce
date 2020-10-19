class Review < ApplicationRecord
  validates_presence_of :body, :user_id, :product_id, :rating

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  belongs_to :product
end
