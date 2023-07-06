# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
# #   Character.create(name: "Luke", movie: movies.first)

# puts '🌱 Seeding...'

# locations = ["New York", "Chicago", "Seattle", "Washington D.C.", "Denver", "Houston"]
# names = ["Gently Used", "Well-Loved", "Heirloom", "Antique", "WANTED", "Slightly damaged"]
# descriptions = ["Free to a good home", "(batteries not included)", "As is", "Like new", "(assembly required)", "No returns!!!!"]
# image_urls = ["Free to a good home", "(batteries not included)", "As is", "Like new", "(assembly required)", "No returns!!!!"]


# 5.times do
#   user = User.create(
#     email: Faker::Internet.username,
#     # city: cities.sample
#   )

#   rand(2..4).times do
#     user.bookings.create(
#       price: rand(1..500)
#       property_id: user.properties.create(
#         name: names.sample,
#         location: locations.sample
#         description: descriptions.sample,
#         image_url: ""
#       )
#     )
#   end
# end

# # Property.create(name: "Taila Heights", location: "Nairobi", description: "Really nice House 1", image_url: "https://www.pexels.com/photo/white-and-red-wooden-house-with-fence-1029599/")
# # Property.create(name: "Yaya Heights", location: "Nakuru", description: "Really nice House 2", image_url: "https://www.pexels.com/photo/white-and-red-wooden-house-with-fence-1029599/")
# # Property.create(name: "Venus Heights", location: "Kisumu", description: "Really nice House 3", image_url: "https://www.pexels.com/photo/white-and-red-wooden-house-with-fence-1029599/")

# # Booking.create(price: 200, property_id: 1, user_id: 3)
# # Booking.create(price: 400, property_id: 2, user_id: 2)
# # Booking.create(price: 600, property_id: 3, user_id: 1)

# puts '✅ Done seeding'


# puts "Destroying old data"
# User.destroy_all
# Property.destroy_all
# Booking.destroy_all


# puts "Seeding Users..."
# 5.times do
#   User.create!(
#     email: Faker::Internet.email,
#     password_digest: Faker::Internet.password,
#     is_admin: Faker::Boolean.boolean
#   )
# end

puts "Seeding properties..."
10.times do
  Property.create!(
    name: Faker::Address.community,
    location: Faker::Address.city,
    description: Faker::Lorem.sentence,
    image_url: Faker::LoremPixel.image(size: "300x200", is_gray: false, category: 'city')
  )
end
puts "Seeding bookings..."
20.times do
  Booking.create!(
    price: Faker::Commerce.price(range: 100..1000),
    user_id: User.pluck(:id).sample,
    property_id: Property.pluck(:id).sample
  )
end

puts "Done seeding!"
