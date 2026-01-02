export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) {
    return res.status(400).json({ error: "Number required" });
  }

  try {
    // Original API call hidden from browser
    const response = await fetch(`https://api.cnic.pro/?num=${encodeURIComponent(num)}`);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "API Error" });
  }
}

