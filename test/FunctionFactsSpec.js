describe("Functions", function() {

  describe("Named", function() {
    function isOnWindow() { return true; }

    it("is assigned to window if is not assigned to a var", function() {
      expect(typeof window.isOnWindow === "function");
    });

    it("It has a name", function() {
      function isOnWindow() { return true; }

      expect(isOnWindow.name === "isOnWindow");
    });
  });

  describe("Anonymous", function() {
    var anonymous = function() { return true; };

    it("is a regular function", function() {
        expect(typeof anonymous).toEqual("function");
    });

    it("has no name", function() {
      expect(anonymous.name).toEqual("");
    });

  });

  describe("Scopes", function() {
    it("creates new scopes", function() {
      function outer() {
        expect(typeof inner).toEqual("function", "Is in scope even before declaration");

        function inner() {}

        // Is not in the global scope
        expect(typeof window.inner).toEqual(undefined);
      }
    });
  });

});
