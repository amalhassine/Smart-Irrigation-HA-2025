export default function handler(req, res) {
  res.status(200).json({ etat: "on" }); // ou "off"
}
