import chalk from "chalk";
import inquirer from "inquirer";
let genNum = Math.floor(Math.random() * 3);
let user = await inquirer.prompt({
    name: "num1",
    type: "list",
    message: "Please Select the Number",
    choices: ["0", "1", "2", "3", "4", "5"]
});
if (genNum == parseInt(user.num1)) {
    console.log(chalk.bold.blueBright("Congratulation you won "));
}
else {
    console.log(chalk.bold.redBright("Sorry , Better Luck Next Time"));
}
