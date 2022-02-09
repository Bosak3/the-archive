class ReviewsController < ApplicationController

   #-------------------GET------------------------
   def index
        review = Review.all
        render json: review
    end

def show
    review = Review.find_by(id: params[:id])
    render json: review
end

#------------------Create----------------------
def create
    review = Review.create(description: params[:description], game_id: params[:game_id], book_id: params[:book_id], user_id: User.first.id)
    render json: review, status: :created
    
end




#------------------DELETE-----------------------

def destroy
    review = Review.find_by(id: params[:id])
        if review
            review.destroy
            head :no_content
        else
            render json: { error: "Review not found"}, status: :not_found
        end
 end


 private

 def review_params
    params.permit(:description, :game_id, :book_id, user_id: User.first.id)
 end
 

end
