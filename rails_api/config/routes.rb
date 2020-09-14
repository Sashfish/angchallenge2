Rails.application.routes.draw do
  root to: "videogames#index"
    namespace :api do
        namespace :v1 do
          resources :videogames
        end
      end
end
