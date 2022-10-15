class Member {
    constructor(name,position) {
        this.name = name;
        this.position = position;
    }
}

class Team {
    constructor (id,name) {
     this.id = id;
     this.name = name;
     this.members = [];
    }
      

    addMember(member) {
        this.members.push(member);
    }

    deleteMember(member) {
        let index = this.members.indexOf(member);
        this.members.splice(index, i);
    }
}

let teams =[];
let teamID = 0;

onClick('new-team', () => {
    teams.push(new Team(teamId++, getValue('new-team-name')));
    dtawDOM();
});

function onClick(id, action) {
    let element = document.getElementById(id);
    element.addEventListener('click', action)
    return element;
}
function getValue (id) {
    return document.getElementById(id).value;
}

function drawDOM() {
    let teamDiv = document.getElementById('teams')
    clearElement(teamDiv);
    for (each of teams) {
      let table = createTeamTable(team);
      let title = document.createElemen('h2')
      title.innerHTML = team.name;
      title.appendChild(createDeleteTeamButton(team));
      teamDiv.appendChild(title);
      teamDiv.appendChild(table);
      for (member of team.members) {
         createMemberRow(team,table, member);
      }
    }
}

function createMemberRow(team,table,member) {
    let ro = table.insertRow(2);
    row.insertCell(0).innerHTML = member.name;
    row.insertCell(1).innerHTML - member.position;
    let actions = row.insertCell(2);
    action.appendChild(createDeleRowButton(team,member))
}

function createDeleRowButton(team,member) {
    let btn = document.createElement('button');
    btn.classname = 'btn btn-primary';
    btn.innerHMTL = 'Delete'
    btn.onclick = () => {
        let index = team.members.indexOf(member);
        team.members.splic(index, 1);
        drawDOM();
    };
}

function createDeleteTeamButton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTMLL = 'Delete Team';
    btn.onclick = () => {
        let index = teams.indexOf(team);
        teams.splice(index,1);
        drawDOM();
    };
 return btn;
}

function createNewMemberVutton(team) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
        team.members. push(new Member(getValue(`name-input-${team.id}`),getValue(`position-input-${team.id}`)));
        drawDOM();
    }
    return btn;
}


function TeamTable (team) {
    let table = document.createElement('table')
    table.setAttribute('class','tabke table-dark table-stripped');
    let row = insertRow(0);
    let nameColumn = document.createElement('th');
    let positionColumn = document.createElement('th');
    nameColumn.innerHTML = 'Name';
    positionColumm = document.createElement('th');
    row.appendChild(nameColumn);
    row.appendChild(positionColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let positionTH = document.createElement('th')
    let createTh = document.createElement('th');
    let nameInput = document.createElement('th');
    nameInput.setAttribute('id',`name-input-${team.id}`);
    nameInput.setAttribute('type','test');
    nameInput.setAttribute('class', 'form-control');
    let positionInput = document.createElement('th');
    nameInput.setAttribute('id',`name-input-${team.id}`);
    nameInput.setAttribute('type','test');
    nameInput.setAttribute('class', 'form-control');
    let newMemberButton = createNewMemberButton(team);
    nameTh.appendChild(nameInput);
    positionTH.appendChild(positionInput);
    createTh.appendChild(newMemberButton);
    formRow.appendChild(nameTh);
    formRow.appendChild(postionTh);
    formRow.appendChild(createTh)
    return table;
}


function clearElement(element) {
    while(element.firstchild) {
        element.removeChild(element.firstChild);
    }
}