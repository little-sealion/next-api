
export default function handler(req, res) {
    res.json({unix:Date.now() ,utc:new Date().toUTCString()});
  }