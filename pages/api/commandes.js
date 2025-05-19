
let state = { pump: "off", buzzer: "off" };

export default function handler(req, res) {
  if (req.method === "POST") {
    const { device, state: newState } = req.body;
    if (device && newState && (device === "pump" || device === "buzzer")) {
      state[device] = newState;
      return res.status(200).json({ success: true });
    }
    return res.status(400).json({ success: false, message: "Invalid data" });
  } else if (req.method === "GET") {
    return res.status(200).json(state);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
