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
    spot_type:'Lodging',
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

s5 = Spot.create({
    title: 'Old Faithful Inn',
    description:'Located in Yellowstone National Park, Old Faithful Inn - Inside the Park is in the mountains and in a national park. The areas natural beauty can be seen at Old Faithful and Grand Prismatic Spring. Be sure not to miss outdoor adventures like hiking/biking trails and ecotours, or hop on a bike rental nearby and take a self-guided tour around Yellowstone National Park.',
    longitude:'-110.3979311',
    latitude:'44.4599892',
    photo_url: 'https://images.goodsam.com/trailerlifedirectory/largefeatured/1000x/pho_300006485_01.jpg',
    spot_type:'Lodging',
    details: {1=>2},
    activities: ['swimming'],
    price: 218})

s6 = Spot.create({
    title: 'Loraine Park',
    description:'Less than 25 miles north of Boston and <5 miles from the interstate, Lorraine Park campground at Harold Parker State Forest provides ample on-site activities and also serves as a jumping off point for exploring the Massachusetts coast north of Boston or a stop en route to NH and Maine.',
    longitude:'-71.28248423125',
    latitude:'42.43240290482139',
    photo_url: 'https://media-cdn.tripadvisor.com/media/photo-s/04/4d/ea/63/lorraine-park-campground.jpg',
    spot_type:'Campsite',
    details: {1=>2},
    activities: ['swimming'],
    price: 56})

s7 = Spot.create({
    title: 'Normandy Farms Camping',
    description:'Nice spot to pitch a tent very close to a beautiful mountain!',
    longitude:'-71.2831756',
    latitude:'42.040577',
    photo_url: 'https://images.goodsam.com/trailerlifedirectory/largefeatured/1000x/pho_300006485_01.jpg',
    spot_type:'Campsite, RVs, Lodging',
    details: {1=>2},
    activities: ['swimming'],
    price: 56})

s8 = Spot.create({
    title: 'Mountain View Campground',
    description:'Camping near Stowe, Vermont. Offering open, grassy and full hookup RV sites that back up to the woods, and tent sites that overlook the Lamoille River.',
    longitude:'-72.53643',
    latitude:'44.568742',
    photo_url: 'https://www.roverpass.com/system/pictures/images/000/025/935/full/mountain-view-campground-morrisville-vt-5.JPG?1487437117',
    spot_type:'Campsite, RVs',
    details: {1=>2},
    activities: ['swimming'],
    price: 54})


s9 = Spot.create({
    title: 'Grant Village Campground',
    description:'Located on the southwest shore of Yellowstone Lake, the Grant Village Campground is situated at an elevation of approximately 7,800 feet in a lodgepole pine forest, just a few miles from the enchanting West Thumb Geyser Basin. This geyser basin is located on the shore of the lake, with an easily navigated boardwalk and trail system providing terrific views of the various hot springs and thermal features. The campground offers a relaxing setting with easy access to many services and amenities. Grant Village Campground is just over 40 miles from Colter Bay.',
    longitude:'-110.5662405',
    latitude:'44.3953541',
    photo_url: 'https://www.nps.gov/common/uploads/grid_builder/yell/crop16_9/13266D98-1DD8-B71B-0BE23ADC28F89F3F.jpg?width=465&quality=90&mode=crop',
    spot_type:'Campsite, RVs',
    details: {1=>2},
    activities: ['swimming'],
    price: 74})

s10 = Spot.create({
    title: 'Topnotch Resort',
    description:'Against the breathtaking backdrop of New England’s Green Mountains, Stowe Vermont’s allure arrives unforgettably at Topnotch Resort. Tucked into a 120-acre wooded glade at the foothills of Mount Mansfield, Topnotch is a grand definition of mountain spirit, a sophisticated gem where alpine luxury is served on an intimate scale. Wrap yourself in the warm hospitality that has made this resort and spa a mountain destination for decades – the ideal basecamp for Stowe’s exhilarating four-season adventures.',
    longitude:'-72.7387608',
    latitude:'44.4945508',
    photo_url: 'https://media-cdn.tripadvisor.com/media/photo-s/04/4c/ac/7a/the-new-topnotch-resort.jpg',
    spot_type:'Campsite',
    details: {1=>2},
    activities: ['swimming'],
    price: 199})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s1.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s2.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s3.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s4.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s5.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s6.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s7.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s8.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s9.id
})

Review.create({
    title: 'good time',
    body: 'we had a good time at this location',
    recommended: true,
    author_id: demoUser.id,
    spot_id: s10.id
})