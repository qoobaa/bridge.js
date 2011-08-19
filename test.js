YUI().use("console", "bridge-card-test", function (Y) {
    window.Y = Y;

    new Y.Console({ newestOnTop: false, width: 500, height: 500 }).render();

    Y.Test.Runner.add(Y.Bridge.Test.Card);

    Y.Test.Runner.run();
});
