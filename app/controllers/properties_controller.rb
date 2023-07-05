class PropertiesController < ApplicationController

    # Show All Properties
    def index
      render json: Property.all
    end
    
    # Show Property by ID
    def show
      property_by_id = Property.find_by(id: params[:id])
      render json: property_by_id, status: :ok
      # Display syuccs message
    end

    # Create New Property
    def create
      property = @current_user.properties.create!(property_params)
      render json: property, status: :created
    end

    # Delete Property
    def destroy
      property = Property.find_by(id: params[:id])
      property.destroy
      render json: {message: "Property Deleted Succesfully"}
    end
    
    private
    def property_params
      params.permit(:name, :location, :description, :image_url)
    end
end
