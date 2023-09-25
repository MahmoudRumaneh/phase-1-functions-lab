function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(startBlock - endBlock);
    return blocks * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    const feet = distanceTravelledInFeet(startBlock, endBlock);

    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
};
