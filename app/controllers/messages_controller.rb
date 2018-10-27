class MessagesController < ApplicationController
    def index
        @message = Message.new
        @messages = @group.messages.include(:user)
    end

    def create
    end

    private
    def message_params
    end

    def set_group
        @group = Group.find(params[:group_id])
    end
end
