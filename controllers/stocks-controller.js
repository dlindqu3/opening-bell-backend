
const getStockBySymbol = (req, res, next) => {
  const companySymbol = req.params.symbol;
  res.json({"test": companySymbol});
}

const getStocksByUserId = (req, res, next) => {
  const userId = req.params.id;
  res.json({"user": userId});
}

// const createStockInstance = (req, res, next) => {
//   const  { test } =  req.body; 
//   const createdStock = {
//     test,
//   }
//   // use 201 if you created something 
//   res.status(201).json(createdStock);
// }

exports.getStockBySymbol = getStockBySymbol; 
exports.getStocksByUserId = getStocksByUserId;
// exports.createStockInstance = createStockInstance; 