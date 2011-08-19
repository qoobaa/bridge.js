YUI.add("bridge-auction-test", function (Y) {

    var Auction = Y.Bridge.Auction,
        isTrue = Y.Assert.isTrue,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Auction = new Y.Test.Case({

        name: "Auction Tests",

        _should: {
            error: {
                testConstructingWithInvalidString: true
            }
        },

        // constructor

        testConstructingWithInvalidString: function () {
            new Auction(["HA"]);
        }

    });

}, "", { requires: ["test", "bridge-auction"] });
