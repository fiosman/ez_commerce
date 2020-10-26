# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  price       :decimal(8, 2)    not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer          not null
#
class Product < ApplicationRecord
  resourcify
  validates_presence_of :body, :price, :category_id, :title
  validates_numericality_of :price, only_decimal: true, message: "must be of valid format (i.e. $3.00)"
  validates_numericality_of :category_id, only_integer: true

  belongs_to :category
  has_many :reviews
  has_one_attached :image

  def average_rating
    self.reviews.count > 0 ? self.reviews.average(:rating).to_f.round : 0
  end
end
