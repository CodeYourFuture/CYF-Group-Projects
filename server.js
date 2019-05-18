var server = require("live-server");
server.start({
  middleware: [
    function(req, res, next) {
      // Tiny middleware to support a fake POST request to /star
      if (req.url === "/star" && req.method === "POST") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Star added!" }));
      } else {
        next();
      }
    }
  ]
});
