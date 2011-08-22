YUI.add("bridge-deal", function (Y) {

    function Deal(bigIntegerOrDeal) {
        if (!Y.instanceOf(this, Deal)) {
            return new Deal(bigIntegerOrDeal);
        }

        if (Y.instanceOf(bigIntegerOrDeal, Deal)) {
            this._id = Y.BigInteger(bigIntegerOrDeal._id);
        } else {
            if (!Deal.isDealId(bigIntegerOrDeal)) {
                Y.error(bigIntegerOrDeal + " is not a valid deal id");
            }

            this._init(Y.BigInteger(bigIntegerOrDeal));
        }
    }

    Deal.NUMBER     = Y.BigInteger("53644737765488792839237440000");
    Deal.MIN_NUMBER = Y.BigInteger(0);
    Deal.MAX_NUMBER = Deal.NUMBER.subtract(1);

    Deal.isDealId = function (bigInteger) {
        return Deal.MIN_NUMBER.compare(bigInteger) <= 0 && Deal.MAX_NUMBER.compare(bigInteger) >= 0;
    };

    Deal.randomId = function () {
        var binary, result, i;

        do {
            binary = "0b";
            for (i = 0; i < 96; i++) {
                binary += Math.round(Math.random());
            }
            result = Y.BigInteger(binary);
        } while (Deal.NUMBER.compare(result) < 0)

        return result;
    };

    Deal.random = function () {
        return Deal(Deal.randomId());
    };

    Deal.prototype = {

        _init: function (id) {
            var x,
                n = Y.Bridge.Hand(),
                e = Y.Bridge.Hand(),
                s = Y.Bridge.Hand(),
                w = Y.Bridge.Hand(),
                k = Deal.NUMBER;

            Y.Array.each(Y.Array.map(Y.Bridge.Card.CARDS, Y.Bridge.Card), function (card, i) {
                x = k.multiply(13 - n.size()).divide(52 - i);
                if (id.compare(x) < 0) {
                    n.add(card);
                } else {
                    id = id.subtract(x);
                    x = k.multiply(13 - e.size()).divide(52 - i);
                    if (id.compare(x) < 0) {
                        e.add(card);
                    } else {
                        id = id.subtract(x);
                        x = k.multiply(13 - s.size()).divide(52 - i);
                        if (id.compare(x) < 0) {
                            s.add(card);
                        } else {
                            id = id.subtract(x);
                            x = k.multiply(13 - w.size()).divide(52 - i);
                            w.add(card);
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

        id: function () {
            var x,
                id = Y.BigInteger(0),
                n = this._n.clone(),
                e = this._e.clone(),
                s = this._s.clone(),
                w = this._w.clone(),
                k = Deal.NUMBER;

            Y.Array.each(Y.Bridge.Card.CARDS, function (card, i) {
                x = k.multiply(n.size()).divide(52 - i);
                if (!n.remove(card)) {
                    id = id.add(x);
                    x = k.multiply(e.size()).divide(52 - i);
                    if (!e.remove(card)) {
                        id = id.add(x);
                        x = k.multiply(s.size()).divide(52 - i);
                        if (!s.remove(card)) {
                            id = id.add(x);
                            x = k.multiply(w.size()).divide(52 - i);
                            w.remove(card);
                        }
                    }
                }
                k = x;
            });

            return id;
        }

    };

    Y.namespace("Bridge").Deal = Deal;

}, "", { requires: ["bridge-hand", "bridge-card", "biginteger", "collection"] });
