class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class
end


#MVP
## User  -<-Review -< GameReviews ->-- Game
##          Review -< MovieReviews ->- Movie
##          Review -< BookReviews ->- Book
## User -<- Profile
# Signup/Login

# Stretch MVP
# User -<-- Liked/Saved Content > # Should this be a part of user Profile?
# User profile shows reviews user has created
# Clicking a game/book/movie will show all reviews associated with that item.
# Create links to locations where you can buy/watch/play individual items. Not necessarily a stretch goal, but something to add if there is time.

#Super MVP
# News ticker for video game/book/movie information.



### MODELS ###

#------User---------#
### User:Auth**
## Attributes

# t.string :password_digest
# t.string :username
# t.string :name
# t.string :email

#------Review------#????
## Attributes
# t.string  :description
# t.integer :user_id
# t.integer :game_id
# t.integer :movie_id
# t.integer :book_id
#### How would this work? Assigning ID based on the medium?
### Would having multiple id's that won't be used each time an instance is created cause any conflicts? 

#------Game------#
## Attributes

# t.string :title
# t.string :genre/category
# t.string :platform ** Do I need a platform model? Or would it be redundant?
# t.string :purchase_url
# t.string :image_url


#------Book------#

# t.string  :title
# t.string  :author
# t.string  :genre
# t.string  :image_url
# t.string :purchase_url
# t.integer :release_year


#------Movie------#

# t.string  :title
# t.string  :director
# t.string  :genre
# t.integer :release_year
# t.string :purchase_url
# t.string  :image_url


## Best way to set-up MsM to be able to access nested data?
## Ex. Displaying a game and all of its related reviews.



