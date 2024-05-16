export const validateBody = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res
        .status(400)
        .json({
          message: "validation error",
          error: result.error.details[0].message,
        });
    }
    next();
  };
};
