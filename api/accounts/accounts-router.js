const router = require('express').Router()

router.get('/', (req, res, next) => {
try{

} catch (err) {
  next(err)
  
} 

})

router.get('/:id', (req, res, next) => {
try{

}catch (err) {
  next(err)
  
}
  
})

router.post('/', (req, res, next) => {
try{

}catch (err) {
  next(err)
  
}
  
})

router.put('/:id', (req, res, next) => {
try{

}catch (err) {
  next(err)
  
}
  
});

router.delete('/:id', (req, res, next) => {
try{

}catch (err) {
  next(err)
  
}
  
})

router.use((err, req, res, next) => { // eslint-disable-line
try{

}catch (err) {
  next(err)
  
}
  
})

module.exports = router;
