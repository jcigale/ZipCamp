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
require 'test_helper'

class SpotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
