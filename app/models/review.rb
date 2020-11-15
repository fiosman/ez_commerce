# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  rating     :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  product_id :integer          not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_reviews_on_product_id  (product_id)
#  index_reviews_on_rating      (rating)
#  index_reviews_on_user_id     (user_id)
#
class Review < ApplicationRecord
  resourcify
  validates_presence_of :body, :user_id, :product_id, :rating
  validates_numericality_of :rating, only_integer: true, message: "must be of valid format (i.e. 3 or 5)"
  validates_inclusion_of :rating, in: 1..5, message: "must be between 1 and 5 (inclusive)"
  validates_uniqueness_of :user_id, scope: :product_id, message: "has already reviewed this product!"

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  belongs_to :product
end
