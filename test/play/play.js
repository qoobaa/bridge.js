YUI.add("bridge-play-test", function (Y) {

    var Play = Y.Bridge.Play,
        isUndefined = Y.Assert.isUndefined,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Play = new Y.Test.Case({

        name: "Play Tests",

        _should: {
            error: {
                testConstructingWithInvalidCards: true
            }
        },

        // constructor

        testConstructingWithInvalidCards: function () {
            new Play(["AA"]);
        },

    });

}, "", { requires: ["test", "bridge-play"] });
