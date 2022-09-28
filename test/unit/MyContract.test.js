const { expect } = require('chai');

const PARAM = 10;

describe('MyContract contract', () => {
  let MyContract, myContract;

  beforeEach(async () => {
    MyContract = await ethers.getContractFactory('MyContract');
    myContract = await MyContract.deploy(PARAM);
  });

  describe('Deployment', () => {
    it('should successfully deploy contracts', async () => {
      const address = await myContract.address;

      expect(address).not.to.equal('');
      expect(address).not.to.equal(undefined);
      expect(address).not.to.equal(null);
      expect(address).not.to.equal(0x0);
    });

    it('should set the param passed in the constructor', async () => {
      const param = await myContract.param();
      expect(param).to.equal(PARAM);
    });

    it('should revert when passing wrong values to the constructor', async () => {
      // levels should be between 1 and 32
      await expect(MyContract.deploy(0)).to.be.revertedWith('_param should be greater than zero');
    });
  });

  /*describe('Leaves and roots', () => {
    it('should add leaves and emit events', async () => {
      const tx = await incrementalMerkleTree.addLeaf(123);
      await expect(tx).to.emit(incrementalMerkleTree, 'LeafAdded').withArgs(0);
      const tx2 = await incrementalMerkleTree.addLeaf(456);
      await expect(tx2).to.emit(incrementalMerkleTree, 'LeafAdded').withArgs(1);
    });

    it('should revert when adding more leaves than authorized', async () => {
      for (let i = 0; i < 2 ** NUMBER_OF_LEVEL; i++) {
        await incrementalMerkleTree.addLeaf(123);
      }
      await expect(incrementalMerkleTree.addLeaf(123)).to.be.revertedWith(
        'Merkle tree is full. No more leaves can be added'
      );
    });

  });*/
});
