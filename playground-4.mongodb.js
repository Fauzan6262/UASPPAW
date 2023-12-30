// Definisi skema untuk koleksi 'contacts'
const contactSchema = {
    nama: {
      type: String,
      required: true,
    },
    namaPanggilan: {
      type: String,
      required: true,
    },
    perusahaan: {
      type: String,
    },
    jabatan: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    noHP: {
      type: String,
    },
    grup: {
      type: String,
    },
  };
  
  // Membuat koleksi 'contacts' dengan skema yang telah ditentukan
  db.createCollection('contacts', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['nama', 'namaPanggilan', 'email'],
        properties: contactSchema,
      },
    },
  });
  
  // Contoh penambahan data ke koleksi 'contacts'
  db.contacts.insertOne({
    nama: 'John Doe',
    namaPanggilan: 'John',
    perusahaan: 'ABC Corp',
    jabatan: 'Manager',
    email: 'john.doe@example.com',
    noHP: '123-456-7890',
    grup: 'Pribadi',
  });
  