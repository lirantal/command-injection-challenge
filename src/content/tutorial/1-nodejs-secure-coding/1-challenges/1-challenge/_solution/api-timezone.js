app.get("/api/timezone", async (req, res) => {
  // Get the timezone for a location
  try {
    // 💡💡💡 What are some possible ways this function would be implemented?
    const timeInformation = await getTimeInformation(req.query.timezone);
    return res.json({ timezone: timeInformation });
  } catch (error) {
    return res.json({ error: error.message });
  }
});
