class Photosdrop < ActiveRecord::Migration[5.2]
  def change
    remove_column :spots, :photos 
    add_column :spots, :photo_url, :string

  end
end
