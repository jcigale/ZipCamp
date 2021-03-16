# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  zipcode         :integer          not null
#  bookings        :string           is an Array
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :first_name, :last_name, :zipcode, :password_digest, presence: true
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 8}, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.check_password?(password) ? user : nil
    end

    def check_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        generate_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_session_token unless self.session_token
    end

    def generate_session_token
        self.session_token = SecureRandom.urlsafe_base64
        while User.find_by(session_token: self.session_token)
            self.session_token = SecureRandom.urlsafe_base64
        end
        self.session_token
    end
end
