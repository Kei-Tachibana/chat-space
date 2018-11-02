FactoryGirl.define do
    factory :message do
        body    Faker::Lorem.sentence
        image   Faker::open("#{Rails.root}/public/images/no_image.jpg")
        user
        group
    end
end
