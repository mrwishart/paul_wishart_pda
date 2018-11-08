# def sum_array(array)
#   sum = 0
#   for number in array
#     sum += number
#   end
#   return sum
# end
#
# pda_array = [1, 5, 2, 8, 3, 4]
#
# sum_of_array = sum_array(pda_array)
#
# puts
# puts
# puts "Sum = #{sum_of_array}"


pda_hash = {
  "first_name" => "Paul",
  "last_name" => "Wishart",
  "age" => 32,
  "cohort" => "E26"
}

def return_surname(pda_hash)
  surname = pda_hash["last_name"]
  return surname
end

name = return_surname(pda_hash)

puts
puts
puts "Surname = #{name}"
puts
puts
