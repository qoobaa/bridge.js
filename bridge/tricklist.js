YUI.add("bridge-tricklist", function (Y) {

    function TrickList(array) {
        if (!Y.instanceOf(this, TrickList)) {
            return new TrickList(array);
        }

        this._tricks = [];

        Y.Array.each(array, function (string, i) {
            if (!this.add(string)) {
                Y.error("invalid card " + string + " at position " + i);
            }
        }, this);
    }

    TrickList.prototype = {

        clone: function () {
            return new TrickList(this);
        },

        size: function () {
            return Y.Array.reduce(this._tricks, 0, function (sum, trick) {
                return sum + trick.size();
            });
        },

        isComplete: function () {
            return this.size() === 52;
        },

        contains: function (card) {
            return Y.Array.some(this._tricks, function (trick) {
                return trick.contains(card);
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
