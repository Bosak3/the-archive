Rails.application.routes.draw do
  resources :reviews
  resources :movies, only: [:index, :show]
  resources :books, only: [:index, :show]
  resources :games, only: [:index, :show]
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
