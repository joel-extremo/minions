class MinionsController < ApplicationController
  def index
    name = 'joel'
  end

  def get_result
    userOption = params[:userOption]
    minionsOption = getMinionsOption()

    result = user_win?(userOption, minionsOption)

    render json: {
      :user => userOption, 
      :minions => minionsOption, 
      :result => result
    }
  end

  def getMinionsOption
    return ['rock', 'paper', 'scissor'].sample
  end

  def user_win?(userOption, minionsOption)
    return case
      when userOption == 'rock' && minionsOption == 'scissor' then true
      when userOption == 'rock' && minionsOption == 'paper' then false
      when userOption == 'paper' && minionsOption == 'rock' then true
      when userOption == 'paper' && minionsOption == 'scissor' then false
      when userOption == 'scissor' && minionsOption == 'paper' then true
      when userOption == 'scissor' && minionsOption == 'rock' then false
      when userOption == minionsOption then nil
      end 
  end
end
