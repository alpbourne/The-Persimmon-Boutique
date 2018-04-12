Rails.application.routes.draw do
  namespace :api do
    resources :items, except: [:new, :edit]
    resources :reviews
  end
end
