export const controllerWrapper = (controller) => {
  const wrap = async (req, res) => {
    try {
      await controller(req, res);
    } catch (error) {
      console.log(error);
      res.status(error.status || 500).send(error.message);
    }
  };

  return wrap;
};
