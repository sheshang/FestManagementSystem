Rails.application.routes.draw do
  #get 'feedback/new'

  resources :demos
  get 'feedback/new' #(due to mistake, mostly not needed, still keeping for future erroes)

  get 'about_us/index'

  get 'welcome/index'

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
