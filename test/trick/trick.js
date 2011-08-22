YUI.add("bridge-trick-test", function (Y) {

    var Trick = Y.Bridge.Trick,
        isUndefined = Y.Assert.isUndefined,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Trick = new Y.Test.Case({

        name: "Trick Tests",

        _should: {
            error: {
                testConstructingWithInvalidCard: true
            }
        },

        // constructor

        testConstructingWithInvalidCard: function () {
            new Trick(["AA"]);
        },

    });

}, "", { requires: ["test", "bridge-trick"] });
