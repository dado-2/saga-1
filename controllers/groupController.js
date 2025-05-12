const db = require('../config/db');

exports.getGroups = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM groups WHERE is_full = false");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.selectGroup = async (req, res) => {
  const { studentId, groupId } = req.body;
  try {
    const result = await db.query("UPDATE students SET selected_group=$1 WHERE id=$2 RETURNING *", [groupId, studentId]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};