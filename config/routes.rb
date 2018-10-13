Rails.application.routes.draw do
  root to: 'home#index'
  devise_for :users
    namespace :api do
    namespace :v1 do
     resources :feeds, only: [:index, :create, :destroy]
     get '/last_feed_time', to: 'feeds#last_feed_time'
    end
  end
end
