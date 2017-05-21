var people = [
  {
    "id": 1,
    "firstName": "Paul",
    "surname": "Crowe",
    "age": 28,
    "gender": "male",
    "friends": [
      2
    ]
  },
  {
    "id": 2,
    "firstName": "Rob",
    "surname": "Fitz",
    "age": 23,
    "gender": "male",
    "friends": [
      1,
      3
    ]
  },
  {
    "id": 3,
    "firstName": "Ben",
    "surname": "O'Carolan",
    "age": null,
    "gender": "male",
    "friends": [
      2,
      4,
      5,
      7
    ]
  },
  {
    "id": 4,
    "firstName": "Victor",
    "surname": "",
    "age": 28,
    "gender": "male",
    "friends": [
      3
    ]
  },
  {
    "id": 5,
    "firstName": "Peter",
    "surname": "Mac",
    "age": 29,
    "gender": "male",
    "friends": [
      3,
      6,
      11,
      10,
      7
    ]
  },
  {
    "id": 6,
    "firstName": "John",
    "surname": "Barry",
    "age": 18,
    "gender": "male",
    "friends": [
      5
    ]
  },
  {
    "id": 7,
    "firstName": "Sarah",
    "surname": "Lane",
    "age": 30,
    "gender": "female",
    "friends": [
      3,
      5,
      20,
      12,
      8
    ]
  },
  {
    "id": 8,
    "firstName": "Susan",
    "surname": "Downe",
    "age": 28,
    "gender": "female",
    "friends": [
      7
    ]
  },
  {
    "id": 9,
    "firstName": "Jack",
    "surname": "Stam",
    "age": 28,
    "gender": "male",
    "friends": [
      12
    ]
  },
  {
    "id": 10,
    "firstName": "Amy",
    "surname": "Lane",
    "age": 24,
    "gender": "female",
    "friends": [
      5,
      11
    ]
  },
  {
    "id": 11,
    "firstName": "Sandra",
    "surname": "Phelan",
    "age": 28,
    "gender": "female",
    "friends": [
      5,
      10,
      19,
      20
    ]
  },
  {
    "id": 12,
    "firstName": "Laura",
    "surname": "Murphy",
    "age": 33,
    "gender": "female",
    "friends": [
      7,
      9,
      13,
      20
    ]
  },
  {
    "id": 13,
    "firstName": "Lisa",
    "surname": "Daly",
    "age": 28,
    "gender": "female",
    "friends": [
      12,
      14,
      20
    ]
  },
  {
    "id": 14,
    "firstName": "Mark",
    "surname": "Johnson",
    "age": 28,
    "gender": "male",
    "friends": [
      13,
      15
    ]
  },
  {
    "id": 15,
    "firstName": "Seamus",
    "surname": "Crowe",
    "age": 24,
    "gender": "male",
    "friends": [
      14
    ]
  },
  {
    "id": 16,
    "firstName": "Daren",
    "surname": "Slater",
    "age": 28,
    "gender": "male",
    "friends": [
      18,
      20
    ]
  },
  {
    "id": 17,
    "firstName": "Dara",
    "surname": "Zoltan",
    "age": 48,
    "gender": "male",
    "friends": [
      18,
      20
    ]
  },
  {
    "id": 18,
    "firstName": "Marie",
    "surname": "D",
    "age": 28,
    "gender": "female",
    "friends": [
      17
    ]
  },
  {
    "id": 19,
    "firstName": "Catriona",
    "surname": "Long",
    "age": 28,
    "gender": "female",
    "friends": [
      11,
      20
    ]
  },
  {
    "id": 20,
    "firstName": "Katy",
    "surname": "Couch",
    "age": 28,
    "gender": "female",
    "friends": [
      7,
      11,
      12,
      13,
      16,
      17,
      19
    ]
  }
]


function peopleTable (arr) {
    var fill = "";
    
    for(i = 0; i < arr.length; i++) {
    	fill = "";
    	fill = "<tr id='"+arr[i].id+"' onclick='friendsTable("+arr[i].id+")'>";
        fill += '<td>' + arr[i].firstName + '</td>';
        fill += '<td>' + arr[i].surname + '</td>';
        fill += '<td>' + arr[i].age + '</td>';
        fill += '<td>' + arr[i].gender + '</td>';
        fill += "</tr>";
        document.getElementById("peoples").innerHTML += fill;
    }
}

peopleTable(people);
  
  

function friendsTable (id) {
    document.getElementById("friends").innerHTML ="<tr><th>First Name: </th><th>Surname : </th><th>Age: </th><th>Gender: </th></tr>";
    var directFriends;
    var fill;
    
    for(var i = 0; i < people.length; i++) {
	 	if(id == people[i].id) {
	 		directFriends = people[i].friends;
	 	}
    }
	

	 for(var i = 0; i < directFriends.length; i++) {
	 	for(var j = 0; j < people.length; j++) {
	 		if(directFriends[i] == people[j].id) {
	 		fill = "";
		    	fill = "<tr>";
		        fill += '<td>' + people[j].firstName + '</td>';
		        fill += '<td>' + people[j].surname + '</td>';
		        fill += '<td>' + people[j].age + '</td>';
		        fill += '<td>' + people[j].gender + '</td>';
		        fill += "</tr>";
		        document.getElementById("friends").innerHTML += fill;
	 		}
		 }
	 }
}
