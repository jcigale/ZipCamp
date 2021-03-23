# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demoUser = User.create({first_name: 'Demo', last_name: 'User', email: 'demo@gmail.com', zipcode: 12345, password: '12345678'}) 
Spot.create({description:'blah blah blah', longitude:'123', latitude:'456', photos:[1], spot_type:'banana', details: {1=>2}, activities: ['swimming']})