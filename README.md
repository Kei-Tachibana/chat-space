# README

* Ruby version
  Ruby 2.3.1

* Rails version
  Rails 5.0.7

* DataBase Design

## User
---
### table
|Column|Type|Options|
|-|-|-|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|

### association
- has_many :messages
- has_many :groups

## Group
---
### table
|Column|Type|Options|
|-|-|-|
|name|string|null: false|

### association

## Message
---
### table
### association
