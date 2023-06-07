function salary(input) {
    let n = Number(input[0]);
    let salary = Number(input[1]);

    let currentTabIndex = 2;

    for (let i = 1; i <= n; i++) {
        let currentTab = input[currentTabIndex];

        switch (currentTab) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -=50;
                break;
        }

        currentTabIndex += 1;
    }

    if (salary <= 0) {
        console.log("You have lost your salary.")
    }
    else {
        console.log(salary);
    }
}