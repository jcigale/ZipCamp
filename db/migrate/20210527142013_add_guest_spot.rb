class AddGuestSpot < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :guests, :integer
    add_column :bookings, :spot, :string, hash: true
  end
end
