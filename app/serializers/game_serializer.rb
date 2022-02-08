class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :genre, :purchase_url, :image_url

  
end
