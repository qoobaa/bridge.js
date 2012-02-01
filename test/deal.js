YUI.add("bridge-deal-test", function (Y) {

    var Deal = Y.Bridge.Deal,
        isUndefined = Y.Assert.isUndefined,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Deal = new Y.Test.Case({

        name: "Deal Tests",

        _should: {
            error: {
                testConstructingWithInvalidId: true
            }
        },

        // constructor

        testConstructingWithInvalidId: function () {
            new Deal(new BigInteger("-1", 10));
        },

    });

}, "", { requires: ["test", "bridge-deal"] });
