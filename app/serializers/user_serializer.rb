class UserSerializer < ActiveModel::Serializer
  attributes :id, :password_digest, :username, :name, :email
end
