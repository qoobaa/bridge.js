YUI.add("bridge-auction", function (Y) {

    function Auction(arrayOrAuction) {
        if (!Y.instanceOf(this, Auction)) {
            return new Auction(arrayOrAuction);
        }

        if (Y.instanceOf(arrayOrAuction, Auction)) {
            this._bids = arrayOrAuction._bids.slice(0);
        } else {
            this._bids = [];
            Y.Array.each(arrayOrAuction, function (stringOrBid, i) {
                if (!this.add(stringOrBid)) {
                    Y.error("invalid bid " + stringOrBid + " at position " + i);
                }
            }, this);
        }
    }

    Auction.prototype = {

        size: function () {
            return this._bids.length;
        },

        contracts: function () {
            return Y.Array.filter(this._bids, function (bid) {
                return bid.isContract();
            });
        },

        lastContract: function () {
            var contracts = this.contracts();

            return contracts[contracts.length - 1];
        },

        add: function (stringOrBid) {
            var lastContract, bid1, bid2, bid3,
                length = this._bids.length,
                bid = Y.Bridge.Bid(stringOrBid);

            bid1 = this._bids[length - 1];
            bid2 = this._bids[length - 2];
            bid3 = this._bids[length - 3];

            if (this.isFinished()) {
                return false;
            } else if (bid.isDouble()) {
                if (!((bid1 && bid1.isContract()) || (bid1 && bid1.isPass() && bid2 && bid2.isPass() && bid3 && bid3.isContract()))) {
                    return false;
                }
            } else if (bid.isRedouble()) {
                if (!((bid1 && bid1.isDouble()) || (bid1 && bid1.isPass && bid2 && bid2.isPass() && bid3 && bid3.isDouble()))) {
                    return false;
                }
            } else if (bid.isContract()) {
                lastContract = this.lastContract();

                if (lastContract && lastContract.compareTo(bid) >= 0) {
                    return false;
                }
            }

            this._bids.push(bid);
            return true;
        },

        isFinished: function () {
            if (this._bids.length > 3) {
                return Y.Array.every(this._bids.slice(-3), function (bid) {
                    return bid.isPass();
                });
            } else {
                return false;
            }
        }

    };

    Y.namespace("Bridge").Auction = Auction;

}, "", { requires: ["bridge-bid", "collection"] });
