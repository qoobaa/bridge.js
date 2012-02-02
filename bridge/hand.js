YUI.add("bridge-hand", function (Y) {

    function Hand(cards) {
        if (!Y.instanceOf(this, Hand)) {
            return new Hand(cards);
        }

        this._cards = [];

        Y.Array.each(cards, function (card, i) {
            if (!this.add(card)) {
                Y.error("invalid card " + card + " at position " + i);
            }
        }, this);
    }

    Hand.prototype = {

        clone: function () {
            return new Hand(this._cards);
        },

        size: function () {
            return this._cards.length;
        },

        indexOf: function (card) {
            return Y.Array.indexOf(Y.Array.map(this._cards, String), card.toString());
        },

        contains: function (card) {
            return this.indexOf(card) !== -1;
        },

        add: function (card) {
            return this._cards.length < 13 && !this.contains(card) && this._cards.push(Y.Bridge.Card(card)) && true;
        },

        remove: function (card) {
            var i = this.indexOf(card);

            return i !== -1 ? this._cards.splice(i, 1)[0] : undefined;
        }

    };

    Y.namespace("Bridge").Hand = Hand;

}, "", { requires: ["bridge-card", "collection"] });
