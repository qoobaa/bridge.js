YUI.add("bridge-bid", function (Y) {

    function Bid(string) {
        if (!Y.instanceOf(this, Bid)) {
            return new Bid(string);
        }

        if (!Bid.isBid(string)) {
            Y.error(string + " is not a valid bid");
        }

        this._bid = string;
    }

    Bid.LEVELS = ["1", "2", "3", "4", "5", "6", "7"];

    Bid.SUITS = ["C", "D", "H", "S", "NT"];

    Bid.MODIFIERS = ["X", "XX"];

    Bid.CONTRACTS = ["1C", "1D", "1H", "1S", "1NT",
                     "2C", "2D", "2H", "2S", "2NT",
                     "3C", "3D", "3H", "3S", "3NT",
                     "4C", "4D", "4H", "4S", "4NT",
                     "5C", "5D", "5H", "5S", "5NT",
                     "6C", "6D", "6H", "6S", "6NT",
                     "7C", "7D", "7H", "7S", "7NT"];

    Bid.BIDS = ["PASS"].concat(Bid.MODIFIERS).concat(Bid.CONTRACTS);

    Bid.SUIT_SYMBOLS = { C: "♣", D: "♦", H: "♥", S: "♠", NT: "NT" };

    Bid.isBid = function (string) {
        return Y.Array.indexOf(Bid.BIDS, string) !== -1;
    };

    Bid.prototype = {

        bid: function () {
            return this._bid();
        },

        isContract: function () {
            return Y.Array.indexOf(Bid.CONTRACTS, this._bid) !== -1;
        },

        isModifier: function () {
            return Y.Array.indexOf(Bid.MODIFIERS, this._bid) !== -1;
        },

        isPass: function () {
            return this._bid === "PASS";
        },

        isDouble: function () {
            return this._bid === "X";
        },

        isRedouble: function () {
            return this._bid === "XX";
        },

        level: function () {
            return this.isContract() ? this._bid[0] : undefined;
        },

        suit: function () {
            return this.isContract() ? this._bid.substr(1) : undefined;
        },

        isNoTrump: function () {
            return this.suit() === "NT";
        },

        isTrump: function () {
            return this.isContract() && !this.isNoTrump();
        },

        isMinor: function () {
            var suit = this.suit();

            return suit === "C" || suit === "D";
        },

        isMajor: function () {
            var suit = this.suit();

            return suit === "H" || suit === "S";
        },

        isSmallSlam: function () {
            return this.level() === "6";
        },

        isGrandSlam: function () {
            return this.level() === "7";
        },

        compareTo: function (other) {
            if (this.isPass()) {
                if (!other.isPass()) {
                    Y.error("could not compare pass bid with non-pass bid " + other._bid);
                }
                return true;
            } else if (this.isDouble()) {
                if (!other.isDouble()) {
                    Y.error("could not compare double bid with non-double bid " + other._bid);
                }
                return true;
            } else if (this.isRedouble()) {
                if (!other.isRedouble()) {
                    Y.error("could not compare redouble bid with non-redouble bid " + other._bid);
                }
                return true;
            } else if (this.isContract()) {
                if (!other.isContract()) {
                    Y.error("could not compare contract bid with non-contract bid " + other._bid);
                }
                return Y.Array.indexOf(Bid.CONTRACTS, this._bid) - Y.Array.indexOf(Bid.CONTRACTS, other._bid);
            }
        },

        levelString: function () {
            return this.level();
        },

        suitString: function () {
            var suit = this.suit();

            return Bid.SUIT_SYMBOLS[suit];
        },

        bidString: function () {
            if (this.isContract()) {
                return this.levelString() + this.suitString();
            } else if (this.isDouble()) {
                return "Double";
            } else if (this.isRedouble()) {
                return "Redouble";
            } else if (this.isPass()) {
                return "Pass";
            }
        },

        toString: function () {
            return "<Bid: " + this.bidString() + ">";
        }

    };

    Y.namespace("Bridge").Bid = Bid;

}, "", { requires: [] });