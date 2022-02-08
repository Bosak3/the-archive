class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_one :user
  has_one :game
  has_one :movie
  has_one :book
end
