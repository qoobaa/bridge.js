YUI.add("bridge-auction", function (Y) {

    function Auction(arrayOrAuction) {
        if (!Y.instanceOf(this, Auction)) {
            return new Auction(arrayOrAuction);
        }

        if (Y.instanceOf(arrayOrAuction, Auction)) {
            this._bids = arrayOrAuction._bids.slice(0);
        } else {
            this._bids = Y.Array.map(arrayOrAuction, function (stringOrBid) {
                return Y.Bridge.Bid(stringOrBid);
            });
        }
    }

    Y.namespace("Bridge").Auction = Auction;

}, "", { requires: ["bridge-bid", "collection"] });
