const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Simulated database (JSON file)
const DATA_FILE = 'content.json';

// Load existing content
theData = [];
if (fs.existsSync(DATA_FILE)) {
    theData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

// Get all content
app.get('/api/content', (req, res) => {
    res.json(theData);
});

// Add new content
app.post('/api/content', (req, res) => {
    const newContent = req.body;
    theData.push(newContent);
    fs.writeFileSync(DATA_FILE, JSON.stringify(theData, null, 2));
    res.status(201).json({ message: 'Content added' });
});

// Update content
app.put('/api/content/:id', (req, res) => {
    const { id } = req.params;
    const updatedContent = req.body;
    theData[id] = updatedContent;
    fs.writeFileSync(DATA_FILE, JSON.stringify(theData, null, 2));
    res.json({ message: 'Content updated' });
});

// Delete content
app.delete('/api/content/:id', (req, res) => {
    const { id } = req.params;
    theData.splice(id, 1);
    fs.writeFileSync(DATA_FILE, JSON.stringify(theData, null, 2));
    res.json({ message: 'Content deleted' });
});

app.listen(PORT, () => {
    console.log(`CMS running on http://localhost:${PORT}`);
});
