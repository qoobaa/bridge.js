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
                }
            }
        }
    }
};
