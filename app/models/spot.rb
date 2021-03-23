# == Schema Information
#
# Table name: spots
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  longitude   :string           not null
#  latitude    :string           not null
#  photos      :string           not null, is an Array
#  spot_type   :string           not null
#  details     :text             not null
#  activities  :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Spot < ApplicationRecord
    serialize :details, Hash
    serialize :activities, Array

    validates :description, :longitude, :latitude, :spot_type, :details, presence: true

    has_many :bookings,
        foreign_key: :spot_id,
        class_name: :Booking

    has_many :reviews,
        foreign_key: :spot_id,
        class_name: :Review

    def self.in_bounds(bounds)
        self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
    end
end
