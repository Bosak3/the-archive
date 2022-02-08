class MoviesController < ApplicationController

    def index
        movie = Movie.all
        render json: movie
    end

    def show
        movie = Movie.find_by(id: params[:id])
        render json: movie
    end

end
