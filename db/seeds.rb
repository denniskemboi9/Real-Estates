# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding Users..."

10.times do
  User.create!(
    email: Faker::Internet.email,
    password_digest: Faker::Internet.password
    # is_admin: Faker::Boolean.boolean
  )
end

15.times do
    Property.create(
      name: Faker::Address.community,
      location: Faker::Address.full_address,
      price: Faker::Number.decimal(l_digits: 6, r_digits: 2),
      user_id: Faker::Number.between(from: 1, to: 10)
    )
  end
puts "Done Seeding Properties!"




