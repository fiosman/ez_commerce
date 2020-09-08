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

  describe "PATCH #update" do
    before(:each) { User.create(username: "bobbyjones", password: "iamthepassword") }
    context "with valid params" do
      it "renders the show template, return 200 status code and updates user" do
        patch :update, params: { user: { id: User.last.id, username: "jason", password: "nolongerpassword" } }, format: :json
        expect(response).to have_http_status(200)
        expect(response).to render_template(:show)
        expect(User.last.username).to eq("jason")
      end
    end

    context "with invalid params" do
      it "returns a 401 status code and does not update user" do
        patch :update, params: { user: { id: User.last.id, username: "", password: "iamthepassword" } }, format: :json
        expect(response).to have_http_status(401)
        expect(User.last.username).to eq("bobbyjones")
      end
    end
  end
end
