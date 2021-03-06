class MessagesController < ApplicationController
    before_action :set_group

    def index
        @message = Message.new
        @messages = @group.messages.includes(:user)
        respond_to do |format|
            format.html
            format.json {@messages = @messages.where("id > ?", params[:id])}
        end
    end

    def create
        @message = @group.messages.new(message_params)
        if @message.save
            respond_to do |format|
                format.html { redirect_to group_messages_path(@group), notice: "Your message was sent successfully." }
                format.json
            end
        else
            @messages = @group.messages.includes(:user)
            flash.now[:alert] = "Enter a message."
            render :index
        end
    end

    private
    def message_params
        params.require(:message).permit(:body, :image).merge(user_id: current_user.id)
    end

    def set_group
        @group = Group.find(params[:group_id])
    end
end
