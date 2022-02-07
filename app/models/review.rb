class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game, optional: true
  belongs_to :movie, optional: true
  belongs_to :book, optional: true

end
