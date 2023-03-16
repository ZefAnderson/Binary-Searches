describe('BST', function () {
    var bst;
  
    beforeEach(function () {
      bst = new BinarySearchTree();
    });
  
    describe('insert', () => {
      it('should insert element with key 8 correctly', function () {
        bst.insert(8);
        expect(bst.find(8)).toBe(true);
      });
      it('should insert elements with key 8, 10, 3 correctly', function () {
        bst.insert(8);
        bst.insert(10);
        bst.insert(3);
        expect(bst.find(8)).toBe(true);
        expect(bst.find(10)).toBe(true);
        expect(bst.find(3)).toBe(true);
      });
      it('should insert elements with key 8, 10, 3, 1, 6, 14 correctly', function () {
        bst.insert(8);
        bst.insert(10);
        bst.insert(3);
        bst.insert(1);
        bst.insert(6);
        bst.insert(14);
        bst.insert(13);
        expect(bst.find(8)).toBe(true);
        expect(bst.find(10)).toBe(true);
        expect(bst.find(3)).toBe(true);
        expect(bst.find(1)).toBe(true);
        expect(bst.find(6)).toBe(true);
        expect(bst.find(14)).toBe(true);
        expect(bst.find(13)).toBe(true);
      });
    });
  
    describe('find', () => {
      it('should find elements with key 8, 10, 3, 1, 6, 14 correctly', function () {
        bst.insert(8);
        bst.insert(10);
        bst.insert(3);
        bst.insert(1);
        bst.insert(6);
        bst.insert(14);
        bst.insert(13);
        expect(bst.find(8)).toBe(true);
        expect(bst.find(10)).toBe(true);
        expect(bst.find(3)).toBe(true);
        expect(bst.find(1)).toBe(true);
        expect(bst.find(6)).toBe(true);
        expect(bst.find(14)).toBe(true);
        expect(bst.find(13)).toBe(true);
      });
  
      it('should not find elements with key 5, 11, 40', function () {
        bst.insert(8);
        bst.insert(10);
        bst.insert(3);
        bst.insert(1);
        bst.insert(6);
        bst.insert(14);
        bst.insert(13);
        expect(bst.find(5)).toBe(false);
        expect(bst.find(11)).toBe(false);
        expect(bst.find(40)).toBe(false);
      });
    });
});