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

        lastContract: function () {
            var contracts = Y.Array.filter(this._bids, function (bid) {
                return bid.isContract();
            });

            return contracts[contracts.length - 1];
        },

        lastModifier: function () {
            return Y.Array.reduce(this._bids, undefined, function (result, bid) {
                if (bid.isContract()) {
                    return undefined;
                } else if (bid.isModifier()) {
                    return bid;
                } else {
                    return result;
                }
            });
        },

        declarer: function () {
            var lastContractIndex, lastContractSuit, result,
                lastContract = this.lastContract();

            if (lastContract) {
                lastContractIndex = Y.Array.lastIndexOf(this._bids, lastContract);
                lastContractSuit = lastContract.suit();

                Y.Array.find(this._bids, function (bid, i) {
                    result = i;
                    return bid.suit() === lastContractSuit && i % 2 === lastContractIndex % 2;
                });

                return result % 4;
            }
        },

        current: function () {
            return this._bids.length % 4;
        },

        _isDoubleAllowed: function () {
            var bid1, bid2, bid3,
                length = this._bids.length;

            bid1 = this._bids[length - 1];
            bid2 = this._bids[length - 2];
            bid3 = this._bids[length - 3];

            return (bid1 && bid1.isContract()) ||
                (bid1 && bid1.isPass() &&
                 bid2 && bid2.isPass() &&
                 bid3 && bid3.isContract());
        },

        _isRedoubleAllowed: function () {
            var bid1, bid2, bid3,
                length = this._bids.length;

            bid1 = this._bids[length - 1];
            bid2 = this._bids[length - 2];
            bid3 = this._bids[length - 3];

            return (bid1 && bid1.isDouble()) ||
                (bid1 && bid1.isPass &&
                 bid2 && bid2.isPass() &&
                 bid3 && bid3.isDouble());
        },

        _isContractAllowed: function (contract) {
            var lastContract = this.lastContract();

            return !lastContract || lastContract.compareTo(contract) < 0;
        },

        isBidAllowed: function (bid) {
            return !this.isComplete() &&
                (bid.isPass() ||
                 (bid.isDouble() && this._isDoubleAllowed()) ||
                 (bid.isRedouble() && this._isRedoubleAllowed()) ||
                 (bid.isContract() && this._isContractAllowed(bid)));
        },

        add: function (stringOrBid) {
            var bid = Y.Bridge.Bid(stringOrBid);

            return this.isBidAllowed(bid) && this._bids.push(bid) && true;
        },

        isComplete: function () {
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
