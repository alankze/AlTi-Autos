const Car = require("../models/car");

const createCar = async (req, res) => {
  console.log("sdfsdfsdfsdf",req.body)
  try {
    const newCar = await Car.create({ ...req.body, createdBy: req.user._id });

    console.log("🚀 ~ file: Cars.js:6 ~ createCar ~ newCar:", newCar);

    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const getAllCars = async (req, res, next) => {
  try {
    // ApiFeatures();
    const Cars = await Car.find().populate("createdBy", "username email");
    console.log("🚀 ~ file: Cars.js:15 ~ getAllCars ~ Cars:", Cars);
    res.json(Cars);
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
/* const cars = await Car.find({price: {$lte:1000}});

  res.status(200).json({
    success:true,
    data: cars,
  })*/

/*try {
    const Cars = await Car.find({price:{$lte:900}}).populate('createdBy','username email');
    console.log('🚀 ~ file: Cars.js:15 ~ getAllCars ~ Cars:', Cars);
    res.status(200).json({
      success:true,
      data:Cars,
    })
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
  /*try{
  const page = parseInt(req.query.page)-1 ||0;
        const limit = parseInt(req.query.limit)||5;
        const search = req.query.search||"";
        let sort = req.query.sort||"price";
        let brand = req.query.brand||"All";
     
        const brandOptions = [
            "Audi",
            "BMW",
            "Mercedes",
            "Volkswagen",
            "Porsche",
        ];

        brand === "All"
        ?(brand = [...brandOptions])
        :(brand = req.query.brand.split(","));
        req.query.sort?(sort = req.query.sort.split(",")):(sort = [sort]);

        let sortBy = {};
        if(sort[1]){
            sortBy[sort[0]] = sort[1];
        }else {
            sortBy[sort[0]] = "asc";
        }

        const cars = await Car.find({name:{$regex:search,$options:"i"}})
            .where("brand")
            .in([...brand])
            .sort(sortBy)
            .skip(page*limit)
            .limit(limit);

        const total = await Car.countDocuments({
            brand: { $in: [...brand]},
            id: { $regex: search, $options: "i"},
        })

        const response = {
            error: false,
            total,
            page: page + 1,
            limit,
            brands: brandOptions,
            cars,
        };

        res.status(200).json(response);


    } catch (error) {
        console.log(error);
        res.status(500).json({error:true,message:"Internal Server Error"});
    }*/

const getCarById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // await Car.findById(id)
    const Cars = await Car.find({ _id: id }).populate(
      "createdBy",
      "username email"
    );
    console.log("🚀 ~ file: Cars.js:28 ~ getCarById ~ Cars:", Cars);
    if (Cars.length === 0) {
      res.status(404).json({ message: "Car Not Found" });
    }
    res.json(Cars[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateCar = async (req, res) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    // const updatedCar = await Car.findByIdAndUpdate()
    const updatedCar = await Car.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    console.log("🚀 ~ file: Cars.js:46 ~ updateCar ~ updatedCar:", updatedCar);
    if (!updatedCar) {
      res.status(404).json({ message: "Car Not Found" });
    }
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteCar = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    // const deletedCar = await Car.findByIdAndDelete()
    const deletedCar = await Car.findOneAndDelete({ _id: id });
    console.log("🚀 ~ file: Cars.js:62 ~ deleteCar ~ deletedCar:", deletedCar);
    if (!deletedCar) {
      res.status(404).json({ message: "Car Not Found" });
    }
    res.json(deletedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
