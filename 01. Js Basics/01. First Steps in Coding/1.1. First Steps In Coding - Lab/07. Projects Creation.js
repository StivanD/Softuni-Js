function projectsCreation(input){
    let name = input[0];
    let projectsCount = Number(input[1]);

    const timeForOneProject = 3;

    console.log(`The architect ${name} will need ${projectsCount * timeForOneProject} hours to complete ${projectsCount} project/s.`)
}
