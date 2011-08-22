YUI.add("bridge-trick", function (Y) {

    function Trick(arrayOrTrick) {
        if (!Y.instanceOf(this, Trick)) {
            return new Trick(arrayOrTrick);
        }

        if (Y.instanceOf(arrayOrTrick, Trick)) {
            this._cards = arrayOrTrick._cards.slice(0);
        } else {
            this._cards = [];
            Y.Array.each(arrayOrTrick, function (stringOrCard, i) {
                if (!this.add(stringOrCard)) {
                    Y.error("invalid card " + stringOrCard + " at position " + i);
                }
            }, this);
        }
    }

    Trick.prototype = {

        clone: function () {
            return new Trick(this);
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
            return this._cards.length < 4 && !this.contains(card) && this._cards.push(Y.Bridge.Card(card)) && true;
        },

        remove: function (card) {
            var i = this.indexOf(card);

            return i !== -1 ? this._cards.splice(i, 1)[0] : undefined;
        }

    };

    Y.namespace("Bridge").Trick = Trick;

}, "", { requires: ["bridge-card", "collection"] });
