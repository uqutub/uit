var itemsPerPage = 4;
var pageNum = 1;

Model.find({})
    .limit(itemsPerPage)
    .skip(itemsPerPage * pageNum)
    .then(docs => {
        console.log('docs ', docs);
    }).catch(console.log);