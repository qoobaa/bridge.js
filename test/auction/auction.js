YUI.add("bridge-auction-test", function (Y) {

    var Auction = Y.Bridge.Auction,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Auction = new Y.Test.Case({

        name: "Auction Tests",

        setUp: function () {
            this.auction = new Auction();
        },

        _should: {
            error: {
                testConstructingWithInvalidString: true,
                testConstructingWithDouble: true
            }
        },

        // constructor

        testConstructingWithInvalidString: function () {
            new Auction(["HA"]);
        },

        testConstructingWithPass: function () {
            new Auction(["PASS"]);
        },

        testConstructingWithDouble: function () {
            new Auction(["X"]);
        },

        testConstructingWithEmptyArray: function () {
            new Auction([]);
        },

        testConstructingWithoutArguments: function () {
            new Auction();
        },

        // add

        testAddWithPasses: function () {
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("PASS"));
            isFalse(this.auction.add("PASS"));
        },

        testAddWithContracts: function () {
            isTrue(this.auction.add("1C"));
            isTrue(this.auction.add("1D"));
            isTrue(this.auction.add("1H"));
            isTrue(this.auction.add("1S"));
            isTrue(this.auction.add("1NT"));
        },

        testAddReturnsFalseOnContractLowerThanLast: function () {
            isTrue(this.auction.add("1NT"));
            isFalse(this.auction.add("1S"));
            isFalse(this.auction.add("1H"));
            isFalse(this.auction.add("1D"));
            isFalse(this.auction.add("1C"));
        },

        testAddWithDouble: function () {
            isTrue(this.auction.add("1C"));
            isTrue(this.auction.add("X"));
            isFalse(this.auction.add("X"));
        },

        testAddWithDoubleAndPasses: function () {
            isTrue(this.auction.add("1C"));
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("X"));
        },

        testAddWithDoubleWithoutContract: function () {
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("PASS"));
            isFalse(this.auction.add("X"));
        },

        testAddWithRedouble: function () {
            isTrue(this.auction.add("1C"));
            isTrue(this.auction.add("X"));
            isTrue(this.auction.add("XX"));
            isFalse(this.auction.add("XX"));
        },

        testAddWithRedoubleAndPasses: function () {
            isTrue(this.auction.add("1C"));
            isTrue(this.auction.add("X"));
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("PASS"));
            isTrue(this.auction.add("XX"));
            isFalse(this.auction.add("XX"));
        }

    });

}, "", { requires: ["test", "bridge-auction"] });
