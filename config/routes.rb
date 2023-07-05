Rails.application.routes.draw do
  resources :bookings
  resources :properties


  post "/signup", to: "users#create"
  get "/current_user", to: "users#show" 
  # get "/current_user", to: "users#current_user"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
