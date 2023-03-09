  describe('binaryJump', function () {
    it('should return the position of an item at the start of the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryJump(arr, 1)).toEqual(1);
    })
    it('should return the position of an item at the end of the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryJump(arr, 41)).toEqual(13);
    })
    it('should return the position of an item somewhere inside the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryJump(arr, 29)).toEqual(10);
    })
    it('should return "Not found" if the item is not in the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryJump(arr, 25)).toEqual("Not found");
    })
  })
  describe('binaryInterpolation', function () {
    it('should return the position of an item at the start of the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryInterpol(arr, 1)).toEqual(1);
    })
    it('should return the position of an item at the end of the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryInterpol(arr, 41)).toEqual(13);
    })
    it('should return the position of an item somewhere inside the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryInterpol(arr, 29)).toEqual(10);
    })
    it('should return "Not found" if the item is not in the list', function () {
      let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
      expect(binaryInterpol(arr, 25)).toEqual("Not found");
    })
  })
