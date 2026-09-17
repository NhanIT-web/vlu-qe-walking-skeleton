const login = require("./login");

describe("Kiểm thử chức năng đăng nhập", () => {

    test("Đăng nhập thành công với tài khoản đúng", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Đăng nhập thất bại khi sai mật khẩu", () => {
        expect(login("admin", "1234")).toBe(false);
    });

    test("Đăng nhập thất bại khi sai tài khoản", () => {
        expect(login("user", "123")).toBe(false);
    });

});
