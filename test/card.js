YUI.add("bridge-card-test", function (Y) {

    var Card = Y.Bridge.Card,
        isTrue = Y.Assert.isTrue,
        areSame = Y.Assert.areSame,
        isInstanceOf = Y.Assert.isInstanceOf;

    Y.namespace("Bridge.Test").Card = new Y.Test.Case({

        name: "Card Tests",

        _should: {
            error: {
                testConstructingWithAnInvalidString: true,
                testConstructingWithAnEmptyString: true,
                testConstructingWithoutArgument: true,
                testCompareToThrowsErrorWhenComparingDifferentSuits: true
            }
        },

        // constructor

        testConstructingWithAValidString: function () {
            new Card("HA");
        },

        testConstructingWithAnInvalidString: function () {
            new Card("FA");
        },

        testConstructingWithAnEmptyString: function () {
            new Card("");
        },

        testConstructingWithoutArgument: function () {
            new Card();
        },

        testConstructorWorksLikeFactory: function () {
            isInstanceOf(Card, Card("HA"));
        },

        testConstructorWorksLikeFactoryWhenCardGiven: function () {
            isInstanceOf(Card, Card(Card("HA")));
        },

        // card

        testToStringReturnsCardString: function () {
            areSame("HT", Card("HT").toString());
        },

        // suit

        testSuitReturnsSuitString: function () {
            areSame("S", Card("S2").suit());
        },

        // value

        testValueReturnsValueString: function () {
            areSame("5", Card("C5").value());
        },

        // hcp

        testHcpReturnsZeroForNonHonours: function () {
            areSame(0, Card("C5").hcp());
            areSame(0, Card("D2").hcp());
            areSame(0, Card("ST").hcp());
        },

        testHcpReturnsOneForJack: function () {
            areSame(1, Card("CJ").hcp());
        },

        testHcpReturnsTwoForQueen: function () {
            areSame(2, Card("SQ").hcp());
        },

        testHcpReturnsThreeForKing: function () {
            areSame(3, Card("DK").hcp());
        },

        testHcpReturnsFourForAce: function () {
            areSame(4, Card("HA").hcp());
        },

        // compareTo

        testCompareToReturnsZeroWhenComparingSameCards: function () {
            areSame(0, Card("S5").compareTo(Card("S5")));
        },

        testCompareToReturnsPositiveNumberWhenComparingWithALowerCard: function () {
            isTrue(Card("SA").compareTo(Card("S5")) > 0);
        },

        testCompareToReturnsNegativeNumberWhenComparingWithAHigherCard: function () {
            isTrue(Card("S2").compareTo(Card("S6")) < 0);
        },

        testCompareToThrowsErrorWhenComparingDifferentSuits: function () {
            Card("H2").compareTo(Card("S6"));
        }

    });

}, "", { requires: ["test", "bridge-card"] });
