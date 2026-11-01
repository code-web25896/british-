import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de parsing JSON
app.use(express.json());

// Servir les fichiers statiques générés par Vite dans dist/
app.use(express.static(path.join(__dirname, 'dist')));

// Route de vérification de santé (Health Check)
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    environment: process.env.NODE_ENV || 'production',
    timestamp: new Date().toISOString()
  });
});

// Redirection SPA : Toutes les requêtes non-fichiers retournent index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`[ABAC Server] Application démarrée avec succès sur le port ${PORT}`);
  console.log(`[ABAC Server] Environnement : ${process.env.NODE_ENV || 'production'}`);
});
