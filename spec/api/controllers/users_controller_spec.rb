require "rails_helper"

RSpec.describe Api::UsersController, type: :controller do
  describe "POST #create" do
    context "with valid params" do
      let(:valid_params) { { username: "iamhe", password: "heisme" } }
      it "renders the show template, returns 200 status code and creates user" do
        post :create, params: { user: valid_params }, format: :json
        expect(response).to render_template(:show)
        expect(response).to have_http_status(200)
        expect(User.find_by_credentials("iamhe", "heisme")).to eq(User.last)
      end
    end
    context "with invalid params" do
      let(:invalid_params) { { username: "whatisgoingon", password: "bad" } }
      it "returns a 401 status code and does not create user" do
        post :create, params: { user: invalid_params }, format: :json
        expect(response).to have_http_status(401)
        expect(User.find_by_credentials("whatisgoingon", "bad")).to be_nil
      end
    end
  end
end
