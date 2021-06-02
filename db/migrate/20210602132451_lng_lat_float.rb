class LngLatFloat < ActiveRecord::Migration[5.2]
  def change

    ALTER TABLE spots ALTER longitude TYPE float USING longitude::float;
    ALTER TABLE spots ALTER latitude  TYPE float USING latitude::float;

  end
end
