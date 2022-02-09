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

game2 = Game.create!(title:"Lego: Lord of the Rings", genre:"Adventure", purchase_url:"https://store.steampowered.com/app/214510/LEGO_The_Lord_of_the_Rings/", image_url:"https://upload.wikimedia.org/wikipedia/en/a/a0/Lego_Lord_of_the_Rings_cover.jpg")

game3 = Game.create!(title:"The Legend of Zelda: Breath of the Wild", genre:"Action/Adventure", purchase_url:"https://www.nintendo.com/games/detail/the-legend-of-zelda-breath-of-the-wild-switch/", image_url:"https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg")

game4 = Game.create!(title:"Super Mario Odyssey", genre:"Platformer", purchase_url:"https://www.nintendo.com/games/detail/super-mario-odyssey-switch/", image_url:"https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg")

game5 = Game.create!(title:"Luigi's Mansion 3", genre:"Platformer", purchase_url:"https://www.nintendo.com/games/detail/luigis-mansion-3-switch/", image_url:"https://s2.gaming-cdn.com/images/products/4810/orig/game-nintendo-luigis-mansion-3-switch-cover.jpg")

game6 = Game.create!(title:"The Elder Scrolls V: Skyrim", genre:"RPG", purchase_url:"https://store.steampowered.com/agecheck/app/489830/", image_url:"https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png")

game7 = Game.create!(title:"The Legend of Zelda: Ocarina of Time", genre:"Action/Adventure", purchase_url:"https://www.nintendo.com/games/detail/the-legend-of-zelda-ocarina-of-time-3d-3ds/", image_url:"https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg")

game8 = Game.create!(title:"The Last of Us", genre:"Action/Adventure", purchase_url:"https://www.playstation.com/en-us/games/the-last-of-us-part-ii/", image_url:"https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg")

game9 = Game.create!(title:"Dark Souls", genre:"Action/Adventure", purchase_url:"https://store.steampowered.com/agecheck/app/570940/", image_url:"https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg")

game10 = Game.create!(title:"GoldenEye 007", genre:"Action/Adventure", purchase_url:"https://www.amazon.com/GoldenEye-007-nintendo-64/dp/B00000DMAT", image_url:"https://upload.wikimedia.org/wikipedia/en/3/36/GoldenEye007box.jpg")

game11 = Game.create!(title:"Super Mario 64", genre:"Adventure/Platformer", purchase_url:"https://www.amazon.com/s?k=Super+Mario+64&crid=1906IESHVNR5Y&sprefix=super+mario+64%2Caps%2C111&ref=nb_sb_noss", image_url:"https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg")

game12 = Game.create!(title:"Castlevania: Symphony of the Night", genre:"Platformer", purchase_url:"https://store.playstation.com/en-us/product/UP0101-CUSA13434_00-CASTLEVANIA00001", image_url:"https://img.konami.com/games/castlevania/s/img/history/2020_son_us.jpg")

game13 = Game.create!(title:"Bloodborne", genre:"Action/RPG", purchase_url:"https://www.playstation.com/en-us/games/bloodborne/", image_url:"https://upload.wikimedia.org/wikipedia/en/6/68/Bloodborne_Cover_Wallpaper.jpg")

game14 = Game.create!(title:"Red Dead Redemption", genre:"Action/Adventure", purchase_url:"https://www.xbox.com/en-US/games/store/red-dead-redemption/bwklfhwt7dhc", image_url:"https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg")

game15 = Game.create!(title:"Grand Theft Auto V", genre:"Action/Adventure", purchase_url:"https://store.steampowered.com/agecheck/app/271590/", image_url:"https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png")

game16 = Game.create!(title:"Halo: Combat Evolved", genre:"FPS", purchase_url:"https://store.steampowered.com/agecheck/app/1064221/", image_url:"https://upload.wikimedia.org/wikipedia/en/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg")

game17 = Game.create!(title:"Super Mario Bros. 3", genre:"Platformer", purchase_url:"https://www.nintendo.com/games/detail/super-mario-bros-3-3ds/", image_url:"https://upload.wikimedia.org/wikipedia/en/a/a5/Super_Mario_Bros._3_coverart.png")

game18 = Game.create!(title:"The Legend of Zelda: A Link to the Past", genre:"Adventure", purchase_url:"https://www.nintendo.com/games/detail/the-legend-of-zelda-a-link-to-the-past-3ds/", image_url:"https://upload.wikimedia.org/wikipedia/en/2/21/The_Legend_of_Zelda_A_Link_to_the_Past_SNES_Game_Cover.jpg")

game19 = Game.create!(title:"Street Fighter II", genre:"Fighting", purchase_url:"https://www.nintendo.com/games/detail/ultra-street-fighter-ii-the-final-challengers-switch/", image_url:"https://i.ebayimg.com/images/g/b4oAAOSwy-5XMcQr/s-l400.jpg")

game20 = Game.create!(title:"Civilization VI", genre:"Strategy", purchase_url:"https://civilization.com/", image_url:"https://upload.wikimedia.org/wikipedia/en/3/3b/Civilization_VI_cover_art.jpg")


puts "Seeding Reviews..."

Review.destroy_all

review1 = Review.create!(description: "Lovingly crafted animated classic following the adventures of Bilbo Baggins from J.R.R Tolkiens beloved fantasy epic 'The Hobbit'.", movie_id: movie1.id, user_id: user1.id)


puts "Done seeding :)!"