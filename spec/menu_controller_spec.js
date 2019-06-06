const MenuController = require("../controllers/MenuController");

describe("MenuController", () => {

	beforeEach(() => {
		this.menu = new MenuController();
	});


	describe("#remindMe()", () => {
		it("should return string 'Learning is a life-long pursuit' when called", () => {
			expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
		})
	})

	describe("#getContactCount()", () => {

		it("should return 0 when no contacts are in the book", () => {
			expect(this.menu.getContactCount()).toBe(0);
		});

		it("should return 1 when there is exactly one contact in the book", () => {
			this.menu.book.addContact("Kerry", "555-555-5555");
			expect(this.menu.getContactCount()).toBe(1);

		});
	});
});	