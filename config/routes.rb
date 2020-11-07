Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:destroy, :create] do
      resource :cart, only: [:destroy, :show]
    end
    resources :products, except: [:new, :edit] do
      resources :reviews, only: [:create, :destroy, :index]
    end
    resources :categories, only: [:create, :destroy, :index]
    resources :line_items, only: [:create, :destroy, :update, :index]
  end

  root to: "static_pages#root"
end
