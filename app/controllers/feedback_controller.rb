class FeedbackController < ApplicationController
  def new
    @feedback = Feedback.new
  end

  def create
    @feedback = DFeedback.new(feedback.params)

    respond_to do |f|
      if @feedback.save
        f.html {redirect_to @feedback, notice: 'feedback submitted'}
        f.json {render :new, status: :created, location: :@feedback}
      else
        f.html {render :new }
        f.json {render json: @feedback.errors, status: :unprocessable_entity}
      end
    end
  end

  private

    def set_feedback
      @feedback = Feedback.find(params[:id])
    end

    def feedback_params
      params.require(:feedback).permit(:name, :email, :message)
    end
end
