class User < ApplicationRecord 
  validates_presence_of :username, :password_digest, :session_token 
  validates_uniqueness_of :username, :session_token 
  validates_length_of :password, minimum: 6, allow_nil: true

  attr_reader :password 
  
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password) 
    user = User.find_by(username: username) 
    return user && BCrypt::Password.new(user.password_digest).is_password?(password) ? user : nil
  end

  def self.generate_session_token 
    SecureRandom::urlsafe_base64(16)
  end 

  def reset_session_token! 
    self.session_token = User.generate_session_token 
    self.save! 
    self.session_token 
  end 

  def password=(password) 
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private 

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end