class CreateDemos < ActiveRecord::Migration[5.1]
  def change
    create_table :demos do |t|
      t.string :name
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end
