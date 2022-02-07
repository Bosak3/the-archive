class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :genre, :image_url, :purchase_url, :release_year
end
