export const validateBody = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (!result.error) {
      next();
    }
    res.status(429).json({ message: "validation error", error: result.error });
  };
};
