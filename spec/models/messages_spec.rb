require 'rails_helper'

describe Message do
    describe '#create' do
        #メッセージが保存できた場合
        context 'can save' do
              #内容が入っていれば有効
              it 'is valid with body' do
                  expect(build(:message, image: nil)).to be_valid
              end

              #画像があれば有効
              it 'is valid with image' do
                    expect(build(:message, body: nil)).to be_valid
              end

              #内容と画像両方でも有効
              it 'is valid with body and image' do
                    expect(build(:message)).to be_valid
              end
        end

        #メッセージが保存できなかった場合
        context 'cannot save' do
              #メッセージも画像もないと保存できない
              it 'is invalid without body and image' do
                  message = build(:message, body: nil, image: nil)
                  message.valid?
                  expect(message.errors[:body]).to include("blank")
              end

              #group_idがないと保存できない
              it 'is invalid without group_id' do
                  message = build(:message, group_id: nil)
                  message.valid?
                  expect(message.errors[:group]).to include("must exist")
              end

              #user_idがないと保存できない
              it 'is invalid without user_id' do
                  message = build(:message, user_id: nil)
                  message.valid?
                  expect(message.errors[:user]).to include("must exist")
              end
        end
    end
end

