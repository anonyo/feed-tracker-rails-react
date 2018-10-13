include ActionView::Helpers::DateHelper

class Api::V1::FeedsController < ApplicationController
  def index
    render json: Feed.all
  end

  def last_feed_time
    render json: { elapsed_time: time_ago_in_words(Feed.last.created_at) }
  end

  def create
    feed = Feed.create
    last_feed_time
  end

  def destroy
    Feed.destroy(params[:id])
  end

  private

  def feed_params
    params.require(:feed).permit(:id)
  end
end
