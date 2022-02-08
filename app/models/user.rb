class User < ApplicationRecord
    has_secure_password

    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews
    has_many :books, through: :reviews
    has_many :movies, through: :reviews
    
end
