YUI.add("board", function (Y) {

    function Board(attributes) {
        if (!Y.instanceOf(this, Board)) {
            return new Board();
        }

        this._deal = Y.Bridge.Deal(attributes.dealId, attributes.dealer, attributes.vulnerable);
        this._auction = Y.Bridge.Auction(attributes.auction);
        this._tricklist = Y.Bridge.TrickList(attributes.play);
    }

    Board.prototype = {

    };

}, "", { requires: ["bridge-deal", "bridge-auction", "bridge-tricklist"] });
