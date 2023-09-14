// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract UtilityContract {
    struct Utility {
        uint256 utilityId;
        string utilityName;
        bool expirable;
        uint256 expiry;
        uint256 redeem_limit;
    }

    Utility[] public utilities;

    event UtilityAdded(
        uint256 indexed utilityId,
        string utilityName,
        bool expirable,
        uint256 expiry,
        uint256 redeem_limit
    );

    function addUtility(
        uint256 _utilityId,
        string memory _utilityName,
        bool _expirable,
        uint256 _expiry,
        uint256 _redeemLimit
    ) public {
        Utility memory newUtility = Utility({
            utilityId: _utilityId,
            utilityName: _utilityName,
            expirable: _expirable,
            expiry: _expiry,
            redeem_limit: _redeemLimit
        });

        utilities.push(newUtility);
        emit UtilityAdded(_utilityId, _utilityName, _expirable, _expiry, _redeemLimit);
    }

    function getUtilityCount() public view returns (uint256) {
        return utilities.length;
    }

    function getUtility(uint256 index)
        public
        view
        returns (
            uint256 utilityId,
            string memory utilityName,
            bool expirable,
            uint256 expiry,
            uint256 redeem_limit
        )
    {
        require(index > 0 && index <= utilities.length, "Index out of bounds");
        Utility storage utility = utilities[index - 1];
        return (
            utility.utilityId,
            utility.utilityName,
            utility.expirable,
            utility.expiry,
            utility.redeem_limit
        );
    }
}