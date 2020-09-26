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
end
