class FeedbacksController < ApplicationController
  layout "front_layout", only: [:new]

  def index
    @feedbacks = Feedback.all
  end

  def new
    @feedback = Feedback.new
  end

  def create
    @feedback = Feedback.new(feedback_params)

    respond_to do |f|
      if @feedback.save
      #  redirect_to index_about_us_path
        f.html {redirect_to new_feedback_path, notice: 'feedback submitted'}
        f.json {render :new, status: :created, location: :@feedback}
      else
      #  redirect_to index_about_us_path
        f.html {render :new, notice: 'error while submitting, try again' }
        f.json {render json: @feedback.errors, status: :unprocessable_entity}
      end
    end
  end

  private

  #  def set_feedback
  #    @feedback = Feedback.find(params[:id])
  #  end

    def feedback_params
      params.require(:feedback).permit(:name, :email, :message)
    end
end
