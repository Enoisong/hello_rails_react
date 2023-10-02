class Api::V1::MessagesController < ApplicationController
    def random_greeting
      random_greeting = Message.order('RANDOM()').first
      render json: { text: random_greeting&.text }
    end
  end
  