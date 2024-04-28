const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
const port = 3001;

const english = require('./src/db/phrases.en-usa.js')
const portuguese = require('./src/db/phrases.pt.js')
const french = require('./src/db/phrasesfr.js')

app.get('/:language', (req, res) => {
    const { language } = req.params;

    if (language === 'en') {
        const phrase = english[Math.floor(Math.random() * english.length - 1)]
        console.log(phrase)
        res.send({ phrase });
    }

    if (language === 'pt') {
        const phrase = portuguese[Math.floor(Math.random() * portuguese.length - 1)]
        console.log(phrase)
        res.send({ phrase });
    }

    if (language === 'fr') {
        const phrase = french[Math.floor(Math.random() * french.length - 1)]
        console.log(phrase)
        res.send({ phrase });
    }

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 
