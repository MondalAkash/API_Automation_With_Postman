const newman = require('newman');

newman.run({
    collection: 'https://api.postman.com/collections/27813084-6dfed46a-94fc-43db-bc3e-696c2f4ab3ea?access_key=PMAT-01H9DDRV2VB191ZD9Y2PKBT6B5',
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra:{
            export: './Reports/report.html',
        }
    }
}, function(err){
    if(err){throw err}
    console.log('Collection Run Completed');
});