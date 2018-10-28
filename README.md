# README

* Ruby version
  Ruby 2.3.1

* Rails version
  Rails 5.0.7

* DataBase Design
---
## Group
### table
|Column|Type|Options|
|-|-|-|
|name|string|null: false|

### association
- has_many :groups_users
- has_many :messages
- has_many :users, through: :groups_users

---
## GroupUser
### table
|Column|Type|Options|
|-|-|-|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### association
- belongs_to :group
- belongs_to :user

---
## Message
### table
|Column|Type|Options|
|-|-|-|
|body|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### association
- belongs_to :group
- belongs_to :user

---
## User
### table
|Column|Type|Options|
|-|-|-|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|

### association
- has_many :groups
- has_many :messages

