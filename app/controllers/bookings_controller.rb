class BookingsController < ApplicationController

    # User can get all their bookings
    def index
        render json: Booking.all
    end

    # A User can book a property//Can create a booking
    def create
        booking = @current_user.bookings.create!(booking_params)
        render json: booking, status: :created
    end

        
    private
  
    def booking_params
      params.permit(:price, :property_id)
    end
end



