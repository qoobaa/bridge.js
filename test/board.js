YUI.add("bridge-board-test", function (Y) {

    var Board = Y.Bridge.Board,
        isUndefined = Y.Assert.isUndefined,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Board = new Y.Test.Case({

        name: "Board Tests",

        setUp: function () {
            this.board = new Board();
        },

        _should: {
            error: {
                // testConstructingWithInvalidCards: true
            }
        },

        // constructor

        // testConstructingWithInvalidCards: function () {
        //     new Board(["AA"]);
        // },

    });

}, "", { requires: ["test", "bridge-board"] });
