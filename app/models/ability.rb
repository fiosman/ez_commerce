# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)
    if user.has_role? :admin
      can :manage, :all
    elsif user.has_role? :registered
      can :read, Product
      can :read, Category
      can [:create, :read], Review
    else
      can :read, :all
    end
  end
end
