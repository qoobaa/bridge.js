YUI.add("bridge-bid-test", function (Y) {

    var Bid = Y.Bridge.Bid,
        isTrue = Y.Assert.isTrue,
        isFalse = Y.Assert.isFalse,
        isInstanceOf = Y.Assert.isInstanceOf,
        isUndefined = Y.Assert.isUndefined,
        areSame = Y.Assert.areSame;

    Y.namespace("Bridge.Test").Bid = new Y.Test.Case({

        name: "Bid Tests",

        _should: {
            error: {
                testConstructingWithInvalidString: true,
                testConstructingWithoutArgument: true,
                testConstructingWithAnEmptyString: true,
                testCompareToRaisesErrorWithPassAndContract: true,
                testCompareToRaisesErrorWithDoubleAndRedouble: true,
                testCompareToRaisesErrorWithRedoubleAndContract: true
            }
        },

        // constructor

        testConstructingWithInvalidString: function () {
            new Bid("HA");
        },

        testConstructingWithoutArgument: function () {
            new Bid();
        },

        testConstructingWithAnEmptyString: function () {
            new Bid("");
        },

        testConstructingWithProperString: function () {
            isInstanceOf(Bid, new Bid("7NT"));
        },

        testConstructorWorksLikeFactory: function () {
            isInstanceOf(Bid, Bid("7NT"));
        },

        // card

        testToStringReturnsCardString: function () {
            areSame("7NT", Bid("7NT").toString());
        },

        // isPass

        testIsPassReturnsTrueForPass: function () {
            isTrue(Bid("PASS").isPass());
        },

        testIsPassReturnsFalseForContract: function () {
            isFalse(Bid("4C").isPass());
        },

        // isDouble

        testIsDoubleReturnsTrueForDouble: function () {
            isTrue(Bid("X").isDouble());
        },

        testIsDoubleReturnsFalseForContract: function () {
            isFalse(Bid("4C").isDouble());
        },

        // isRedouble

        testIsRedoubleReturnsTrueForRedouble: function () {
            isTrue(Bid("XX").isRedouble());
        },

        testIsRedoubleReturnsFalseForContract: function () {
            isFalse(Bid("4C").isRedouble());
        },

        // isModifier

        testIsModifierReturnsTrueForDouble: function () {
            isTrue(Bid("X").isModifier());
        },

        testIsModifierReturnsTrueForRedouble: function () {
            isTrue(Bid("XX").isModifier());
        },

        testIsModifierReturnsFalseForContract: function () {
            isFalse(Bid("4C").isModifier());
        },

        // isContract

        testIsContractReturnsTrueForContract: function () {
            isTrue(Bid("1H").isContract());
        },

        testIsContractReturnsFalseForDouble: function () {
            isFalse(Bid("X").isContract());
        },

        // level

        testLevelReturnsUndefinedForPass: function () {
            isUndefined(Bid("PASS").level());
        },

        testLevelReturns4For4D: function () {
            areSame("4", Bid("4D").level());
        },

        // suit

        testSuitReturnsUndefinedForPass: function () {
            isUndefined(Bid("PASS").suit());
        },

        testSuitReturnsDFor4D: function () {
            areSame("D", Bid("4D").suit());
        },

        testSuitReturnsNTFor1NT: function () {
            areSame("NT", Bid("1NT").suit());
        },

        // isTrump

        testIsTrumpReturnsFalseForPass: function () {
            isFalse(Bid("PASS").isTrump());
        },

        testIsTrumpReturnsTrueFor2H: function () {
            isTrue(Bid("2H").isTrump());
        },

        testIsTrumpReturnsFalseFor3NT: function () {
            isFalse(Bid("3NT").isTrump());
        },

        // isNoTrump

        testIsNoTrumpReturnsFalseForPass: function () {
            isFalse(Bid("PASS").isNoTrump());
        },

        testIsNoTrumpReturnsTrueFor2NT: function () {
            isTrue(Bid("2NT").isNoTrump());
        },

        testIsNoTrumpReturnsFalseFor3C: function () {
            isFalse(Bid("3C").isNoTrump());
        },

        // isMinor

        testIsMinorReturnsFalseForPass: function () {
            isFalse(Bid("PASS").isMinor());
        },

        testIsMinorReturnsFalseFor2NT: function () {
            isFalse(Bid("2NT").isMinor());
        },

        testIsMinorReturnsFalseFor2H: function () {
            isFalse(Bid("2H").isMinor());
        },

        testIsMinorReturnsTrueFor3C: function () {
            isTrue(Bid("3C").isMinor());
        },

        // isMajor

        testIsMajorReturnsFalseForPass: function () {
            isFalse(Bid("PASS").isMajor());
        },

        testIsMajorReturnsFalseFor2NT: function () {
            isFalse(Bid("2NT").isMajor());
        },

        testIsMajorReturnsTrueFor3C: function () {
            isFalse(Bid("3C").isMajor());
        },

        testIsMajorReturnsTrueFor2H: function () {
            isTrue(Bid("2H").isMajor());
        },

        // isSmallSlam

        testIsSmallSlamReturnsFalseForPass: function () {
            isFalse(Bid("PASS").isSmallSlam());
        },

        testIsSmallSlamReturnsFalseFor5H: function () {
            isFalse(Bid("5H").isSmallSlam());
        },

        testIsSmallSlamReturnsFalseFor7NT: function () {
            isFalse(Bid("7NT").isSmallSlam());
        },

        testIsSmallSlamReturnsFalseFor6H: function () {
            isTrue(Bid("6H").isSmallSlam());
        },

        // isGrandSlam

        testIsGrandSlamReturnsFalseForPass: function () {
            isFalse(Bid("PASS").isGrandSlam());
        },

        testIsGrandSlamReturnsFalseFor5H: function () {
            isFalse(Bid("5H").isGrandSlam());
        },

        testIsGrandSlamReturnsFalseFor6NT: function () {
            isFalse(Bid("6NT").isGrandSlam());
        },

        testIsGrandSlamReturnsFalseFor7C: function () {
            isTrue(Bid("7C").isGrandSlam());
        },

        // compareTo

        testCompareToReturnsZeroWithTwoPasses: function () {
            areSame(0, Bid("PASS").compareTo(Bid("PASS")));
        },

        testCompareToReturnsZeroWithTwoDoubles: function () {
            areSame(0, Bid("X").compareTo(Bid("X")));
        },

        testCompareToReturnsZeroWithTwoRedoubles: function () {
            areSame(0, Bid("XX").compareTo(Bid("XX")));
        },

        testCompareToReturnsZeroWithTwoRedoubles: function () {
            areSame(0, Bid("XX").compareTo(Bid("XX")));
        },

        testCompareToReturnsPositiveNumberForLowerContract: function () {
            isTrue(Bid("3NT").compareTo(Bid("1H")) > 0);
        },

        testCompareToReturnsNegativeNumberForHigherContract: function () {
            isTrue(Bid("3NT").compareTo(Bid("6NT")) < 0);
        },

        testCompareToRaisesErrorWithPassAndContract: function () {
            areSame(0, Bid("PASS").compareTo(Bid("1C")));
        },

        testCompareToRaisesErrorWithDoubleAndRedouble: function () {
            areSame(0, Bid("X").compareTo(Bid("XX")));
        },

        testCompareToRaisesErrorWithRedoubleAndContract: function () {
            areSame(0, Bid("XX").compareTo(Bid("1C")));
        }

    });

}, "", { requires: ["test", "bridge-bid"] });
