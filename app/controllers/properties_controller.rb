class PropertiesController < ApplicationController

    def index
        render json: Property.all
      end
    
      def create
        # property = @current_user.recipes.create!(recipe_params)
        property = Property.create(property_params)
        render json: property, status: :created
      end
    
      private
    
      def property_params
        params.permit(:name, :location, :price)
      end
end
