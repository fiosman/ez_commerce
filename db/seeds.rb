# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create!([
  { tagging: "misc" },
  { tagging: "electronics" },
  { tagging: "outdoors" },
  { tagging: "home" },
  { tagging: "office" },
  { tagging: "books" },
  { tagging: "gaming" },
  { tagging: "sports" },
  { tagging: "auto parts" },
])

Product.create!([
  { title: "Macbook Pro", body: "Experience the power", price: 1999.99, category_id: Category.find_by_tagging("electronics").id },
  { title: "Wilson Basketball", body: "Professional basketball experience", price: 59.99, category_id: Category.find_by_tagging("sports").id },
  { title: "Printer", body: "All in one printer and scanner", price: 249.99, category_id: Category.find_by_tagging("office").id },
  { title: "Lenovo", body: "Greater tomorrow", price: 2399.99, category_id: Category.find_by_tagging("electronics").id },
  { title: "iPhone Charger", body: "Blazing fast", price: 20.99, category_id: Category.find_by_tagging("electronics").id },
  { title: "5-Person Tent", body: "For great camping experience", price: 199.99, category_id: Category.find_by_tagging("outdoors").id },
  { title: "Grill", body: "All you need for great BBQ", price: 499.99, category_id: Category.find_by_tagging("outdoors").id },
  { title: "Plain Paper", body: "For Printer - 100 stack", price: 10.99, category_id: Category.find_by_tagging("office").id },
  { title: "Cabinet ", body: "Spaceous and Stylish", price: 80.99, category_id: Category.find_by_tagging("home").id },
  { title: "Bench", body: "Indoor bench for home use", price: 59.99, category_id: Category.find_by_tagging("home").id },
  { title: "Harry Potter", body: "Great book", price: 10.99, category_id: Category.find_by_tagging("books").id },
  { title: "Seat Covers", body: "Universal use", price: 23.99, category_id: Category.find_by_tagging("auto parts").id },
])
