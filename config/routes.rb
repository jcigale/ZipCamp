Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resource :user, only:[:create, :show, :update, :index, :show] do
      resources :bookings, only: [:index, :update]
    end

    resource :session, only:[:create, :destroy]

    resources :spots, only:[:index, :show] do 
      resources :reviews, only: [:index]
    end

    resources :reviews, only:[:index, :create, :update, :destroy]

    resources :bookings, only:[:index, :show, :create, :destroy]

  end
end
