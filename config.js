window.YUI_config = {
    filter: "raw",
    groups: {
        other: {
            base: "other/",
            modules: {
                "biginteger": {
                    path: "biginteger/biginteger.js",
                    requires: []
                }
            }
        },
        bridge: {
            base: "bridge/",
            modules: {
                "bridge-card": {
                    path: "card/card.js",
                    requires: []
                },
                "bridge-bid": {
                    path: "bid/bid.js",
                    requires: []
                },
                "bridge-auction": {
                    path: "auction/auction.js",
                    requires: ["bridge-bid", "collection"]
                },
                "bridge-deal": {
                    path: "deal/deal.js",
                    requires: ["bridge-hand", "bridge-card", "biginteger", "collection"]
                },
                "bridge-hand": {
                    path: "hand/hand.js",
                    requires: ["bridge-card", "collection"]
                },
                "bridge-trick": {
                    path: "trick/trick.js",
                    requires: ["bridge-card", "collection"]
                },
                "bridge-play": {
                    path: "play/play.js",
                    requires: ["bridge-card", "bridge-trick", "collection"]
                }
            }
        },
        test: {
            base: "test/",
            modules: {
                "bridge-card-test": {
                    path: "card/card.js",
                    requires: ["test", "bridge-card"]
                },
                "bridge-bid-test": {
                    path: "bid/bid.js",
                    requires: ["test", "bridge-bid"]
                },
                "bridge-auction-test": {
                    path: "auction/auction.js",
                    requires: ["test", "bridge-auction"]
                },
                "bridge-deal-test": {
                    path: "deal/deal.js",
                    requires: ["test", "bridge-deal"]
                },
                "bridge-hand-test": {
                    path: "hand/hand.js",
                    requires: ["test", "bridge-hand"]
                },
                "bridge-trick-test": {
                    path: "trick/trick.js",
                    requires: ["test", "bridge-trick"]
                },
                "bridge-play-test": {
                    path: "play/play.js",
                    requires: ["test", "bridge-play"]
                }
            }
        }
    }
};
