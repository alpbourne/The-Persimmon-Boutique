class AddLikeCountToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :like_count, :integer
  end
end
