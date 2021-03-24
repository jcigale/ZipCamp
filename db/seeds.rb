# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Spot.delete_all
Review.delete_all
Booking.delete_all


demoUser = User.create({first_name: 'Demo', last_name: 'User', email: 'demo@gmail.com', zipcode: 12345, password: '12345678'}) 
s1 = Spot.create({
    title: 'Hoss Campground',
    description:'Beautiful campground with a dozen spots right by the lake and close to town!',
    longitude:'-74.41991',
    latitude:'43.96848',
    photo_url: 'https://assets.simpleviewinc.com/simpleview/image/fetch/q_75/https://assets.simpleviewinc.com/simpleview/image/upload/crm/newyorkstate/Hosses_Campground0_b24da16b-9d26-5573-a68af1abbbbba572.jpg',
    spot_type:'RVs',
    details: {1=>2},
    activities: ['swimming'],
    price: 80})

s2 = Spot.create({
    title: 'Sargent Pond',
    description:'Beautiful secluded site to pitch a tent in the woods!',
    longitude:'-74.5612049',
    latitude:'43.8608342',
    photo_url: 'http://www.therelativeobserver.com/wp-content/uploads/2018/08/SMP.jpg',
    spot_type:'Campsite',
    details: {1=>2},
    activities: ['swimming'],
    price: 22})

s3 = Spot.create({
    title: 'Abenaki House',
    description:'Spacious house for the family to spend a week up at the lake!',
    longitude:'-74.44109006164943',
    latitude:'43.965291487508935',
    photo_url: 'https://p.rdcpix.com/v01/l0be8b143-m0xd-w1020_h770_q80.jpg',
    spot_type:'Glamping',
    details: {1=>2},
    activities: ['swimming'],
    price: 180})

s4 = Spot.create({
    title: 'Owls Head',
    description:'Nice spot to pitch a tent very close to a beautiful mountain!',
    longitude:'-74.4527724',
    latitude:'43.9643133',
    photo_url: 'https://cdn.shopify.com/s/files/1/0817/7807/files/OwlsHead_Adirondacks_grande.jpg?10623345405295115173',
    spot_type:'Campsite',
    details: {1=>2},
    activities: ['swimming'],
    price: 28})