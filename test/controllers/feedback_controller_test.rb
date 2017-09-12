require 'test_helper'

class FeedbackControllerTest < ActionDispatch::IntegrationTest
  test "should get name:string" do
    get feedback_name:string_url
    assert_response :success
  end

  test "should get email:string" do
    get feedback_email:string_url
    assert_response :success
  end

  test "should get message:text" do
    get feedback_message:text_url
    assert_response :success
  end

end
