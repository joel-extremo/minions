Rails.application.routes.draw do
  root 'minions#index'
  get 'about', to: 'minions#about'
  get 'minions/result', to: 'minions#get_result'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
