// pages/api/resume.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    // Get the path to the PDF file
    const filePath = path.join(process.cwd(), 'public', 'assets', 'pdf', 'resume.pdf');

    try {
        // Read the file
        const pdf = fs.readFileSync(filePath);

        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Length', pdf.length);

        // Send the PDF file as response
        res.status(200).send(pdf);
    } catch (error) {
        console.error(error);
        res.status(500).end('Server Error');
    }
}
