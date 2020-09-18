class Api::V1::VideogamesController < Api::V1::BaseController
  protect_from_forgery with: :null_session
  skip_before_action :verify_authenticity_token
  def index
    @videogame = Videogame.all
    json_response(@videogame)
  end

  def create
    @videogame = Videogame.create(videogame_params)
    json_response(@videogame, :created)
  end

  def show
    @videogame = Videogame.find(params[:id])
    json_response(@videogame)
  end

  def destroy
    @videogame = Videogame.find(params[:id]).destroy
    json_response(@videogame)
  end

  def update
    @videogame = Videogame.find(params[:id])
    @videogame.update_attributes(videogame_params)
    json_response(@videogame)
  end

  private

  def videogame_params
    params.require(:videogame).permit(:id, :title, :features_handheld, :features_maxplayers, :features_multiplatform, :features_online, :metadata_genres, :metadata_licensed, :metadata_publishers, :metadata_sequel, :metrics_reviewscore, :metrics_sales, :metrics_usedprice, :release_console, :release_rating, :release_rerelease, :release_year, :length_allplaystyles_average, :length_allplaystyles_leisure, :length_allplaystyles_median, :length_allplaystyles_polled, :length_allplaystyles_rushed, :length_completionists_average, :length_completionists_leisure, :length_completionists_median, :length_compltetionists_polled, :length_completionists_rushed, :length_mainplusextras_average, :length_mainplusextras_leisure, :length_mainplusextras_median, :length_mainplusextras_polled, :length_mainplusextras_rushed, :length_mainstory_average, :length_mainstory_leisure, :length_mainstory_median, :length_mainstory_polled, :length_mainstory_rushed, :created_at, :updated_at)
  end

end
