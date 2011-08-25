YUI().use("console", "bridge-card-test", "bridge-bid-test", "bridge-auction-test", "bridge-deal-test", "bridge-hand-test", "bridge-trick-test", "bridge-play-test", function (Y) {
    window.Y = Y;

    new Y.Console({ newestOnTop: false, width: 500, height: 500 }).render();

    Y.Test.Runner.add(Y.Bridge.Test.Card);
    Y.Test.Runner.add(Y.Bridge.Test.Bid);
    Y.Test.Runner.add(Y.Bridge.Test.Auction);
    Y.Test.Runner.add(Y.Bridge.Test.Deal);
    Y.Test.Runner.add(Y.Bridge.Test.Hand);
    Y.Test.Runner.add(Y.Bridge.Test.Trick);
    Y.Test.Runner.add(Y.Bridge.Test.Play);

    Y.Test.Runner.run();
});
