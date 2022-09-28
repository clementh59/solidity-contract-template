// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IHasher {
  function poseidon(uint256[2] memory) external pure returns (uint256);
}

contract MyContract {
  uint256 public constant CONST = 0x27;

  uint32 public immutable param;

  // hasher contract instance that computes poseidon hashes
  //IHasher public immutable hasher;

  // mapping example
  mapping(uint256 => uint256) public myMapping;

  // The number of inserted leaves
  uint32 private nextLeafIndex = 0;

  // The index of the current root in the roots mapping
  uint32 private currentRootIndex;

  // The event emitted when a leaf is successfully added to the tree
  event LeafAdded(uint256 indexed leaf);

  constructor(uint32 _param) {
    require(_param > 0, '_param should be greater than zero');
    param = _param;
  }
}
