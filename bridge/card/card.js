YUI.add("bridge-card", function (Y) {

    var Card = function (string) {
        Y.assert(Card.isCard(string), "given string is not a valid card: " + string);
        this._card = string;
    };

    Card.SUITS = ["C", "D", "H", "S"];

    Card.VALUES = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

    Card.CARDS = ["C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "CT", "CJ", "CQ", "CK", "CA",
                  "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "DT", "DJ", "DQ", "DK", "DA",
                  "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "HT", "HJ", "HQ", "HK", "HA",
                  "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "ST", "SJ", "SQ", "SK", "SA"];

    Card.HONOURS = ["J", "Q", "K", "A"];

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
            return Y.Array.indexOf(Card.HONOURS, this._card) + 1;
        },

        compareTo: function (other) {
            Y.assert(this.suit() === other.suit(), "comparing card of suit " + this.suit() + " with suit " + other.suit());
            return Y.Array.indexOf(Card.CARDS, this._card) - Y.Array.indexOf(Card.CARDS, other._card);
        }
    };

    Y.namespace("Bridge").Card = Card;

}, "", { requires: [] });
