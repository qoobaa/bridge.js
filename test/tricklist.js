YUI.add("bridge-tricklist-test", function (Y) {

    var TrickList = Y.Bridge.TrickList,
        isUndefined = Y.Assert.isUndefined,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").TrickList = new Y.Test.Case({

        name: "TrickList Tests",

        setUp: function () {
            this.tricklist = new TrickList();
        },

        _should: {
            error: {
                testConstructingWithInvalidCards: true
            }
        },

        // constructor

        testConstructingWithInvalidCards: function () {
            new TrickList(["AA"]);
        },

    });

}, "", { requires: ["test", "bridge-tricklist"] });
