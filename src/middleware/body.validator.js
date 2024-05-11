export const validateBody = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      res
        .status(400)
        .json({ message: "validation error", error: result.error });
    }
    next();
  };
};
