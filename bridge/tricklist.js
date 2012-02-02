YUI.add("bridge-tricklist", function (Y) {

    function TrickList(cards) {
        if (!Y.instanceOf(this, TrickList)) {
            return new TrickList(cards);
        }

        this._tricks = [];

        Y.Array.each(cards, function (card, i) {
            if (!this.add(card)) {
                Y.error("invalid card " + card + " at position " + i);
            }
        }, this);
    }

    TrickList.prototype = {

        clone: function () {
            return new TrickList(this.cards());
        },

        size: function () {
            return this.cards().length;
        },

        isComplete: function () {
            return this.size() === 52;
        },

        contains: function (card) {
            return Y.Array.some(this._tricks, function (trick) {
                return trick.contains(card);
            });
        },

        cards: function () {
            return Y.Array.reduce(this._tricks, [], function (result, trick) {
                return result.concat(trick.cards());
            });
        },

        trick: function (index) {
            var length = this._tricks.length;

            if (!Y.Lang.isValue(index)) {
                index = length - 1;
            }

            return this._tricks[index];
        },

        add: function (card) {
            var result,
                trick = this.trick();

            result = !this.contains(card) && trick.add(card);

            if (trick.isComplete() && !this.isComplete()) {
                this._tricks.push(new Y.Bridge.Trick());
            }

            return result;
       }

    };

    Y.namespace("Bridge").TrickList = TrickList;

}, "", { requires: ["bridge-card", "bridge-trick", "collection"] });
