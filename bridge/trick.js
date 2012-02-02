YUI.add("bridge-trick", function (Y) {

    function Trick(cards) {
        if (!Y.instanceOf(this, Trick)) {
            return new Trick(cards);
        }

        this._cards = [];

        Y.Array.each(cards, function (card, i) {
            if (!this.add(card)) {
                Y.error("invalid card " + card + " at position " + i);
            }
        }, this);
    }

    Trick.prototype = {

        clone: function () {
            return new Trick(this._cards);
        },

        size: function () {
            return this._cards.length;
        },

        cards: function () {
            return this._cards.slice(0);
        },

        indexOf: function (card) {
            return Y.Array.indexOf(Y.Array.map(this._cards, String), String(card));
        },

        contains: function (card) {
            return this.indexOf(card) !== -1;
        },

        add: function (card) {
            return this._cards.length < 4 && !this.contains(card) && this._cards.push(Y.Bridge.Card(card)) && true;
        },

        suit: function () {
            return this._cards[0] && this._cards[0].suit();
        },

        isComplete: function () {
            return this._cards.length === 4;
        },

        winner: function (trump) {
            return this._winnerInSuit(trump) || this._winnerInSuit(this.suit());
        },

        _winnerInSuit: function (suit) {
            return Y.Array.filter(this._cards, function (card) {
                return card.suit() === suit;
            }).sort(function (a, b) {
                return b.compareTo(a);
            })[0];
        }

    };

    Y.namespace("Bridge").Trick = Trick;

}, "", { requires: ["bridge-card", "collection"] });
