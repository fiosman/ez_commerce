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
  has_many :reviews, dependent: :destroy
  has_many :line_items, dependent: :destroy
  has_one_attached :image

  after_commit :ensure_image_attached, on: [:create]

  def average_rating
    self.reviews.count > 0 ? self.reviews.average(:rating).to_f.round : 0
  end

  private

  def ensure_image_attached
    unless self.image.attached?
      self.image.attach(io: File.open(Rails.root.join("app", "assets", "images", "default", "default_product.png")),
                        filename: "default_product.png",
                        content_type: "image/jpg")
    end
  end
end
