class LandlType < ActiveRecord::Migration[5.2]
  def change
    change_column :spots, :longitude, :integer, using: 'longitude::integer'
    change_column :spots, :latitude, :integer, using: 'latitude::integer'

  end
end
