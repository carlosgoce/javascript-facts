describe("Functions", function() {

  it("is assigned to window if is not assigned to a var", function() {

      function isOnWindow() {
          return true;
      }

      expect(typeof window.isOnWindow === "function", "Function is defined");
      expect(isOnWindow.name === "isOnWindow", "isOnWindow() has a name");
  });

});
