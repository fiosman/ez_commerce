Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :user, only: [:create, :update]
    resource :session, only: [:destroy, :create]
    resources :products, except: [:new, :edit, :show]
    resources :categories, only: [:create, :destroy, :index]
  end

  root to: "static_pages#root"
end
