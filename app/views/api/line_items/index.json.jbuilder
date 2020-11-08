if @line_items.length > 0
  @line_items.each do |line_item|
    json.set! line_item.id do
      json.partial! "api/line_items/line_item", line_item: line_item
    end
  end
end
