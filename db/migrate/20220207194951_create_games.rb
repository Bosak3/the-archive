class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title
      t.string :genre
      t.string :purchase_url
      t.string :image_url

      t.timestamps
    end
  end
end
