Rails.application.routes.draw do

  #resources :demos

  resources :feedbacks

  get 'about_us/index'

  get 'welcome/index'

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
