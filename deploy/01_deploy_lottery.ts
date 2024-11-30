import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// Add configuration variables
const tokenName = "Lottery Token";
const tokenSymbol = "LT0";
const purchaseRatio = 1000;
const betPrice = 1000;
const betFee = 100;

const deployLottery: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    await deploy("Lottery", {
        from: deployer,
        args: [
            tokenName,
            tokenSymbol,
            purchaseRatio,
            betPrice,
            betFee
        ],
        log: true,
        autoMine: true,
    });
};

export default deployLottery;

deployLottery.tags = ["Lottery"];