# REAL-ESTATES APP
# Project Description
Is an innovative and user-friendly real estate app designed to revolutionize the way people buy, sell, and rent properties. With a comprehensive set of features and a seamless user experience. The frontend/client server is running on http://localhost:4000 while the backend is based on http://localhost:3000 to enable the user to achieve the deliverables.
# Table of content
Technologies Used
Installations
Deliverables
Contributions
License and Copyright
Author Info
# Technologies Used
React
Ruby on Rails
SQLite3
# Installation & Set up
Clone the repository
https://github.com/denniskemboi9/real-estates
Install Dependecies
bundle install
Migration and Seeding
rails db:migrate db:seed
Run Server
rails s(backend).
cd into client directory, npm install then npm start for (frontend).
# Project Guidelines
Relationships
A user has many bookings and has many property
A property has many users and many bookings
A booking belongs to user and property
# Deliverables
POST /users
http://localhost:3000/signup
[
    {
        "id": 1,
        "email": "gmail.com",
        "password": "12345"
    },
    {
        "id": 2,
        "email": "yahoo.com",
        "password": "23456"
    },
]
DELETE /user
http://localhost:3000/logout
{
    "Logout successfull"
}
GET /current_user
http://localhost:3000/current_user
{
    "id": 1,
    "email": "gmail.com",
    "password": "12345",
}
GET /properties
http://localhost:3000/properties
{
        "id": 1,
        "name": "5 Star",
        "description": "3 bedroom"
        "location": "Nairobi"
    },
    {
        "id": 2,
        "name": "Luxury villa",
        "description": "Bungalow."
        "location": "Nanyuki"
    },
    {
        "id": 3,
        "name": "elegant mansion",
        "description": "2 bedroom"
        "location": "Isiolo"
    },
POST /properties
http://localhost:3000/properties
[
    {
        "id": 1,
        "name": "5 Star",
        "description": "3 bedroom"
        "location": "Nairobi"
    },
    {
        "id": 2,
        "name": "Luxury villa",
        "description": "Bungalow."
        "location": "Nanyuki"
    },
    {
        "id": 3,
        "name": "elegant mansion",
        "description": "2 bedroom"
        "location": "Isiolo"
    },
]
DELETE //properties/:id
{
    "property deleted successfully."
}
POST /bookings
{
    "price": 450000
    "property_id": 1
    "user_id": 4
}
# License and Copyright.
# MIT license
Copyright (c) [2023] [Gorety/Dennis/Timothy/Cynther]
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
# Author Info
    Gorety/Dennis/Timothy/Cynther
