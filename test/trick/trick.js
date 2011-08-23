YUI.add("bridge-trick-test", function (Y) {

    var Trick = Y.Bridge.Trick,
        isUndefined = Y.Assert.isUndefined,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Trick = new Y.Test.Case({

        name: "Trick Tests",

        setUp: function () {
            this.trick = new Trick();
        },

        _should: {
            error: {
                testConstructingWithInvalidCard: true
            }
        },

        // constructor

        testConstructingWithInvalidCard: function () {
            new Trick(["AA"]);
        },

        // suit

        testSuitReturnsUndefinedWithoutCards: function () {
            isUndefined(this.trick.suit());
        },

        testSuitReturnsHWithCards: function () {
            this.trick.add("HA");
            this.trick.add("SA");
            areSame("H", this.trick.suit());
        },

        // winner

        testWinnerReturnsUndefinedWithoutCards: function () {
            isUndefined(this.trick.winner("H"));
        },

        testWinnerReturnsZeroWithOneCard: function () {
            this.trick.add("H2");
            areSame("H2", String(this.trick.winner("H")));
        },

        testWinnerReturnsZeroWithOneCardAndDifferentTrump: function () {
            this.trick.add("H2");
            areSame("H2", String(this.trick.winner("S")));
        },

        testWinnerReturnsCorrectIndexWithMultipleCardsOfOneSuit: function () {
            this.trick.add("H2");
            this.trick.add("HK");
            this.trick.add("HJ");
            this.trick.add("HT");
            areSame("HK", String(this.trick.winner("S")));
        },

        testWinnerReturnsCorrectIndexWithMultipleCardsOfMultipleSuits: function () {
            this.trick.add("H2");
            this.trick.add("DK");
            this.trick.add("HJ");
            this.trick.add("ST");
            areSame("HJ", String(this.trick.winner("C")));
        },

        testWinnerReturnsCorrectIndexWithMultipleCardsOfMultipleSuitsAndTrump: function () {
            this.trick.add("H2");
            this.trick.add("SK");
            this.trick.add("HJ");
            this.trick.add("ST");
            areSame("SK", String(this.trick.winner("S")));
        },

        // winnerIndex

        testWinnerReturnsUndefinedWithoutCards: function () {
            isUndefined(this.trick.winner("H"));
        },

        testWinnerIndexReturnsCorrectIndexWithMultipleCardsOfOneSuit: function () {
            this.trick.add("H2");
            this.trick.add("HK");
            this.trick.add("HJ");
            this.trick.add("HT");
            areSame(1, this.trick.winnerIndex("S"));
        },

    });

}, "", { requires: ["test", "bridge-trick"] });
