# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  body        :text             not null
#  recommended :boolean          not null
#  author_id   :integer          not null
#  spot_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Review < ApplicationRecord
    validates :title, :body, :recommended, :author_id, :spot_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :spot,
        foreign_key: :spot_id,
        class_name: :Spot

    
    
end
