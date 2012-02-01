YUI.add("bridge-hand", function (Y) {

    function Hand(arrayOrHand) {
        if (!Y.instanceOf(this, Hand)) {
            return new Hand(arrayOrHand);
        }

        if (Y.instanceOf(arrayOrHand, Hand)) {
            this._cards = arrayOrHand._cards.slice(0);
        } else {
            this._cards = [];
            Y.Array.each(arrayOrHand, function (stringOrCard, i) {
                if (!this.add(stringOrCard)) {
                    Y.error("invalid card " + stringOrCard + " at position " + i);
                }
            }, this);
        }
    }

    Hand.prototype = {

        clone: function () {
            return new Hand(this);
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
