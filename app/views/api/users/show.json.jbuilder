json.partial! "/api/users/user", user: @user
json.isAdmin @user.has_role? :admin
