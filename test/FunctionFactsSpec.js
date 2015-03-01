describe("Functions", function() {

  describe("Named", function() {
    beforeEach(function() {
      function isOnWindow() { return true; }
    });

    it("is assigned to window if is not assigned to a var", function() {
      expect(typeof window.isOnWindow === "function");
    });

    it("It has a name", function() {
      function isOnWindow() { return true; }
      
      expect(isOnWindow.name === "isOnWindow");
    });
  });

});
