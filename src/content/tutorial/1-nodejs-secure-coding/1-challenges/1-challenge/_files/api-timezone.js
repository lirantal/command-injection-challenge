app.get("/api/timezone", async (req, res) => {
  // Get the timezone for a location
  try {
    const timeInformation = await getTimeInformation(req.query.timezone);
    return res.json({ timezone: timeInformation });
  } catch (error) {
    return res.json({ error: error.message });
  }
});
