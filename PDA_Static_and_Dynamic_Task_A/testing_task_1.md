### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out static testing on the code below.
# Correct the errors below that you spotted in task 1.

# Error: require link should be './card.rb'
require_relative('card.rb')
class CardGame

  # Style Error: Should really underline between words (check_for_ace)
  def checkforAce(card)
    # Error: If statement needs ==
    if card.value = 1
      return true
    else
      return false
    end
  end
  # Error: Should be 'def' to make a function
  # Error: Missing comma between variables
  dif highest_card(card1 card2)
  if card1.value > card2.value
    # Error: 'card' doesn't exist. Should be card1
    # Error: Card class doesn't have a 'name' variable
    return card.name
  else
    # Error: no 'return' (although Ruby might still pass that)
    # Error: Inconsistent return values (above passes back a variable, this passes an object)
    card2
  end
end
# Error: Extra end, finishes the class early
end

# Possible Error: Based on the above, should really be an instance method, not a class method
def self.cards_total(cards)
  # Error: total is not defined properly (should be total = 0, or, at least, total = Int.new)
  total
  for card in cards
    total += card.value
    # Error: Need to convert total into string
    # Error: Return will end the function after the first iteration of the loop
    # Error: Need space at the end of initial string
    return "You have a total of" + total
  end
end


```
