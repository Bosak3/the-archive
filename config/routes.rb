Rails.application.routes.draw do
  resources :reviews
  resources :movies
  resources :books
  resources :games
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
