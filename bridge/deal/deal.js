YUI.add("bridge-deal", function (Y) {

    var Card = Y.Bridge.Card,
        BigInteger = Y.BigInteger;

    function Deal(bigIntegerOrDeal) {
        if (!Y.instanceOf(this, Deal)) {
            return new Deal(bigIntegerOrDeal);
        }

        if (Y.instanceOf(bigIntegerOrDeal, Deal)) {
            this._dealId = BigInteger(bigIntegerOrDeal._dealId);
        } else {
            if (!Deal.isDealId(bigIntegerOrDeal)) {
                Y.error(bigIntegerOrDeal + " is not a valid deal id");
            }

            this._dealId = BigInteger(bigIntegerOrDeal);
        }
    }

    Deal.NUMBER     = BigInteger("53644737765488792839237440000");
    Deal.MIN_NUMBER = BigInteger(0);
    Deal.MAX_NUMBER = Deal.NUMBER.subtract(1);

    Deal.isDealId = function (bigInteger) {
        return Deal.MIN_NUMBER.compare(bigInteger) <= 0 && Deal.MAX_NUMBER.compare(bigInteger) >= 0;
    };

    Deal.prototype = {

        deserialize: function () {
            var x,
                id = this._dealId,
                n = [],
                e = [],
                s = [],
                w = [],
                k = Deal.NUMBER;

            Y.Array.each(Y.Array.map(Card.CARDS, Card), function (card, i) {
                x = k.multiply(13 - n.length).divide(52 - i);
                if (id.compare(x) < 0) {
                    n.push(card);
                } else {
                    id = id.subtract(x);
                    x = k.multiply(13 - e.length).divide(52 - i);
                    if (id.compare(x) < 0) {
                        e.push(card);
                    } else {
                        id = id.subtract(x);
                        x = k.multiply(13 - s.length).divide(52 - i);
                        if (id.compare(x) < 0) {
                            s.push(card);
                        } else {
                            id = id.subtract(x);
                            x = k.multiply(13 - w.length).divide(52 - i);
                            w.push(card);
                        }
                    }
                }
                k = x;
            });

            this._n = n;
            this._e = e;
            this._s = s;
            this._w = w;
        },

        dealId: function () {
            var x, cardIndex,
                id = BigInteger(0),
                n = Y.Array.map(this._n, String),
                e = Y.Array.map(this._e, String),
                s = Y.Array.map(this._s, String),
                w = Y.Array.map(this._w, String),
                k = Deal.NUMBER;

            Y.Array.each(Card.CARDS, function (card, i) {
                x = k.multiply(n.length).divide(52 - i);
                cardIndex = Y.Array.indexOf(n, card);
                if (cardIndex === -1) {
                    id = id.add(x);
                    x = k.multiply(e.length).divide(52 - i);
                    cardIndex = Y.Array.indexOf(e, card);
                    if (cardIndex === -1) {
                        id = id.add(x);
                        x = k.multiply(s.length).divide(52 - i);
                        cardIndex = Y.Array.indexOf(s, card);
                        if (cardIndex === -1) {
                            id = id.add(x);
                            x = k.multiply(w.length).divide(52 - i);
                            cardIndex = Y.Array.indexOf(w, card);
                            w.splice(cardIndex, 1);
                        } else {
                            s.splice(cardIndex, 1);
                        }
                    } else {
                        e.splice(cardIndex, 1);
                    }
                } else {
                    n.splice(cardIndex, 1);
                }
                k = x;
            });

            return id;
        }

    };

    Y.namespace("Bridge").Deal = Deal;

}, "", { requires: ["bridge-card", "biginteger"] });
