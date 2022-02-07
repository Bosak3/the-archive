class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :director, :genre, :release_year, :purchase_url, :image_url
end
