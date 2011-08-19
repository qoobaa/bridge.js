YUI().use("console", "bridge-card-test", "bridge-bid-test", "bridge-auction-test", function (Y) {
    window.Y = Y;

    new Y.Console({ newestOnTop: false, width: 500, height: 500 }).render();

    Y.Test.Runner.add(Y.Bridge.Test.Card);
    Y.Test.Runner.add(Y.Bridge.Test.Bid);
    Y.Test.Runner.add(Y.Bridge.Test.Auction);

    Y.Test.Runner.run();
});
