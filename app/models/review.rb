class Review < ApplicationRecord
  validates_presence_of :body, :user_id, :product_id, :rating
  validates_numericality_of :rating, only_integer: true, message: "must be of valid format (i.e. 3 or 5)"
  validates_inclusion_of :rating, in: 1..5, message: "must be between 1 and 5 (inclusive)"

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  belongs_to :product
end
