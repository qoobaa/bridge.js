YUI.add("bridge-hand-test", function (Y) {

    var Hand = Y.Bridge.Hand,
        isUndefined = Y.Assert.isUndefined,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Hand = new Y.Test.Case({

        name: "Hand Tests",

        _should: {
            error: {
                testConstructingWithInvalidId: true
            }
        },

        // constructor

        testConstructingWithInvalidId: function () {
            new Hand(new BigInteger("-1", 10));
        },

    });

}, "", { requires: ["test", "bridge-hand"] });
