Rails.application.routes.draw do
  resources :bookings, only: [:index, :show, :destroy]
  resources :properties

  post "/bookings/:property_id", to: "bookings#create"
  
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


