const validateBook = (req, res, next) => {
    const { title, author, rating } = req.body;
    const errors = [];
    
    // Check required fields
    if (!title) {
      errors.push('Title is required');
    }
    
    if (!author) {
      errors.push('Author is required');
    }
    
    // Validate rating if provided
    if (rating !== undefined) {
      if (isNaN(rating) || rating < 1 || rating > 5) {
        errors.push('Rating must be a number between 1 and 5');
      }
    }
    
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: errors
      });
    }
    
    next();
  };
  
  module.exports = validateBook;