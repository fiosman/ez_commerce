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
require 'rails_helper'

RSpec.describe Product, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
