require('minitest/autorun')
require('minitest/rg')
require_relative('../card')
require_relative('../testing_task_2.rb')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("Spades", 12)
    @card2 = Card.new("Clubs", 13)
    @card3 = Card.new("Diamonds", 5)
    @card4 = Card.new("Hearts", 2)
    @card5 = Card.new("Spades", 1)

    @cards = [@card1, @card2, @card3, @card4, @card5]

    @cardgame = CardGame.new
  end

  def test_checkforAce__true
    expected = true
    actual = @cardgame.checkforAce(@card5)
    assert_equal(expected, actual)
  end

  def test_checkforAce__false
    expected = false
    actual = @cardgame.checkforAce(@card4)
    assert_equal(expected, actual)
  end

  def test_highestcard_first_one_highest
    expected = @card2
    actual = @cardgame.highest_card(@card2, @card3)
    assert_equal(expected, actual)
  end

  def test_highestcard_second_one_highest
    expected = @card2
    actual = @cardgame.highest_card(@card3, @card2)
    assert_equal(expected, actual)
  end

  def test_cards_total
    expected = "You have a total of 33"
    actual = @cardgame.cards_total(@cards)
    assert_equal(expected, actual)
  end

end
