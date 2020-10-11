Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :index]
    resource :session, only: [:destroy, :create]
    resources :products, except: [:new, :edit, :show] do
      resources :reviews, only: [:create, :destroy]
    end
    resources :categories, only: [:create, :destroy, :index]
  end

  root to: "static_pages#root"
end
