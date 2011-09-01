YUI.add("bridge-play", function (Y) {

    function Play(arrayOrPlay) {
        if (!Y.instanceOf(this, Play)) {
            return new Play(arrayOrPlay);
        }

        if (Y.instanceOf(arrayOrPlay, Play)) {
            this._tricks = Y.Array.map(arrayOrPlay._tricks, function (trick) {
                return trick.clone();
            });
        } else {
            this._tricks = [];
            Y.Array.each(arrayOrPlay, function (stringOrCard, i) {
                if (!this.add(stringOrCard)) {
                    Y.error("invalid card " + stringOrCard + " at position " + i);
                }
            }, this);
        }
    }

    Play.prototype = {

        clone: function () {
            return new Play(this);
        },

        size: function () {
            return Y.Array.reduce(this._tricks, 0, function (previous, trick) {
                return previous + trick.size();
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

        lead: function (index) {
            var i,
                result = 0;

            if (!Y.Lang.isValue(index)) {
                index = this._tricks.length - 1;
            }

            for (i = 0; i < index; i++) {
                result += this.trick(i).winnerIndex();
            }

            return result % 4;
        },

        winner: function (index) {
            var i, result;

            if (!Y.Lang.isValue(index)) {
                index = this._tricks.length - 1;
            }

            if (this.trick(index).isComplete()) {
                for (i = 0; i <= index; i++) {
                    result += this.trick(i).winnerIndex();
                }

                return result % 4;
            }
        },

        trick: function (index) {
            var length = this._tricks.length;

            if (!Y.Lang.isValue(index)) {
                index = length - 1;
            }

            return this._tricks[index];
        },

        current: function () {
            return (this.lead() + this.trick().size()) % 4;
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

    Y.namespace("Bridge").Play = Play;

}, "", { requires: ["bridge-card", "bridge-trick", "collection"] });
