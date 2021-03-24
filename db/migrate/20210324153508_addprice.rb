class Addprice < ActiveRecord::Migration[5.2]
  def change
    add_column :spots, :price, :integer
  end
end
