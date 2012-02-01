YUI.GlobalConfig = {
    filter: "raw",
    groups: {
        other: {
            base: "other/",
            modules: {
                "biginteger": {
                    path: "biginteger.js",
                    requires: []
                }
            }
        },
        bridge: {
            base: "bridge/",
            modules: {
                "bridge-card": {
                    path: "card.js",
                    requires: []
                },
                "bridge-bid": {
                    path: "bid.js",
                    requires: []
                },
                "bridge-auction": {
                    path: "auction.js",
                    requires: ["bridge-bid", "collection"]
                },
                "bridge-deal": {
                    path: "deal.js",
                    requires: ["bridge-hand", "bridge-card", "biginteger", "collection"]
                },
                "bridge-hand": {
                    path: "hand.js",
                    requires: ["bridge-card", "collection"]
                },
                "bridge-trick": {
                    path: "trick.js",
                    requires: ["bridge-card", "collection"]
                },
                "bridge-tricklist": {
                    path: "tricklist.js",
                    requires: ["bridge-card", "bridge-trick", "collection"]
                },
                "bridge-board": {
                    path: "board.js",
                    requires: ["bridge-deal", "bridge-auction", "bridge-tricklist"]
                }
            }
        },
        test: {
            base: "test/",
            modules: {
                "bridge-card-test": {
                    path: "card.js",
                    requires: ["test", "bridge-card"]
                },
                "bridge-bid-test": {
                    path: "bid.js",
                    requires: ["test", "bridge-bid"]
                },
                "bridge-auction-test": {
                    path: "auction.js",
                    requires: ["test", "bridge-auction"]
                },
                "bridge-deal-test": {
                    path: "deal.js",
                    requires: ["test", "bridge-deal"]
                },
                "bridge-hand-test": {
                    path: "hand.js",
                    requires: ["test", "bridge-hand"]
                },
                "bridge-trick-test": {
                    path: "trick.js",
                    requires: ["test", "bridge-trick"]
                },
                "bridge-tricklist-test": {
                    path: "tricklist.js",
                    requires: ["test", "bridge-tricklist"]
                },
                "bridge-board-test": {
                    path: "board.js",
                    requires: ["test", "bridge-board"]
                }
            }
        }
    }
};
