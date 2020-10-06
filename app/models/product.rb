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
  validates_presence_of :body, :price, :category_id, :title
  validates_numericality_of :price, only_decimal: true, message: "must be of valid format (i.e. $3.00)"
  validates_numericality_of :category_id, only_integer: true

  belongs_to :category
  has_one_attached :image
end
