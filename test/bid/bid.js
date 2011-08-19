YUI.add("bridge-bid-test", function (Y) {

    var Bid = Y.Bridge.Bid,
        isTrue = Y.Assert.isTrue,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Bid = new Y.Test.Case({

        name: "Bid Tests",

        _should: {
            error: {
                testConstructingWithInvalidString: true
            }
        },

        // constructor

        testConstructingWithInvalidString: function () {
            new Bid("HA");
        }

    });

}, "", { requires: ["test", "bridge-bid"] });
