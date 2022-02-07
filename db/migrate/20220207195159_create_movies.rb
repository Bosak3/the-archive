class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.string :genre
      t.string :release_year
      t.string :purchase_url
      t.string :image_url

      t.timestamps
    end
  end
end
