const multer = require('multer');
const fs = require('fs');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });


  const uploadFile = async(req,res)=>{
    try {
        const uploadedFile = req.file;
  
        if (!uploadedFile) {
            return res.render('index', {    
                title: 'Error, debe de seleccionar un archivo' 
            });
        }

        return res.render('index', { 
            title: 'Archivo subido correctamente', filePath: uploadedFile.path 
        });
    } catch (error) {
        console.log(error)
        return res.render('index', { title: 'Ha ocurrido un error'})
    }
};


const processFile = async (req, res) => {
    const filePath = req.body.filePath;
  
    if (!filePath) {
      return res.render('index', { 
        title: 'directorio del archivo no encontrado' 
        });
    }
    
  
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.error(err);
        }
    
        const { wordCount, charCount, analysis, wordFrequency } = wordsProcessors(data);
    
        res.render('index', {
            result: `El número de palabras que contiene este archivo es: ${wordCount}`,
            result2: `El número de letras que contiene este archivo es: ${charCount}`,
            result3: analysis.tokens,
            result5: wordFrequency,
        });
    });
}









const calculateCharCount = (data) => {
    try {
        return data.length;
    } catch (error) {
        console.error('Error calculating character count:', error);
        return {};
    }
};

const analyzeWordFrequency = (data) => {
    try {
        const words = data.split(/\s+/).filter(word => word.length > 0);
        const wordFrequency = {};

        words.forEach(word => {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        });

        return wordFrequency;
    } catch (error) {
        console.error('Error analyzing word frequency:', error);
        return {};
    }
};

const analyzeSentiment = (data) => {
    try {
        const Sentiment = require('sentiment');
        const sentiment = new Sentiment();
        return sentiment.analyze(data);
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        return {};
    }
};

const wordsProcessors = (data) => {
    try {
        const wordCount = countWords(data);
        const charCount = calculateCharCount(data);
        const wordFrequency = analyzeWordFrequency(data);
        const analysis = analyzeSentiment(data);

        return { analysis, wordFrequency, charCount, wordCount };
    } catch (error) {
        console.error('Error processing words:', error);
        return { error: 'Error processing words' };
    }
};


module.exports ={
    upload,
    uploadFile,
    processFile
} 