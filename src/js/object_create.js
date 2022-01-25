// let a =[20,21,22];
// let b =['Rahul','Tulika','Abir'];

// function nameAge(names,ages){
//     let c =[];
//     for(let i=0;i<b.length;i++){
//         c.push({name:names[i],age:ages[i]});
//     }
//     console.log(c);
// }

// nameAge(b,a);

function getNames(resps) {
let data = resps.data;
    for(let i=0; i< data.length;i++){
        console.log(data[i].attributes.name)
    }
}

const response = {
    "data": [
        {
            "id": 15,
            "attributes": {
                "name": "thinktoshare.com",
                "start": "2021-02-13T18:30:00.000000Z",
                "end": "2022-02-13T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 1,
                    "name": "Hosting"
                }
            }
        },
        {
            "id": 14,
            "attributes": {
                "name": "thinktoshare.com",
                "start": "2021-02-13T18:30:00.000000Z",
                "end": "2022-02-13T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 1,
                    "name": "Hosting"
                }
            }
        },
        {
            "id": 13,
            "attributes": {
                "name": "thinktoshare.com",
                "start": "2021-02-13T18:30:00.000000Z",
                "end": "2022-02-13T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 1,
                    "name": "Hosting"
                }
            }
        },
        {
            "id": 6,
            "attributes": {
                "name": "Non aut qui sed et at nemo.",
                "start": "2012-04-20T18:30:00.000000Z",
                "end": "2013-04-20T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 3,
                    "name": "Others"
                }
            }
        },
        {
            "id": 5,
            "attributes": {
                "name": "Non fugit voluptate hic qui.",
                "start": "1984-05-28T18:30:00.000000Z",
                "end": "1985-05-28T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 2,
                    "name": "Domain"
                }
            }
        },
        {
            "id": 4,
            "attributes": {
                "name": "Quis esse rem omnis velit.",
                "start": "1997-08-09T18:30:00.000000Z",
                "end": "1998-08-09T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 1,
                    "name": "Hosting"
                }
            }
        },
        {
            "id": 3,
            "attributes": {
                "name": "Sint asperiores facere est.",
                "start": "1990-12-05T18:30:00.000000Z",
                "end": "1991-12-05T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 3,
                    "name": "Others"
                }
            }
        },
        {
            "id": 2,
            "attributes": {
                "name": "Dolore qui quis dolorem.",
                "start": "2018-12-26T18:30:00.000000Z",
                "end": "2019-12-26T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 2,
                    "name": "Domain"
                }
            }
        },
        {
            "id": 1,
            "attributes": {
                "name": "Quis eum iusto illum.",
                "start": "1984-08-23T18:30:00.000000Z",
                "end": "1985-08-23T18:30:00.000000Z"
            },
            "relationships": {
                "service_type": {
                    "id": 1,
                    "name": "Hosting"
                }
            }
        }
    ],
    "links": {
        "first": "http://127.0.0.1:8000/entities/1/relationships/services?page=1",
        "last": "http://127.0.0.1:8000/entities/1/relationships/services?page=1",
        "prev": null,
        "next": null
    },
    "meta": {
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "http://127.0.0.1:8000/entities/1/relationships/services?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "path": "http://127.0.0.1:8000/entities/1/relationships/services",
        "per_page": 10,
        "to": 9,
        "total": 9
    }
}

getNames(response)
