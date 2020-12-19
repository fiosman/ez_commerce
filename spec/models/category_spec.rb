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
require "rails_helper"

RSpec.describe Category, type: :model do
  let!(:category) { create(:category) }

  describe "validations" do
    it { should validate_presence_of(:tagging) }
    it { should validate_uniqueness_of(:tagging) }
  end

  describe "associations" do
    it { should have_many(:products) }
  end
end
