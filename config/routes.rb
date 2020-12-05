Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :meals, only: [:index, :destroy, :create, :update]
  resources :days,  only: [:index, :destroy]
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create
  put '/meals/:meal_id/days/:id', to: 'days#add_meal'
end
