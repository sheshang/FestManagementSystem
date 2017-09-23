class RemoveDateFromNews < ActiveRecord::Migration[5.1]
  def change
    remove_column :news, :date, :date
  end
end
