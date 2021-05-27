class GuestType < ActiveRecord::Migration[5.2]
  def change
    change_column :bookings, :guests, :string
  end
end
