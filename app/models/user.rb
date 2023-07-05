class User < ApplicationRecord
    has_many :bookings
    has_many :properties, through: :bookings
    has_secure_password

    validates :email, presence: true
    validates :password, presence: true

end
