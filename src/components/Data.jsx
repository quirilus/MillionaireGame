//import React from "react";

// This data we can actually access it from an API, or mongoDB (database)
//meanwhile I'II be creating it manually...As a component and consuming it in the Quiz comp:

const data = [
     {
    id: 1,
    question: "Rolex is a company that spacializes in what type of products:?",
    answer: [
        {
    text: 'phone',
    correct: false
        },
        
        {
    text: 'whatches',
    correct: true
    },

    {
    text: 'food',
    correct: false
        },
    {
    text: 'cosmetics',
    correct: false
        }
    ]
},

{
    id: 2,
    question: "When did the website facebook launched?",
    answer: [
        {
        text: '2006',
        correct: false
        },
        
    {
        text: '1890',
        correct: false
    },

    {
        text: '2005',
        correct: false
        },
    {
        text: '2004',
        correct: true
        }
    ]
},

{
    id: 3,
    question: "Which is the best software company in nigeria?",
    answer: [
        {
        text: 'Facebook',
        correct: false
        },
        
    {
        text: "Nigeria coder's Academy",
        correct: false
    },

    {
        text: 'Ogtech Network Ltd',
        correct: true
        },

    {
        text: 'soft space ltd',
        correct: false
        }
    ]
},

{
    id: 4,
    question: "Who played the character of harry potter in movie?",
    answer: [
        {
        text: 'Daniel red clif',
        correct: true
        },
        
    {
    text: 'Apolo quirilus',
    correct: false
    },

    {
        text: 'James Mwaniki',
        correct: false
        },

    {
        text: 'Brian otieno',
        correct: false
        }
    ]
}

]

export default data;