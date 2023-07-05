class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    # Signup
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: {success: "Successful Signup"}, status: :created
    end
  
    def show
      render json: @current_user
    end
  
    private
  
    def user_params
      params.permit(:email, :password, :password_confirmation)
    end
  end