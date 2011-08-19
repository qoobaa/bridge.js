window.YUI_config = {
    filter: "raw",
    groups: {
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
                }
            }
        }
    }
};
