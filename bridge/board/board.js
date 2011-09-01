YUI.add("board", function (Y) {

    function Board(arrayOrBoard) {
        // if (!Y.instanceOf(this, Board)) {
        //     return new Board(arrayOrBoard);
        // }

        // if (Y.instanceOf(arrayOrBoard, Board)) {
        //     this._tricks = Y.Array.map(arrayOrBoard._tricks, function (trick) {
        //         return trick.clone();
        //     });
        // } else {
        //     this._tricks = [];
        //     Y.Array.each(arrayOrBoard, function (stringOrCard, i) {
        //         if (!this.add(stringOrCard)) {
        //             Y.error("invalid card " + stringOrCard + " at position " + i);
        //         }
        //     }, this);
        // }
    }

    Board.prototype = {

    };

}, "", { requires: ["bridge-deal", "bridge-auction", "bridge-play"] });
