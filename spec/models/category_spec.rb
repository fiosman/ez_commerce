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
require 'rails_helper'

RSpec.describe Category, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
