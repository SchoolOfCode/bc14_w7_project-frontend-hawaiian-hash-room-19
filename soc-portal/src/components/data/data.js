import profileImageHung from "./Images/hung.png";
import profileImageHani from "./Images/hani.png";
import profileImageSam from "./Images/sam.png";
import profileImageAhia from "./Images/ahia.png";

export const loginData =  [  
  {
      firstName: "Hani",
      surname: "Abdi",
      username:"hania",
      email: "hani@gmail.com",
      password: "1234"
  },  
   {
      firstName: "Samuel",
      surname: "Williamson",
      username:"samw",
      email: "samw@gmail.com",
      password: "1234"
  },  
  {
      firstName: "Ahia",
      surname: "Jalil",
      username:"ahiaj",
      email: "ahiaj@gmail.com",
      password: "1234"
  },  
  {
      firstName: "Hung",
      surname: "Vo",
      username:"hungv",
      email: "hungv@gmail.com",
      password: "1234"
  },  
]  

export const userData = [

    {
        firstName: "Hung",
        surname: "Vo",
        email: "hungv@gmail.com",
        appId: "kksjd88sh311hd",
        image: profileImageHung,
        toDoList: [ 
            { task: "Make avatar", dueDate: "16/01/2023", completed: true},
            { task: "Record and upload video interview", dueDate: "29/01/2023", completed: false},
            { task: "Make scratch game", dueDate: "16/01/2023", completed: true},
            { task: "Join group interview", dueDate: "25/01/2023", completed: false},
            { task: "Read documentation on git and download git", dueDate: "15/02/2023", completed: false},
            { task: "Make tribute page", dueDate: "25/04/2023", completed: false},
        ]
    },
    {
        firstName: "Ahia",
        surname: "Jalil",
        email: "ahiaj@gmail.com",
        appId: "js8dhfg46s99s3",
        image: profileImageAhia,
        toDoList: [ 
            { task: "Make avatar", dueDate: "16/01/2023", completed: true},
            { task: "Record and upload video interview", dueDate: "29/01/2023", completed: true},
            { task: "Make scratch game", dueDate: "16/01/2023", completed: true},
            { task: "Join group interview", dueDate: "25/01/2023", completed: true},
            { task: "Read documentation on git and download git", dueDate: "15/02/2023", completed: false},
            { task: "Make tribute page", dueDate: "25/04/2023", completed: false},
        ]
    },
    {
        firstName: "Samuel",
        surname: "Williamson",
        email: "samw@gmail.com",
        appId: "llskkd998shdjf",
        image: profileImageSam,
        toDoList: [ 
            { task: "Make avatar", dueDate: "16/01/2023", completed: true},
            { task: "Record and upload video interview", dueDate: "29/01/2023", completed: true},
            { task: "Make scratch game", dueDate: "16/01/2023", completed: true},
            { task: "Join group interview", dueDate: "25/01/2023", completed: true},
            { task: "Read documentation on git and download git", dueDate: "15/02/2023", completed: true},
            { task: "Make tribute page", dueDate: "25/04/2023", completed: true},
        ]
    },
    {
        firstName: "Hani",
        surname: "Abdi",
        email: "hani@gmail.com",
        appId: "jshhd6sgh36sgd",
        image: profileImageHani,
        toDoList: [ 
            { task: "Make avatar", dueDate: "16/01/2023", completed: true},
            { task: "Record and upload video interview", dueDate: "29/01/2023", completed: false},
            { task: "Make scratch game", dueDate: "16/01/2023", completed: true},
            { task: "Join group interview", dueDate: "25/01/2023", completed: false},
            { task: "Read documentation on git and download git", dueDate: "15/02/2023", completed: false},
            { task: "Make tribute page", dueDate: "25/04/2023", completed: true},
            { task: "Read through HTML and CSS", dueDate: "20/03/2023", completed: false},
            { task: "Set up your development environment", dueDate: "25/02/2023", completed: true},
        ]
    }
]

export default userData;