import { AnySchema, ValidationError } from "yup"; // Import các kiểu từ yup để sử dụng cho validation và lỗi
import { NextFunction, Request, Response } from "express"; // Import các kiểu chuẩn từ express để sử dụng trong middleware

// Hàm middleware validateSchemaYup là một higher-order function nhận vào schema Yup và trả về một middleware
const validateSchemaYup =
  (
    schema: AnySchema // Nhận vào một schema Yup tùy chỉnh
  ) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Middleware bất đồng bộ nhận req, res, next từ Express
    try {
      // Tiến hành validate schema với dữ liệu từ request
      await schema.validate(
        {
          body: req.body, // Xác thực dữ liệu trong phần body của request
          query: req.query, // Xác thực dữ liệu trong các tham số query string của request (ví dụ ?page=1&limit=10)
          params: req.params, // Xác thực dữ liệu trong tham số URL (ví dụ /users/:id)
        },
        {
          abortEarly: false, // Lấy tất cả các lỗi (không dừng lại khi gặp lỗi đầu tiên)
          stripUnknown: true, // Loại bỏ các trường không có trong schema khỏi dữ liệu
        }
      );

      next(); // Nếu không có lỗi, chuyển sang middleware tiếp theo trong chuỗi xử lý
    } catch (err: any) {
      // Nếu gặp lỗi, xử lý chúng
      if (err instanceof ValidationError) {
        // Kiểm tra xem lỗi có phải là lỗi ValidationError từ yup không
        // Tạo một thông báo lỗi duy nhất từ mảng lỗi của yup
        const errorMessages = err.errors.join(", "); // Kết nối tất cả các lỗi thành một chuỗi duy nhất, thay vì một mảng

        res.status(400).json({
          // Trả về response với mã lỗi 400 và thông báo lỗi
          statusCode: 400, // Mã lỗi HTTP
          message: errorMessages, // Thông báo lỗi được nối lại thành chuỗi
          typeError: "validateSchema", // Loại lỗi là validateSchema
        });
      } else {
        next(err); // Nếu không phải lỗi từ yup, chuyền lỗi cho ứng dụng xử lý tiếp
      }
    }
  };

export default validateSchemaYup; // Export middleware validateSchemaYup để sử dụng ở nơi khác trong ứng dụng
