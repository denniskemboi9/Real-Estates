class PropertiesController < ApplicationController

    # Show All Properties
    def index
      property = Property.all
      render json: property
      # { success: "Properties"}
    end
    
    # # Show Property by ID
    # def show
    #   property_by_id = Property.find_by(id: params[:id])
    #   render json: property_by_id, status: :ok
    #   # Display syuccs message
    # end

    # Create New Property
    def create
      property = @current_user.properties.create!(property_params)
      render json: { success: "Successfully added property" }, status: :created
    end

    # Delete Property
    def destroy
      property = Property.find_by(id: params[:id])
      property.destroy
      render json: {message: "Property Deleted Succesfully"}
    end

    # # Approve Property posts
    # def approve_property
    #   property = Property.find_by(id: params[:id])
    #   if property.is_admin
        
    # end
    
    private
    def property_params
      params.permit(:name, :location, :description, :image_url)
    end
end
