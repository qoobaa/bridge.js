window.YUI_config = {
    filter: "raw",
    groups: {
        bridge: {
            base: "bridge/",
            modules: {
                "bridge-card": {
                    path: "card/card.js",
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
                }
            }
        }
    }
};
