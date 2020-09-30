# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  tagging    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_categories_on_tagging  (tagging) UNIQUE
#
class Category < ApplicationRecord
  validates_presence_of :tagging
  validates_uniqueness_of :tagging

  has_many :products
end
