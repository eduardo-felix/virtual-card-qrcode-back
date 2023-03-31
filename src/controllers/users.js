const qr = require ('qr-image');
const { knex } = require('../configs/dbConection');

const generateQrcode = async (id) => {
  try {
    const user = await knex('users').where('id', id).first();
    const formatedName = user.name.replace(/\s+/g, '').toLowerCase();
    const url = `${process.env.BASE_URL}${id}/${formatedName}`;
    const qrcode = qr.image(url, { type: 'svg' });

    return new Promise((resolve, reject) => {
      const chunks = [];
      qrcode.on('data', (chunk) => chunks.push(chunk));
      qrcode.on('end', () => resolve(Buffer.concat(chunks)));
      qrcode.on('error', (error) => reject(error));
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to generate QR code');
  }
};

const registerUser = async (req, res) => {
  const { name, linkedin, github } = req.body;

  try {
    const [registeredUser] = await knex('users')
      .insert({
        name,
        linkedin,
        github,
      })
      .returning('*');
      
    const { id } = registeredUser;
    const qrcodeBuffer = await generateQrcode(id);
    const qrcodeBase64 = qrcodeBuffer.toString('base64');
    const qrcodeDataUri = `data:image/svg+xml;base64,${qrcodeBase64}`;

    return res.status(201).json({ qrcode: qrcodeDataUri });
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};
  

const getUser = async (req, res) =>{
    const { id } = req.params;

    try {
        const userFound = await knex('users').select('*').where('id', id).first()
        if (!userFound) {
            return res.status(404).json({ mensagem: 'User not found' })
        }

        return res.status(201).json(userFound)


    } catch (error) {
        
    }
};

module.exports = {
    registerUser,
    generateQrcode,
    getUser
}