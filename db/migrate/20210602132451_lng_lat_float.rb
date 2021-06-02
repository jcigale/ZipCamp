class LngLatFloat < ActiveRecord::Migration[5.2]
  def change

    change_column :spots, :longitude, :float, "USING longitude::double precision" 
    change_column :spots, :latitude, :float, "USING longitude::double precision"

  end
end
