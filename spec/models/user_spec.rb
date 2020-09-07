# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
require "rails_helper"

RSpec.describe User, type: :model do
  let!(:user) { create(:user) }

  describe "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:session_token) }
    it { should validate_uniqueness_of(:session_token) }
    it { should validate_presence_of(:password_digest) }
  end

  describe "associations"

  describe "class methods" do
    describe "::find_by_credentials" do
      context "when given correct credentials" do
        it "should return the matching user" do
          right_user = User.find_by_credentials("iamyou", "password")
          expect(right_user).to eq(user)
        end
      end
      context "when given incorrect credentials" do
        it "should return nil" do
          wrong_user = User.find_by_credentials("wee", "woooooo")
          expect(wrong_user).to eq(nil)
        end
      end
    end
  end

  describe "instance methods" do
    describe "#reset_session_token!" do
      it "should reset the session token of user" do
        old_user_token = user.session_token
        user.reset_session_token!
        expect(user.session_token).not_to eq(old_user_token)
      end
    end
    describe "#password=" do
      context "when the password is invalid" do
        subject(:bad_pass) { build(:user, password: "hah") }
        it "returns an error" do
          bad_pass.valid?
          expect(bad_pass.errors.messages[:password]).not_to be_empty
        end
      end
      context "when the password is valid" do
        subject(:good_pass) { build(:user, password: "lol12345", username: "unique") }
        it "should assign a password digest" do
          good_pass.save!
          expect(good_pass.password_digest).not_to eq(nil)
        end
      end
    end
  end
end
