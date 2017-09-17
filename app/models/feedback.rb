require 'validates_email_format_of'

class Feedback < ApplicationRecord
  validates_email_format_of :email, :message => ':not valid email format'
end
