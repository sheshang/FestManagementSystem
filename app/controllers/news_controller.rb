class NewsController < ApplicationController

  def index
    @news = News.all
  end

  def new
    @news = News.new
  end

  def create
    @news = News.new(news_params)

    if(@news.save)
      redirect_to news_index_path
    else
      render 'new'
    end

  end

  def destroy
    @news = News.find(params[:id])
    @news.destroy

    redirect_to news_index_path
  end

  private
    def news_params
      params.require(:news).permit(:message)
    end

end
