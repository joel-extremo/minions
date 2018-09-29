class MinionsController < ApplicationController
  def index
    
  end

  def get_result
    userOption = params[:userOption]
    minionsOption = get_minions_option()

    result = user_win?(userOption, minionsOption)

    render json: {
      :user => userOption, 
      :minions => minionsOption, 
      :result => result
    }
  end

  def get_minions_option
    return ['rock', 'paper', 'scissor'].sample
  end

  def user_win?(userOption, minionsOption)
    return case
      when userOption == 'rock' && minionsOption == 'scissor' then 'win'
      when userOption == 'rock' && minionsOption == 'paper' then 'lose'
      when userOption == 'paper' && minionsOption == 'rock' then 'win'
      when userOption == 'paper' && minionsOption == 'scissor' then 'lose'
      when userOption == 'scissor' && minionsOption == 'paper' then 'win'
      when userOption == 'scissor' && minionsOption == 'rock' then 'lose'
      when userOption == minionsOption then 'tie'
    end 
  end

  def about
    
  end
end
