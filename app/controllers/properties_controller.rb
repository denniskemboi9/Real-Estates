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
    def approvedproperties
      properties = Property.where(is_approved: true)
      render json: properties.as_json(include: :user)
  end

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

    def approve
      current_user=User.find_by(id: session[:user_id])
      if current_user.is_admin==true
          property = Property.find_by(id: params[:id]) #value or null
          if property
              property.update(is_approved: true)
              render json: {success: "property Approved... Can be seen by users"}, status: :created
          else
              render json: {error: "Property not found"}, status: :not_found
          end
      else
          render json: {error: "Only admin can perform such operation"}, status: :not_found
      end
  end
    
    private
    def property_params
      params.permit(:name, :location, :description, :image_url)
    end
end
