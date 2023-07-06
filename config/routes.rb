Rails.application.routes.draw do
  resources :bookings
  resources :properties
  resources :users

  # post "/add_properties" to: "properties#create"
  # get "/properties" to: "properties#show"
  # delete "/delete_property" to: "properties#destroy"
  get "/approvedproperties", to:"properties#approvedproperties"
  patch "/properties/approve/:id", to:"properties#approve"

  post "/signup", to: "users#create"
  get "/current_user", to: "users#current_user"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
