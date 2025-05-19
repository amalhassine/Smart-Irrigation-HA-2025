
let state = { pump: "off", buzzer: "off" };

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { device } = req.body;
    if (device && (device === "pump" || device === "buzzer")) {
      state[device] = state[device] === "off" ? "on" : "off";
      res.status(200).json({ state: state[device] });
    } else {
      res.status(400).json({ error: "Invalid device" });
    }
  } else if (req.method === 'GET') {
    res.status(200).json(state);
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
