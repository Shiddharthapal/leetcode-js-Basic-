/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robots, factories) {
    robots.sort((a, b) => a - b);
    factories.sort((a, b) => a[0] - b[0]);

    let robotCount = robots.length;
    let factoryCount = factories.length;
    let INF = 1e18;

    let dp = Array.from({ length: robotCount + 1 }, () => 
        Array(factoryCount + 1).fill(INF)
    );

    for (let j = 0; j <= factoryCount; j++) dp[0][j] = 0;

    for (let j = 1; j <= factoryCount; j++) {
        let [factoryPosition, capacity] = factories[j - 1];

        for (let i = 0; i <= robotCount; i++) {
            dp[i][j] = dp[i][j - 1];

            let totalDistance = 0;

            for (let k = 1; k <= capacity && i - k >= 0; k++) {
                totalDistance += Math.abs(robots[i - k] - factoryPosition);
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i - k][j - 1] + totalDistance
                );
            }
        }
    }

    return dp[robotCount][factoryCount];
};
console.log(minimumTotalDistance([0,4,6],[[2,2],[6,2]]));