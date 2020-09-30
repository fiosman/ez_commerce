# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  body        :text             not null
#  price       :decimal(8, 2)    not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer          not null
#
class Product < ApplicationRecord
  validates_presence_of :body, :price, :category_id
  validates :price, numericality: { only_decimal: true }
  validates :category_id, numericality: { only_integer: true }

  belongs_to :category
end
