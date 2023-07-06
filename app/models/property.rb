class Property < ApplicationRecord
    has_many :bookings, dependent: :destroy
    has_many :users, through: :bookings

    validates :name, presence: true, uniqueness: true
    validates :location, presence: true, uniqueness: true
    validates :description, presence: true, uniqueness: true
    validates :image_url, presence: true, uniqueness: true
end
