class ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end
  def hello
  end
  def show
    @article = Article.find(params[:id])
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)

    if @article.save
      redirect_to @article
    else
      render :new
    end
  end

  private
    def article_params
      #says that the params hash must have an :article key and that it is allowed to have
      # and only have a :title and :body value
      params.require(:article).permit(:title, :body)
    end
end
