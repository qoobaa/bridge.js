YUI.add("bridge-card", function (Y) {

    function Card(string) {
        var self = this;

        if (!Y.instanceOf(self, Card)) {
            self = new Card(string);
        }

        if (!Card.isCard(string)) {
            Y.error(string + " is not a valid card");
        }

        self._card = string;

        return self;
    };

    Card.SUITS = ["C", "D", "H", "S"];

    Card.VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

    Card.CARDS = ["C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK", "CA",
                  "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK", "DA",
                  "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK", "HA",
                  "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK", "SA"];

    Card.HONOURS = ["J", "Q", "K", "A"];

    Card.SUIT_SYMBOLS = { C: "♣", D: "♦", H: "♥", S: "♠" };

    Card.isCard = function (string) {
        return Y.Array.indexOf(Card.CARDS, string) !== -1;
    };

    Card.prototype = {

        card: function () {
            return this._card;
        },

        suit: function () {
            return this._card[0];
        },

        value: function () {
            return this._card[1];
        },

        hcp: function () {
            return Y.Array.indexOf(Card.HONOURS, this.value()) + 1;
        },

        compareTo: function (other) {
            if (this.suit() !== other.suit()) {
                Y.error("comparing card of suit " + this.suitString() + " with suit " + other.suitString());
            }

            return Y.Array.indexOf(Card.CARDS, this._card) - Y.Array.indexOf(Card.CARDS, other._card);
        },

        suitString: function () {
            var suit = this.suit();

            return Card.SUIT_SYMBOLS[suit];
        },

        valueString: function () {
            var value = this.value();

            return value === "T" ? "10" : value;
        },

        cardString: function () {
            return this.suitString() + this.valueString();
        },

        toString: function () {
            return "<Card: " + this.cardString() + ">";
        }
    };

    Y.namespace("Bridge").Card = Card;

}, "", { requires: [] });
