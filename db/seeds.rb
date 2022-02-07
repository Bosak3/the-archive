puts "Seeding data...."

puts "Seeding users...."

User.destroy_all

user1 = User.create!(name: "Adam Bosak", username:"bosak3", password_digest:"isthisalted?", email:"bobobaggins@hobbiton.com")

puts "Seeding Movies..."

Movie.destroy_all

movie1 = Movie.create!(title:"The Hobbit", director:"Arthur Rankin", genre:"Fantasy", release_year: "1977", purchase_url:"https://www.amazon.com/Hobbit-Orson-Bean/dp/B00BMWJOF2", image_url:"https://m.media-amazon.com/images/I/91hqH+1p8DL._SX522_.jpg")

puts "Seeding Books..."

Book.destroy_all

book1 = Book.create!(title:"Malazan Book of the Fallen (Complete Series)", author:"Steven Erickson", genre:"Military Fantasy", image_url:"https://m.media-amazon.com/images/I/51fEdoux39L.jpg", purchase_url: "https://www.amazon.com/Complete-Malazan-Book-Fallen-ebook/dp/B00HL0MA3W", release_year:"2014")

puts "Seeding Games..."

Game.destroy_all

game1 = Game.create!(title:"Middle Earth: Shadow of War", genre:"Action/Adventure", purchase_url:"https://store.steampowered.com/agecheck/app/356190/", image_url:"https://s3.gaming-cdn.com/images/products/1961/orig/game-steam-middle-earth-shadow-of-war-cover.jpg")


puts "Seeding Reviews..."

Review.destroy_all

review1 = Review.create!(description: "Lovingly crafted animated classic following the adventures of Bilbo Baggins from J.R.R Tolkiens beloved fantasy epic 'The Hobbit'.", movie_id: movie1.id, user_id: user1.id)


puts "Done seeding :)!"