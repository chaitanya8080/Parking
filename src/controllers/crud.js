



const Post= (model)=>async (req,res,next)=>{
    try {
        const user = await model.create(req.body)
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}


const Get = (model)=> async (req,res,next)=>{
    try {
        const user = await model.find().lean().exec();
        return res.send(user);
    } catch (error) {
        return res.status(500).send({Error: error.message});
    }
}

const GetOne = (model)=> async (req,res,next)=>{
    try {
        const user = await model.findOne({user_id : req.params.id}).lean().exec();
        return res.send(user);
    } catch (error) {
        return res.status(500).send({Error: error.message});
    }
};

const Delete = (model) => async (req, res) => {
    try {
      const user = await model.findByIdAndDelete(req.params.id).lean().exec();
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ Error: err.message });
    }
  };

  const Patch = (model) => async (req, res) => {
    try {
      const user = await model
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .lean()
        .exec();
      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send({ Error: err.message });
    }
  };

    
  module.exports = (model) => {
    return {
      Post: Post(model),
      Get: Get(model),
      GetOne : GetOne(model),
      Delete : Delete(model),
      Patch : Patch(model)
    };
  };