import ChildProcess from "child_process";

app.get("/api/timezone", (req, res) => {

  const timezone = req.query.timezone;
  const requestTimeZoneInfo = `curl -X 'GET' -H 'accept: application/json' 'https://timeapi.io/api/time/current/zone?timeZone=${timezone}'`;
  ChildProcess.exec(requestTimeZoneInfo, (error, stdout) => {
    if (error) {
      res.json({ error: error.message });
      return;
    }
    res.json({ timezone: stdout.trim() });
  });
});
