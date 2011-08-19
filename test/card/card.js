YUI.add("bridge-card-test", function (Y) {

    var isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        isUndefined = Y.Assert.isUndefined,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Card = new Y.Test.Case({

        name: "Card Tests",

        setUp: function () {

        },

        // state

        testTruth: function () {
            isTrue(true);
        }
    });

}, "", { requires: ["test", "bridge-card"] });
