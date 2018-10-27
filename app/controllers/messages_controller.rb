class MessagesController < ApplicationController
    before_action :set_group

    def index
        @message = Message.new
        @messages = @group.messages.includes(:user)
    end

    def create
        @message = @group.messages.new(message_params)
          if @message.save
              redirect_to group_messages_path(@group), notice: "Your message was sent successfully."
          else
              @messages = @group.messages.includes(:user)
              flash.now[:alert] = "Enter a message."
              render :index
          end
    end

    private
    def message_params
        params.require(:message).permit(:body)
    end

    def set_group
        @group = Group.find(params[:group_id])
    end
end
