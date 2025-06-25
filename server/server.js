// Import konfigurasi dan express
import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Gunakan Promise global agar lebih aman dan konsisten
mongoose.Promise = global.Promise

// Koneksi ke MongoDB
mongoose.connect('mongodb+srv://WEB:CLASSROOM@classroom.q23afo1.mongodb.net/web-classroom?retryWrites=true&w=majority&appName=CLASSROOM', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB at', config.mongoUri)
})
.catch((err) => {
  console.error('❌ Failed to connect to MongoDB:', err)
  // Menampilkan error dan keluar dari proses
  process.exit(1)
});

// Jalankan server setelah koneksi sukses
app.listen(config.port, (err) => {
  if (err) {
    console.error('❌ Server failed to start:', err)
  } else {
    console.info('🚀 Server started on port %s.', config.port)
  }
})
