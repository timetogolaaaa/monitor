// 同时存 PH 和温度
let phValue = 0;
let tempValue = 0;

export default function handler(req, res) {
  // GET：前端获取数据
  if (req.method === "GET") {
    return res.status(200).json({
      ph: phValue,
      temp: tempValue
    });
  }

  // POST：ESP32 上传数据
  if (req.method === "POST") {
    const { ph, temp } = req.body;
    if (ph !== undefined) phValue = parseFloat(ph);
    if (temp !== undefined) tempValue = parseFloat(temp);

    return res.status(200).json({
      ok: 1,
      ph: phValue,
      temp: tempValue
    });
  }

  res.status(405).end();
}