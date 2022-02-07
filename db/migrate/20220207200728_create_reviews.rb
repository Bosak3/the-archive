class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :description
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :game, null: true, foreign_key: true
      t.belongs_to :movie, null: true, foreign_key: true
      t.belongs_to :book, null: true, foreign_key: true

      t.timestamps
    end
  end
end
