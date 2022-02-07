class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.string :image_url
      t.string :purchase_url
      t.string :release_year

      t.timestamps
    end
  end
end
